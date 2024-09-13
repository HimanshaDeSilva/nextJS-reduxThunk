"use client";
import { fetchProductById } from "../../store/productSlice";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function page() {
  const params = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector(
    (state) => state.products.singleProduct
  );
  useEffect(() => {
    dispatch(fetchProductById(params.id));
  }, [dispatch]);
  console.log(singleProduct, "singleProduct ****************");
  return <div>{singleProduct?.title}</div>;
}

export default page;
