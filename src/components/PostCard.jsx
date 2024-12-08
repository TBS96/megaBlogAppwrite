import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function PostCard({ $id, title, featuredImage, $createdAt, $updatedAt, userId }) {

    const createdDate = new Date($createdAt).toLocaleDateString();
    const updatedDate = new Date($updatedAt).toLocaleDateString();

    const userData = useSelector((state) => state.auth.userData);

    const authorName = userData?.name || 'Unknown';

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 hover:skeleton hover:shadow-2xl hover:scale-105 transition-all duration-300'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold text-center'>{title}</h2>
                <div className='flex justify-center'>
                    <div>
                        <h2>
                            Posted <time dateTime={$createdAt} className='text-gray-500'>{createdDate}</time>
                        </h2>
                        <h2>
                            Updated <time dateTime={$updatedAt} className='text-gray-500'>{updatedDate}</time>
                        </h2>
                    </div>
                    <h2>
                        Author: <span className='font-semibold'>{authorName}</span>
                    </h2>
                </div>
                <h2>
                    UserID: <span className='text-gray-500'>{userId}</span>
                </h2>
            </div>
        </Link>
    )
}

export default PostCard