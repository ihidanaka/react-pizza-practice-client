import React from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
const Home = () => {
  const [items, setItems] = React.useState([]);
  const [categoryItems, setCategoryItems] = React.useState(["-rating"]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategoryId, setActiveCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    fetch("http://5.187.0.127:4000/api/settings/categories")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        return setCategoryItems(data.categories);
      });
    fetch(
      `http://5.187.0.127:4000/api/items&category=${activeCategoryId}&sort=${categoryItems[sortType]}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={activeCategoryId}
          onClickCategory={(i) => setActiveCategoryId(i)}
        />
      </div>
      <Sort value={sortType} onSetSortType={(i) => setSortType(i)} />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
export default Home;
