import tailwindConfig from "@/tailwind.config";



export default function VoluntariosForms () {
    return (
        
<form className="shadow-lg p-6 m-5 border rounded">

    <h2 className="text-center text-2xl font-bold mb-2 text-gray-900">Registro de Voluntarios</h2>
    <span className="block w-24 h-1 bg-blue-900 my-1 mx-auto mb-10"></span>

    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Completo</label>
            <input type="text" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Manuel Montás" required />
        </div>
        <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
            <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nacional/Regional/Distrital" required />
        </div>
        <div>
            <label htmlFor="sexo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo</label>
            <input type="text" id="sexo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Femenino/Masculino" required />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número Teléfono</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+1 " pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label htmlFor="distrito" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Distrito de Procedencia</label>
            <input type="url" id="distrito" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15-03" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID:</label>
            <input type="text" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cedula/Pasaporte" required />
        </div>
        <div>
            <label htmlFor="emergency_phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contacto de Emergencia</label>
            <input type="phone" id="emergency_phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+1 " pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label htmlFor="relacion_ep" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Relación Contacto Emergencia</label>
            <input type="text" id="relacion_ep" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Madre/Padre" required />
        </div>
    </div>
    <div className="mb-6">
        <label htmlFor="fecha_nacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha Nacimiento</label>
        <input type="date" id="fecha_nacimiento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="N/A" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electronico</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="manuelmontas0z@gmail.com" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="condicion_medica" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Condición Medica</label>
        <input type="text" id="condicion_medica" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="N/A" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="medicamentos_cm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medicamentos Condición Medica</label>
        <input type="text" id="medicamentos_cm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="N/A" required />
    </div> 
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    );
};