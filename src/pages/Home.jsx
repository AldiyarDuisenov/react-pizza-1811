import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import React from "react";
import { SearchContext } from "../App";

export const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategoryId, setActiveCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [activePopupId, setActivePopupId] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);

    const order = activePopupId.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = activePopupId.sortProperty.replace("-", "");
    const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://655355e15449cfda0f2e8476.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategoryId, activePopupId, searchValue, currentPage]);

  const items = pizzas.map((pizza) => (
    <PizzaBlock key={pizza.id} {...pizza}></PizzaBlock>
  ));
  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          value={activeCategoryId}
          onClickAction={(id) => setActiveCategoryId(id)}
        />
        <Sort
          value={activePopupId}
          onChangeSort={(id) => setActivePopupId(id)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : items}</div>
      <Pagination onPageChange={(page) => setCurrentPage(page)}></Pagination>
    </>
  );
};

export default Home;
