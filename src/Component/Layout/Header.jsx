import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
   <div className="p-5 bg-gray-700 ">
    <div className="max-w-[1170px] m-auto">
        <div className="">
            <ul className='flex  justify-items-center gap-x-5'>
                <Link to={"/"}><li className="text-base text-cyan-300 font-medium capitalize">home</li></Link>
                <Link to={"/singUp"}><li className="text-base text-cyan-300 font-medium capitalize">singUp</li></Link>
                <Link to={"login"}><li className="text-base text-cyan-300 font-medium capitalize">login</li></Link>
               <Link to={"/DashBord"}> <li className="text-base text-cyan-300 font-medium capitalize">DashBord</li></Link>
            </ul>
        </div>
    </div>
   </div>
    </>
  )
}

export default Header