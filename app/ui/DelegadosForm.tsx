import tailwindConfig from "@/tailwind.config";

export default function DelegadosForm () {
    return (

    <form className="shadow-lg p-6 m-5 border rounded">

        <h2 className="text-center text-2xl font-bold mb-2 text-gray-900">Registro de Delegados</h2>
        <span className="block w-24 h-1 bg-blue-900 my-1 mx-auto mb-10"></span>

        <div className="mb-6">
            <label htmlFor="name_delegate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Delegado:</label>
            <input type="text" id="name_delegate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Manuel Montás" required />
        </div> 
        <div className="mb-6">
            <label htmlFor="phone_delegate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número Celular:</label>
            <input type="phone" id="phone_delegate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+1" required />
        </div> 
        <div className="mb-6">
            <label htmlFor="email_delegate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electronico:</label>
            <input type="email" id="email_delegate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="manuelmontas0z@gmail.com" required />
        </div> 
        <div className="mb-6">
            <label htmlFor="committe_delegate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comisión:</label>
            <select id="committe_delegate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <optgroup>
                    <option>Asamblea General</option>
                    <option>OIM</option>
                    <option>UNICEF</option>
                </optgroup>
            </select> 
        </div> 
        <div className="mb-6">
            <label htmlFor="committe_delegate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">País:</label>
            <select id="committe_delegate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <optgroup>
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Ecuador</option>
                </optgroup>
            </select> 
        </div> 
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    </form>

    );
};