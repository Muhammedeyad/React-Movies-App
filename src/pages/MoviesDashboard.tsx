import React from 'react'

export const MoviesDashboard: React.FC = () => {
  return (
    <div className=' font-semibold pt-17 md:pt-20 h-screen px-4 md:px-10 flex flex-col gap-2 md:gap-10 '>
      <div>
        <h3 className='text-white font-semibold md:text-2xl text-lg '>BlockBuster Movies</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-10 mt-4'>
          <div className=''>
            <div className='w-full md:w-60'>
              <img src={'https://picsum.photos/300/200?random=1'} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className='w-full md:w-60'>
              <img src={'https://picsum.photos/300/200?random=2'} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className='w-full md:w-60'>
              <img src={"https://picsum.photos/300/200?random=3"} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className='w-full md:w-60'>
              <img src={"https://picsum.photos/300/200?random=4"} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className='w-full md:w-60'>
              <img src={"https://picsum.photos/300/200?random=5"} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='text-white font-semibold text-lg md:text-2xl'>Only On Netflix</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 '>

          <div>
            <div className=' w-full md:w-60'>
              <img src={"https://picsum.photos/300/200?random=6"} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className=' w-full md:w-60'>
              <img src={"https://picsum.photos/300/200?random=7"} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
          <div>
            <div className=' w-full md:w-60'>
              <img src={"https://picsum.photos/300/200?random=8"} alt="" className='w-full h-full' />
            </div>
            <h4 className='pt-2 font-semibold text-yellow-300 text-center'>Scary Ghost Movie</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
