'use client'
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import Nav from "../ui/dashboard/navd";
import SideNav from "../ui/dashboard/side-nav";
import tailwindConfig from '@/tailwind.config';
import { Style } from 'util';

export default function Layout({ children }: { children: React.ReactNode }) {

    const divRef = useRef(null)

    useEffect (() => {
        if (divRef.current){
            
        }
    }, []);


    return (
        <>
           
        <main>


            <div id='Lateral' className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div  className="w-full flex-none md:w-64">
                    <SideNav />
                </div>

                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    {children}
                </div>
            </div>


        </main>
        


        </>
    );
}
