"use client";
//import { getAllCategories } from "@/app/lib/firebase/category/read_server";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from 'next/navigation';
import SidebarDomestic from '@/app/backend/admin/domestic-products/@sidebar/page';
import SidebarInternational from '@/app/backend/admin/international-products/@sidebar/page';
import SidebarBlog from "@/app/backend/admin//blog-products/@sidebar/page";
//import Sidebar from '@/app/product/domestic/@sidebar/page';

// const fetchCountryData = async () => {
//     const categories = await getAllCategories();
//     return categories;
//   }

export default function Sidebar(){
    const pathname = usePathname();
    const link = [
        {
            name : 'Dashboard',
            link : '/backend/admin'
        },
        {
            name : 'Domestic Categories',
            link : '/backend/admin/categories'
        },
        {
            name : 'Domestic Products',
            link : '/backend/admin/posts'
        },
        {
            name : 'International Categories',
            link : '/backend/admin/categoriesInter'
        },
        {
            name : 'International Products',
            link : '/backend/admin/postsInter'
        },
        // {
        //     name : 'Other Category',
        //     link : '/backend/admin/categoryOther'
        // },
        // {
        //     name : 'Authors',
        //     link : '/backend/admin/authors'
        // },
        
    ]
    return <div className="sidebar-admin" data-lenis-prevent>
        <ul>
            <li><Link href="/backend/admin" className={ pathname === '/backend/admin' ? "active" : ""}>Dashboard</Link></li>
            <li><Link href="/backend/admin/categories" className={ pathname === '/backend/admin/categories' ? "active" : ""}>Domestic Categories</Link></li>
            <li><Link href="#" className="admin-products-link">Domestic Products</Link>
                {/* <Link href="/backend/admin/posts">Domestic Products</Link> */}
                <SidebarDomestic></SidebarDomestic>
                {/* <ul className="position-relative">              
                    {countries?.map((category, index) =>{
                        return (                    
                            <li key={index} data-category={category?.id} onClick={(e) => handleCategoryClick(category.id, e, category?.name)} className={activeCategory === category?.id ? 'active' : ''}><Link href={'#'}><img src={category?.iconURL} width="30" height="30" alt={category?.name}/><span>{hyphenToSpace(category?.name)}</span></Link></li>
                        )
                        }
                    )}
                </ul> */}
            </li>
            <li><Link href="/backend/admin/categoriesInter" className={ pathname === '/backend/admin/categoriesInter' ? "active" : ""}>International Categories</Link></li>
            <li><Link href="#" className="admin-products-link">International Products</Link>
                {/* <Link href="/backend/admin/postsInter">International Products</Link> */}
                <SidebarInternational></SidebarInternational>
            </li>
            <li><Link href="/backend/admin/categoriesBlog" className={ pathname === '/backend/admin/categoriesBlog' ? "active" : ""}>Blog Categories</Link></li>
            <li><Link href="#" className="admin-products-link">Blog Posts</Link>
                <SidebarBlog></SidebarBlog>
            </li>
        </ul>
        

        {/* <ul>
            {
                link.map((item) => {
                    return <li key={item.name}>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                })
            }
        </ul> */}
        
    </div>
}