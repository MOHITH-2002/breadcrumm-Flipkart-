"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
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
    <div className="flex flex-col w-full h-full  gap-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {
      products.slice(0,10).map(product =>(

        <Link href={`products/${product.id}`} className="flex relative cursor-pointer " >
            <Image src={product.thumbnail} alt="df" className='object-cover' width={300} height={300} />
        </Link>
      ))
    }

</div>
    <Link href="/products" className="text-blue-600 text-center text-5xl"> view all products</Link>
          </div>
  );
}
