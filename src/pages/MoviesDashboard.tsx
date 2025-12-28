import React from 'react'
import PixelCartoon from './../assets/pixel.jpg'

export const MoviesDashboard: React.FC = () => {
  return (
    <div className=' font-semibold pt-25 h-screen  px-10 flex flex-col gap-10'>
      <div>
        <h3 className='text-white font-semibold text-2xl'>BlockBuster Movies</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-4'>
          <div>
            <div className='w-full md:w-60'>
              <img src={PixelCartoon} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className='w-full md:w-60'>
              <img src={PixelCartoon} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className='w-full md:w-60'>
              <img src={PixelCartoon} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className='w-full md:w-60'>
              <img src={PixelCartoon} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className='w-full md:w-60'>
              <img src={PixelCartoon} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
        </div>
      </div>
      <div>
        </div>
        <h3 className='text-white font-semibold text-2xl'>Only On Netflix</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-7 mt-4'>
    
          <div>
            <div className=' w-full md:w-60'>
              <img src={PixelCartoon} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className=' w-full md:w-60'>
              <img src={PixelCartoon} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className=' w-full md:w-60'>
              <img src={PixelCartoon} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
      </div>
    </div>
  )
}
