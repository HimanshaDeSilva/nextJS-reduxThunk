"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/productSlice";
import Link from "next/link";
// import Dropdown from './components/Dropdown'

export default function Home() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(productData, "ProductData****************");
  return (
    <div>

      <h1>Products to buy</h1>
      {/* <Dropdown />  */}
      {productData.map((el) => (
        <div>
        <Link href={`/productDetails/${el.id}`}>{el.title}</Link>
        </div>
      ))}
    </div>
  );
}
