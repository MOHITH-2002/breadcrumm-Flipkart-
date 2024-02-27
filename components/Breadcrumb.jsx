"use client"
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Breadcrumb = () => {
    const pathname = usePathname();
    const [path, setPath] = useState([]);

    useEffect(() => {
        setPath(pathname.split('/').filter(segment => segment !== '')); // Filter out empty segments
    }, [pathname]); 

    if(pathname === '/') {
        return <span>Home</span>;
    }
    
    return (
        <div>
            <Link href="/">Home</Link>
            {
                path.map((p, index) => (
                    <span key={index}>
                        &nbsp;/&nbsp;
                        <Link href={`/${path.slice(0, index + 1).join('/')}`}>{p}</Link>
                    </span>
                ))
            }
        </div>
    );
};

export default Breadcrumb;
