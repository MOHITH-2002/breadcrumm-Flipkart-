"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Products() {
  const [products,setProducts] = useState([]);
  const fetchproducts = async ()=>{
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();
    setProducts(data.products);
  }
  useEffect(()=>{
    fetchproducts()
  },[])
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {
      products.map(product =>(

        <Link href={`products/${product.id}`} className="flex relative cursor-pointer " >
            <Image src={product.thumbnail} alt="df" className='object-cover' width={300} height={300} />
        </Link>
      ))
    }
</div>
  );
}
