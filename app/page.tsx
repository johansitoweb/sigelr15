import Image from "next/image";
import tailwindConfig from "@/tailwind.config";
import Nav from "./ui/nav";
import SectHome from "./ui/SectHome";
import HojaEvaluacion from "./ui/HojaEvaluacion";
import InformeCentros from "./ui/InformeCentros";
import InformeMunDistrital from "./ui/InformeMunDistr";
import styles  from "home.module.css";


export default function Home() {
return (

  <>

  <Nav></Nav>

  <main>
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SectHome></SectHome>
        <HojaEvaluacion></HojaEvaluacion>

        <div className="flex space-x-4 p-4"> 
          <InformeCentros /> 
          <InformeMunDistrital /> 
        </div>

    </div>
  </main>

  </>

);
}
