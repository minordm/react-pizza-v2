import { useEffect, useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://69457a70ed253f51719b8122.mockapi.io/pizzas"
        );
        if (!response.ok) {
          throw new Error("error in network");
        }

        const data = await response.json();
        setPizzas(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Ошибка в запросе</p>;

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map((pizza) => <PizzaBlock {...pizza} />)}
      </div>
    </>
  );
};
