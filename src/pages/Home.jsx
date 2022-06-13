import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import {
  setCategoriesTitles,
  setCategoryItems,
  setFilters,
} from "../redux/slices/filterSlice";
import { setItems, setSizes, setTypes } from "../redux/slices/itemsSlice";
import axios from "axios";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { SearchContext } from "../App";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeCategoryId, sortType, categoryItems, categoriesTitles } =
    useSelector((state) => state.filter);
  const { items } = useSelector((state) => state.items);

  const { searchValue } = React.useContext(SearchContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const isMounted = React.useRef(false);
  const isSearchHaveParams = React.useRef(false);
  const contentTitle = React.useRef();

  const fetchItems = () => {
    setIsLoading(true);

    axios
      .get(
        `http://5.187.0.127:4000/api/items&category=${activeCategoryId}&sort=${categoryItems[sortType]}`
      )
      .then((res) => {
        res.data ? dispatch(setItems(res.data)) : dispatch(setItems([]));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        dispatch(setItems([]));

        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
      });
  };

  React.useEffect(() => {
    window.scrollTo(0, contentTitle.current.offsetTop);
  }, [activeCategoryId]);
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(params));
    }
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    axios
      .get("http://5.187.0.127:4000/api/settings")
      .then((res) => {
        dispatch(setCategoryItems(res.data.categories));
        dispatch(setCategoriesTitles(res.data.categoriesTitles));
        dispatch(setTypes(res.data.types));
        dispatch(setSizes(res.data.sizes));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
      });

    !isSearchHaveParams.current
      ? fetchItems()
      : (isSearchHaveParams.current = false);
  }, [activeCategoryId, sortType, searchValue]);

  React.useEffect(() => {
    isMounted.current
      ? navigate(
          `?category=${activeCategoryId}&sort=${categoryItems[sortType]}`
        )
      : (isMounted.current = true);
  }, [activeCategoryId, sortType, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        {
          //Check and clear value and onClick in Categories
        }
        <Categories />
      </div>
      <Sort />
      <h2 ref={contentTitle} className="content__title">
        {categoriesTitles[activeCategoryId]}
      </h2>
      <div className="content__items">
        {!items.length && !isLoading ? (
          <div className="not-found">Ничего не найдено... 😕</div>
        ) : isLoading ? (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        ) : (
          items
            .filter((obj) => {
              return obj.title
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            })
            .map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        )}
      </div>
    </div>
  );
};
export default Home;
