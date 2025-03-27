import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/globe.svg';
import { useState } from 'react';


export default function SideNav() {



  return (

    <>
            

    <div id='nav_lateral' className="flex h-full flex-col px-3 py-4 md:px-2 bg-blue-900 ">

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"  aria-current="page">Home</Link>
        <Link href="/Dashboard/Informes" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Informes</Link>
        <Link 
            href="/Dashboard/MunDistrital" 
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            MUN Distrital
          </Link>

        <Link href="/Dashboard/SubirDatos" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Subir Datos</Link>
        <Link href="/Dashboard/Reportes" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reportes</Link>
        

        <div className="hidden h-auto w-full grow rounded-md bg-blue-900 md:block"></div>

        <form className='flex w-full h-auto p-2'>
          <button className="flex w-40 mr-5 h-[48px] w-auto grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
          <div className="shrink-0 ">
                    <img 
                    className="size-10 rounded-full" 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="" 
                    />
          </div>
        </form>

      </div>

    </div>



</>
  );
}