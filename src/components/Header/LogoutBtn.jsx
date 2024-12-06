import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn () {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        // .catch(error => {
        //     console.error('Appwrite service :: logout :: error', error);
        // })
    }

    return (
        <button onClick={logoutHandler} className='btn btn-outline btn-error w-full md:w-auto text-left md:text-center'>Logout</button>
    )
}

export default LogoutBtn