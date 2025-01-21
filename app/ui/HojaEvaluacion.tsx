import tailwindConfig from "@/tailwind.config";



export default function HojaEvaluacion(){
    return (
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-20 bg-gray-200" >

    <div className="flex space-x-4 p-4"> 
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded"> Confirmar </button> 
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded"> Enviar </button> 
    </div>

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Delegado
                </th>
                <th scope="col" className="px-6 py-3">
                    Pais
                </th>
                <th scope="col" className="px-6 py-3">
                    Rd <span className="text-black-800">10%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    In <span className="text-black-800">10%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Rep <span className="text-black-800">8%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Or <span className="text-black-800">8%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Arg<span className="text-black-800">8%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Dis <span className="text-black-800">6%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    PC <span className="text-black-800">10%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    CS  <span className="text-black-800">6%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Ld  <span className="text-black-800">8%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    TE  <span className="text-black-800">10%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    CC  <span className="text-black-800">8%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    RC  <span className="text-black-800">8%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Tl  <span className="text-black-800">100%</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Feedbacks
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1-
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Pedro Avila
                </th>
                <td className="px-6 py-4">
                    Argentina
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    <textarea
                        name="textarea"
                        placeholder="Comment text."
                    >
                    </textarea>
                </td>
            </tr>
        </tbody>
    </table>

</div>

    );
};