import Link from 'next/link';



export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">

      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          
        </div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</Link>
        <Link href="/Dashboard/Informes" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Informes</Link>
        <Link 
          href="/Dashboard/MunDistrital" 
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
          MUN Distrital
        </Link>

        <Link href="/Dashboard/SubirDatos" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Subir Datos</Link>
        <Link href="/Dashboard/Reportes" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reportes</Link>
        

        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>

      </div>

    </div>
  );
}