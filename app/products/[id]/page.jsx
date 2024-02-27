"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const IdPage = ({ params }) => {
  // Destructure the id from params
  const { id } = params;
  
  // State to hold the product data
  const [product, setProduct] = useState();

  // Function to fetch product data
  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // Fetch product data on component mount
  useEffect(() => {
    fetchProduct();
  }, [id]); // Include id in dependency array to refetch when id changes

  return (
    <div>
      {product ? (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p> 
            <Image src={product.thumbnail} alt="dsjffv" width={500} height={500} />

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IdPage;