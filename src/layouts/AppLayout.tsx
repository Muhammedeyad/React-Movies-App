import React from 'react'
import { Outlet } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";



export const AppLayout: React.FC = () => {
    return (
        <div className='flex gap-3 flex-col '>
            <div className='flex justify-between px-10 py-5 items-center bg-gray-800 fixed top-0 w-full'>
                <div className='flex gap-10'>
                    <h4 className='font-semibold uppercase font-mono text-lg text-red-600'>Netflix</h4>
                    <ul className='xl:flex gap-7 font-semibold text-white hidden '>
                        <li className='text-sm cursor-pointer'>Home</li>
                        <li className='text-sm cursor-pointer'>TV Shows</li>
                        <li className='text-sm cursor-pointer'>Movies</li>
                        <li className='text-sm cursor-pointer'>New & Popular</li>
                        <li className='text-sm cursor-pointer'>MyList</li>
                        <li className='text-sm cursor-pointer'>Browse My Languages</li>
                    </ul>
                </div>
                <div className='text-white flex gap-10 items-center'>
                    <span className='font-semibold cursor-pointer text-2xl'><IoIosSearch /></span>
                    <p className='font-semibold text-sm cursor-pointer'>Children</p>
                    <p className='font-semibold cursor-pointer text-2xl'><span><GoBell /></span></p>
                </div>

            </div>
            <Outlet />
        </div>
    )
}
