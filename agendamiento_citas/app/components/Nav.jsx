import React from 'react'
import Link from 'next/link'
function Nav() {
  return (
    <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-white text-lg font-semibold">Agendamiento de Citas</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 justify-end">
                  <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Inicio
                  </Link>
                  <Link href="/crear-cita" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Crear Citas
                  </Link>
                  <Link href="/ver-citas" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Ver Citas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
  )
}

export default Nav