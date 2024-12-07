import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'

function Login () {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const [error, setError] = useState('');

    const [data, setData] = useState('');

    const [showPass, setShowPass] = useState(false);

    const login = async(data) => {
        // console.log(data);
        // alert(JSON.stringify(data));
        setError('');
        setData(data);
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getcurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }
        }
        catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='flex items-center justify-center w-full my-8 px-4 sm:px-0'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have any account?&nbsp;
                    <Link to='/signup' className='font-medium text-blue-500 transition-all duration-200 hover:underline'>
                        Sign Up
                    </Link>
                </p>
                {error && 
                    <p className='text-red-600 mt-8 text-center bg-error-content animate-pulse'>{error}</p>
                }
                <form onSubmit={handleSubmit(login)} className='mt-8 form-control'>
                    <div className='space-y-5'>
                        <Input
                            label='Email: '
                            placeholder='you@voodoo.com'
                            type='email'
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || 'Email address must be a valid address',
                                }
                            })}
                        />
                        {error && 
                            <p className='text-red-600 mt-8 text-center animate-pulse bg-red-100'>{data.email} doesn't exist in our database. Please Sign Up!</p>
                        }
                        <div className='flex items-end sm:flex-col gap-2'>
                            <Input
                                label='Password: '
                                placeholder='✪✪✪✪✪✪✪✪✪✪✪'
                                type={showPass ? 'text' : 'password'}
                                {...register('password', {
                                    required: true,
                                    // validate: {
                                    //     matchPattern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) || 'at least 8 characters must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number; Can contain special characters'
                                    // }
                                })}
                            />
                            <input type='checkbox' className='hidden' id='show' onChange={() => setShowPass(!showPass)} />
                            <label htmlFor="show" className='btn btn-square btn-outline'>{showPass ? 'hide' : 'show'}</label>
                        </div>
                        <Button type='submit' className='w-full hover:bg-blue-700'>Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login