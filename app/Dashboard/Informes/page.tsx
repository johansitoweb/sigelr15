import tailwindConfig from "@/tailwind.config";
import InFormeCentros from "@/app/ui/InformeCentros";
import InFormeMunDistrital from "@/app/ui/InformeMunDistr";
import InformeVoluntarios from "@/app/ui/InformeVoluntarios";

export default function page() {

return (


         <>

         <p>Informes</p>
         
   
         <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
   
            <InFormeCentros /> 
            <InFormeMunDistrital /> 


            <InformeVoluntarios></InformeVoluntarios>

   
         </div>
   
      </>
);


};