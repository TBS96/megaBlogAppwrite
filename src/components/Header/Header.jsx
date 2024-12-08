import React, { useState } from 'react'
import { Logo, LogoutBtn } from '../index'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header () {

    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();

    const location = useLocation();

    const [menubar, setMenubar] = useState(false);

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus
        },
    ];

    return (
        <header className='py-3 shadow-2xl bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 sticky top-0 z-50'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto px-4'>
                <div className='mr-4'>
                    <Link>
                        <Logo width='70px' />
                    </Link>
                </div>
                <button onClick={() => setMenubar(!menubar)} className='btn btn-circle btn-outline dark:btn-success md:hidden'>
                    {menubar ? '⛌' : '𓃑'}
                </button>
                <ul className={`absolute md:relative top-16 left-0 md:top-0 md:left-auto bg-gray-800 md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent w-full md:w-auto flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 px-4 py-4 md:px-0 md:py-0 transition-all duration-300 ${menubar ? 'block' : 'hidden md:flex'}`}>
                    {navItems.map((item) => 
                        item.active ? (
                            <li key={item.name} className={`w-full md:w-auto ${location.pathname === item.slug ? 'bg-black rounded-full' : ''}`}>
                                <button onClick={() => navigate(item.slug)} className='btn btn-ghost w-full md:w-auto text-left md:text-center hover:bg-primary px-6 py-2 duration-200 rounded-full'>{item.name}</button>
                            </li>
                        ) : null
                    )}
                    {authStatus && 
                        <li className='w-full md:w-auto'>
                            <LogoutBtn />
                        </li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header