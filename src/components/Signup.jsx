import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import { Logo, Input, Button } from './index'

function Signup () {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const [error, setError] = useState('');

    const create = async (data) => {
        // console.log(data);
        // alert(JSON.stringify(data));
        setError('');
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getcurrentUser();
                if (userData) dispatch(login(userData));
                navigate('/');
            }
        }
        catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>

                <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create an account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account?&nbsp;
                    <Link to='/login' className='font-medium text-blue-500 transition-all duration-200 hover:underline'>
                        Sign In
                    </Link>
                </p>
                {error &&
                    <p className='text-red-600 mt-8 text-center'>{error}</p>
                }
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label='Full Name: '
                            placeholder='Enter your full name...'
                            // type='text'
                            {...register('name', {
                                required: true
                            })}
                        />
                        <Input
                            label='Email: '
                            placeholder='Enter your email...'
                            type='email'
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || 'Email address must be a valid address',
                                }
                            })}
                        />
                        <Input
                            label='Password: '
                            placeholder='Enter your password...'
                            type='password'
                            {...register('password', {
                                required: true,
                                // validate: {
                                //     matchPattern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) || 'at least 8 characters must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number; Can contain special characters'
                                // }
                            })}
                        />
                        <Button type='submit' className='w-full'>Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup