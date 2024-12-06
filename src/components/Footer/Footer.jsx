import React from 'react';
import { Logo } from '../index';
import { Link } from 'react-router-dom';

function Footer() {

    const footerLinks = [
        {
            title: 'Company',
            links: [
                { name: 'Features', path: '/' },
                { name: 'Pricing', path: '/' },
                { name: 'Affiliate Program', path: '/' },
                { name: 'Press Kit', path: '/' },
            ],
        },
        {
            title: 'Support',
            links: [
                { name: 'Account', path: '/' },
                { name: 'Help', path: '/' },
                { name: 'Contact Us', path: '/' },
                { name: 'Customer Support', path: '/' },
            ],
        },
        {
            title: 'Legals',
            links: [
                { name: 'Terms & Conditions', path: '/' },
                { name: 'Privacy Policy', path: '/' },
                { name: 'Licensing', path: '/' },
            ],
        },
    ];

    return (
        <footer className='bg-gray-800 text-white text-center py-10 border-t-2 border-t-gray-700'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap justify-between gap-8'>

                    <div className='w-full md:w-1/3 border-b md:border-none pb-8 md:pb-0'>
                        <Link to='/'>
                            <Logo width='100px' />
                        </Link>
                    </div>
                    
                    {footerLinks.map((section) => (
                        <div key={section.title} className='w-full md:w-1/6'>
                            <h3 className='text-gray-400 uppercase font-semibold mb-4'>
                                {section.title}
                            </h3>
                            <ul className='space-y-2'>
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className='text-gray-400 hover:text-white hover:border-b-2 hover:border-b-primary'
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='mt-8 text-center border-t border-t-gray-700 pt-4 text-sm'>
                    <p>
                        &copy; Copyright 2024. All Rights Reserved by{' '}
                        <Link to={`https://github.com/tbs96`} className='btn btn-ghost hover:underline underline-offset-4 decoration-error' target='_blank'>Prantik Ghosh</Link>.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer