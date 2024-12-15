import React from 'react';
import { Logo } from '../index';
import { Link } from 'react-router-dom';

function Footer() {

    const footerLinks = [
        {
            title: 'Social',
            links: [
                {
                    name: 'GitHub',
                    path: 'https://github.com/tbs96',
                    icon: (<svg className='text-gray-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                        <path fill-rule='evenodd' d='M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z' clip-rule='evenodd' />
                    </svg>)
                },
                {
                    name: 'LinkedIn',
                    path: 'https://www.linkedin.com/in/prantikghosh96/',
                    icon: (<svg className='text-blue-500' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                        <path fill-rule='evenodd' d='M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z' clip-rule='evenodd' />
                        <path d='M7.2 8.809H4V19.5h3.2V8.809Z' />
                    </svg>)
                },
                {
                    name: 'Email',
                    path: 'mailto:9tbs6@proton.me',
                    icon: (<svg className='text-orange-500' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z' />
                    </svg>)
                },
                {
                    name: 'X',
                    path: 'https://x.com/9theblacksheep6',
                    icon: (<svg className='text-black' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z' />
                    </svg>)
                },
                {
                    name: 'Facebook',
                    path: 'https://www.facebook.com/theblacksheep96/',
                    icon: (<svg className='text-blue-600' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                        <path fill-rule='evenodd' d='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z' clip-rule='evenodd' />
                    </svg>)
                },
            ],
        },
    ];

    return (
        <footer className='bg-gray-800 text-white py-10 border-t-2 border-t-gray-700'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap justify-between items-center'>

                    <div className='w-full md:w-1/3 text-center border-b md:border-none pb-8 md:pb-0'>
                        <Link to='/'>
                            <Logo width='100px' />
                        </Link>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title} className='w-full md:w-auto text-center'>
                            <h3 className='text-gray-400 uppercase font-semibold my-4 md:mb-4'>
                                {section.title}
                            </h3>
                            <ul className='md:flex flex-wrap justify-center'>
                                {section.links.map((link) => (
                                    <li key={link.name} className='p-4'>
                                        <Link
                                            to={link.path}
                                            className='text-gray-400 btn hover:glass hover:scale-110 rounded-2xl'
                                            target='_blank'
                                        >
                                            {link.icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='mt-8 text-center border-t border-t-gray-700 pt-4 text-sm'>
                    <p>
                        &copy; 2024 | All Rights Reserved by{' '}
                        <Link
                            to='https://github.com/tbs96'
                            className='btn btn-ghost hover:underline underline-offset-4 decoration-error'
                            target='_blank'
                        >
                            Prantik Ghosh
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer