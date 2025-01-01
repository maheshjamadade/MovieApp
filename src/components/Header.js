import React, { useEffect, useState } from 'react'
import logo from '../assets/movieimg.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import userIcon from '../assets/userIcon.png'
import { IoSearch } from "react-icons/io5";
import { navigation } from '../contatns/navigation';



const Header = () => {
    const location = useLocation()
    const removeSpace = location?.search?.slice(3)?.split("%20").join(" ")
    const [searchInput,setSearchInput] = useState( removeSpace)
    const navigate = useNavigate()
    
    
    console.log("location",)
        useEffect(()=>{
            if(searchInput){
                navigate(`/search?q=${searchInput}`) //this is added because when we search in search box it will show in url as well

            }
        },[searchInput])
        const handleSubmit = (e)=>{
                e.preventDefault()
        }
  return (
    
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
            <div className='  mx-auto px-4 flex items-center justify-between h-full'>
                {/* Logo */}
                <Link to={"/"}>
                    <img src={logo} alt='logo' className='h-12' />
                </Link>

                {/* Navigation Links */}
                <nav className='hidden lg:flex items-center gap-4'>
                    {navigation.map((nav, index) => (
                        <NavLink
                            key={index}
                            to={nav.href}
                            className={({ isActive }) => 
                                `text-white px-4 hover:text-blue-300 ${isActive ? 'font-bold text-blue-300' : ''}`}
                        >
                            {nav.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Search & User Icons */}
                <div className='flex items-center gap-4 ml-auto'>
                    {/* Search Form */}
                    <form
                        className='relative flex items-center'
                        onSubmit={handleSubmit}
                    >
                        <input
                            type='text'
                            placeholder='Search here...'
                            className='hidden lg:block bg-gray-700 text-white rounded px-6 py-1 outline-none border-none'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-white text-2xl absolute right-2 top-1/2 transform -translate-y-1/2'>
                            <IoSearch />
                        </button>
                    </form>

                    {/* User Icon */}
                    <div className='w-12 h-12 rounded-full overflow-hidden cursor-pointer'>
                        <img src={userIcon} alt="User Icon" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;