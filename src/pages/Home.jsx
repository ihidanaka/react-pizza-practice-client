import React from "react";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/items")
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
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
      </div>
      <Sort />
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
