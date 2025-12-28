import React from 'react'
import { useParams } from 'react-router-dom'


export const MovieDetails: React.FC = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div className='flex justify-center items-center mt-25'>
            <div className='w-full flex px-7 md:px-20 gap-3 flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2'>
                    <img src={`https://picsum.photos/300/200?random=${id}`} alt="" className='w-full h-full' />
                </div>
                <div className='w-full'>
                    <p className=' font-semibold  text-justify text-yellow-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quisquam accusantium amet cupiditate in neque laudantium omnis maiores ex aliquam voluptas esse ducimus officiis aut, facere repudiandae voluptatem natus nulla!
                        Natus  est, maiores dolor sint culpa ipsa repellat consequatur sit deserunt autem veniam, unde ratione distinctio ipsam? Doloribus possimus quae optio earum, explicabo libero voluptatibus modi maxime natus debitis minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos aut voluptate alias ex consequuntur voluptas corrupti tenetur eum veniam provident ut odio dignissimos, nam cum culpa ullam non. Velit.

                    </p>
                    <div className='w-full flex justify-start'>
                    <a href={`https://picsum.photos/300/200?random=${id}`}><button className='bg-red-700 text-white  p-3 rounded-2xl font-semibold mt-4 cursor-pointer hover:bg-red-800 md:w-1/4'>Watch On Netflix</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
