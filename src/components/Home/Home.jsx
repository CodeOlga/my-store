// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// import Poster from "../Poster/Poster";
// import Products from "../Products/Products";
// import Categories from "../Categories/Categories";
// import Banner from "../Banner/Banner";
// import { filteredByPrice } from "../../features/products/productsSlice";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { products: { list, filtered }, categories } = useSelector((state) => state)


//   useEffect(() => {
//     if (!list.length) return;

//     dispatch(filteredByPrice(100))
//   }, [dispatch, list.length])
//   return (
//     <>
//       <Poster />
//       <Products products={list} amount={5} title='Trending' />
//       <Categories products={categories.list} amount={5} title='Worth seeing' />
//       <Banner />
//       <Products products={filtered} amount={5} title='Less than 100$' />
//     </>
//   );
// };

// export default Home;




// щоб не було непотрібного ререндеру

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { filteredByPrice } from "../../features/products/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const categoriesState = useSelector((state) => state.categories);

  useEffect(() => {
    if (!productsState.list.length) return;

    dispatch(filteredByPrice(100));
  }, [dispatch, productsState.list.length]);

  return (
    <>
      <Poster />
      <Products products={productsState.list} amount={5} title='Trending' />
      <Categories products={categoriesState.list} amount={5} title='Worth seeing' />
      <Banner />
      <Products products={productsState.filtered} amount={5} title='Less than 100$' />
    </>
  );
};

export default Home;
