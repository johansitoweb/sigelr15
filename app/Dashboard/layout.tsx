'use client'
import Nav from "../ui/dashboard/navd"
import SideNav from "../ui/dashboard/side-nav"

export default function Layout (
    { children } : { children: React.ReactNode }
    ) 
{
    return (

        <>

        <div className="hidden ">
            <div className="">
                <Nav/>
            </div>
            <div className="p-6 md:overflow-y-auto md:p-12">
            {children}</div>
        </div>


        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}</div>
        </div>
        
        </>
    )
}