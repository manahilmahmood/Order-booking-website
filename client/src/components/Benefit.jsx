import React from 'react'
import { benefit } from '../utli/objectData/benefitdata'

function Benefit() {
  return (
    <div className=' border-t-2 mt-[4rem] pt-9 pb-5 bg-slate-50'>
          <div className='flex flex-start justify-between p-7'>
            {benefit .map((item) => (
              <div key={item.id} className='flex flex-col items-start space-y-2 '>
              <div className='flex items-start space-x-3'>
                 <img
                  src={item.image}
                  alt={item.title}
                  className='w-6 h-6 object-cover'
                />
                <p className='w-[200px] h-auto text-md font-semibold'>{item.title}</p>
                </div>
                <p className='text-sm text-slate-900 pl-10 w-[200px] h-auto'>{item.description}</p>
                </div>
            ))}
          </div>
    </div>
  )
}

export default Benefit