import tailwindConfig from "@/tailwind.config";



export default function InFormeMunDistrital(){
    return (
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
    <h2 className="text-center text-2xl font-bold mb-2 text-gray-900">Informe de MUN Distrital</h2>
    <span className="block w-24 h-1 bg-blue-900 my-1 mx-auto mb-10"></span>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Escuela
                </th>
                <th scope="col" className="px-6 py-3">
                    Calificación
                </th>
                <th scope="col" className="px-6 py-3">
                    Comisión
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1-
                </th>
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Manuel Montas
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Politécnico Belisario Peguero
                </th>
                <td className="px-6 py-4">
                    79
                </td>
                <td className="px-6 py-4">
                    AG1
                </td>
                
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2-
                </th>
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Manuel Montas
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Politécnico Belisario Peguero
                </th>
                <td className="px-6 py-4">
                    79
                </td>
                <td className="px-6 py-4">
                    AG1
                </td>
                
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    3-
                </th>
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Manuel Montas
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Politécnico Belisario Peguero
                </th>
                <td className="px-6 py-4">
                    79
                </td>
                <td className="px-6 py-4">
                    AG1
                </td>
                
            </tr>
            
           
        </tbody>
    </table>
</div>

    );
};