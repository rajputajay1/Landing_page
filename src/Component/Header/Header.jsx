import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    const handlePayent = () => { 
        navigate('/payment')
        window.scrollTo(0, 0)
    }

    return (
        <>

            <header class="bg-white shadow-md sticky top-0 z-50 px-4">
                <div class=" mx-auto flex px-5 justify-between items-center py-4">
                    <div class="flex items-center">
                        <img src="./logol.png" alt="Logo" class="h-20 w-auto mr-4" />
                    </div>

                    <div class="flex md:hidden">
                        <button id="hamburger" class="text-white focus:outline-none">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                

                    <div class="hidden md:flex items-center space-x-10">
                        <p className='hover:text-blue-500 text-gray-700 cursor-pointer font-bold text-[20px] flex items-center  gap-2' ><span><img src="./call.png" alt="" className='w-5' /></span> +91 9501433347</p>
                        <p className='hover:text-blue-500 text-gray-700 cursor-pointer font-bold text-[20px] flex items-center  gap-2'><span  className='hover:text-blue-500'><img src="./email.jpg" alt="" className='w-9' /></span> admin@marketingmingles.com</p>
                        <button className='bg-blue-500 px-8 py-2 text-white font-bold text-[18px] hover:bg-black rounded-sm hover:scale-110 transition duration-500 max-lg:px-5 text-nowrap' onClick={handlePayent}>Buy Now</button>

                    </div>
                </div>
            </header>


        </>
    )
}

export default Header