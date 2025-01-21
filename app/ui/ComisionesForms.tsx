import tailwindConfig from "@/tailwind.config";

export default function ComisionesForms () {
    return (

    <form className="shadow-lg p-6 m-5 border rounded">

        <h2 className="text-center text-2xl font-bold mb-2 text-gray-900">Registro de Comisiones</h2>
        <span className="block w-24 h-1 bg-blue-900 my-1 mx-auto mb-10"></span>

        <div className="mb-6">
            <label htmlFor="name_committe" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Comisión:</label>
            <input type="text" id="name_committe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Asamblea General" required />
        </div> 
        <div className="mb-6">
            <label htmlFor="committe_topic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tópico de la Comisión:</label>
            <input type="text" id="committe_topic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Desastres Naturalez en el Caribe" required />
        </div> 
        <div className="mb-6">
            <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad de Delegaciones:</label>
            <input type="number" id="cantidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20" required />
        </div> 
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    </form>

    );
};