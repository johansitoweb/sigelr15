import tailwindConfig from "@/tailwind.config";



export default function InformeCentros(){
    return (
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Centro Educativo
                </th>
                <th scope="col" className="px-6 py-3">
                    Comisiones
                </th>
                <th scope="col" className="px-6 py-3">
                    Cantidad de Estudiantes
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1-
                </th>
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Politecnico Belisario Peguero Guerrero
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </th>
                <td className="px-6 py-4">
                    76
                </td>
                
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1-
                </th>
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Politecnico Belisario Peguero Guerrero
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </th>
                <td className="px-6 py-4">
                    76
                </td>
                
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1-
                </th>
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Politecnico Belisario Peguero Guerrero
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </th>
                <td className="px-6 py-4">
                    76
                </td>
                
            </tr>

            
           
        </tbody>
    </table>
</div>

    );
};