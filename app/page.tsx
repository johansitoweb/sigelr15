import Image from "next/image";
import tailwindConfig from "@/tailwind.config";
import Nav from "./ui/nav";
import SectHome from "./ui/SectHome";
import HojaEvaluacion from "./ui/HojaEvaluacion";
import InhtmlFormeCentros from "./ui/InformeCentros";
import InhtmlFormeMunDistrital from "./ui/InformeMunDistr";
import styles  from "home.module.css";
import VoluntariosForms from "./ui/Voluntarioforms";
import ComisionesForms from "./ui/ComisionesForms";
import MunCentrosForm from "./ui/MunCentrosForm";
import DelegadosForm from "./ui/DelegadosForm";

export default function Home() {
return (

  <>

  <Nav></Nav>

  <main>
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SectHome></SectHome>
        <HojaEvaluacion></HojaEvaluacion>

        <div className="flex space-x-4 p-4 shadow-lg p-6 m-5 border rounded"> 
          <InhtmlFormeCentros /> 
          <InhtmlFormeMunDistrital /> 
        </div>

      <VoluntariosForms></VoluntariosForms>

      <ComisionesForms></ComisionesForms>

      <MunCentrosForm></MunCentrosForm>

      <DelegadosForm></DelegadosForm>


    </div>
  </main>

  </>

);
}
