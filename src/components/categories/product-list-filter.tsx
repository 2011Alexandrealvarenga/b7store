'use client'

import { useState } from "react";

export const ProductListFilter = () =>{
  const [filterOpened, setFilterOpened] = useState(false);
  return(
    <div>
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-3xl"><strong>99</strong> Produtos</div>
        <div className="w-full md:max-w-70 flex flex-row gap-5">
          <select className="h-14 flex-1 px-6 flex items-center bg-white border border-gray-200 rounded-sm text-gray-500">
            <option>Ordenar por:</option>
          </select>
          <div 
            onClick={()=>setFilterOpened(!filterOpened)}
            className="h-14 flex-1 px-6 md:hidden flex items-center bg-white border border-gray-200 rounded-sm text-gray-500"
          >
            Filtrar por
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className={`flex-1 max-w-70 bg-red-200 ${filterOpened ? 'block' : 'hidden' } md:block`}>Filtro</div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          <div className="">itens</div>
          <div className="">itens</div>
          <div className="">itens</div>
          <div className="">itens</div>
        </div>
      </div>
    </div>
  )
}