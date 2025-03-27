import Image from "next/image";
import tailwindConfig from "@/tailwind.config";
import SectHome from "./ui/SectHome";
import HojaEvaluacion from "./ui/HojaEvaluacion";
import styles  from "home.module.css";
import Link from "next/link";
import Nav from "./ui/nav";
import Practica from "./ui/dashboard/practica";

export default function Home() {
return (

  <>

  

  <main>

  <Nav></Nav>
  
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        <SectHome></SectHome>
        <HojaEvaluacion></HojaEvaluacion>
        <Practica initialCount = {true} ></Practica>
        <Practica initialCount = {false} ></Practica>
    </div>
  </main>

  </>

);
}
