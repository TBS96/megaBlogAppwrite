import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserBadge = () => {

    const [userName, setUserName] = useState('Unknown');

    const userData = useSelector((state) => state.auth.userData);

    // const userName = userData?.name || 'Unknown';

    useEffect(() => {
        if (userData && userData.name) {
            setUserName(userData.name);
        }
    }, [userData]);

    return (
        <Link to='/' className='skeleton text-black px-5 py-1'>
            Hello {userName}!
        </Link>
    )
}

export default UserBadge