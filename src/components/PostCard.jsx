import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage, $createdAt, $updatedAt, name }) {

    const createdDate = new Date($createdAt).toLocaleDateString();
    const updatedDate = new Date($updatedAt).toLocaleDateString();

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 hover:skeleton hover:shadow-2xl hover:scale-105 transition-all duration-300'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
                <h2>
                    Posted <time dateTime={$createdAt} className='text-gray-500'>{createdDate}</time>
                </h2>
                <h2>
                    Updated <time dateTime={$updatedAt} className='text-gray-500'>{updatedDate}</time>
                </h2>
                <h2 className='flex items-end'>
                    Author: <span className='font-semibold'>{name || 'Unknown'}</span>
                </h2>
            </div>
        </Link>
    )
}

export default PostCard