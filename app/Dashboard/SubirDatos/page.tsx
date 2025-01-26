import VoluntariosForms from "@/app/ui/Voluntarioforms";
import ComisionesForms from "@/app/ui/ComisionesForms";
import MunCentrosForm from "@/app/ui/MunCentrosForm";
import DelegadosForm from "@/app/ui/DelegadosForm";

export default function page() {

    return (

      <>
      
      <p>Subir Datos</p>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

         <VoluntariosForms></VoluntariosForms>

         <ComisionesForms></ComisionesForms>

         <MunCentrosForm></MunCentrosForm>

         <DelegadosForm></DelegadosForm>

      </div>

   </>
    );
    
    
    };