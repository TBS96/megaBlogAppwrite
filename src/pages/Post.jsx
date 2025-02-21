import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import { Button, Container } from '../components/index'
import parse from 'html-react-parser'

export default function Post () {

    const [post, setPost] = useState(null);
    const [authorName, setAuthorName] = useState('');

    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    if (post.userId === userData?.$id) {
                        setAuthorName(userData.name);
                    }
                } else {
                    navigate('/');
                }
            })
        }
    }, [slug, navigate, userData]);

    const deletePost = () => {
        alert("Are you sure you want to delete this post?");
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate('/');
            }
        })
    };

    return post ? (
        <div className='py-8'>
            <Container>
                <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                    <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-xl' />
                    {isAuthor && (
                        <div className='absolute right-6 top-6'>
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor='bg-green-500' className='mr-3 btn btn-ghost hover:bg-green-700'>
                                    Edit Post
                                </Button>
                            </Link>
                            <Button bgColor='bg-red-500' onClick={deletePost} className='btn btn-ghost hover:bg-red-700'>
                                Delete Post
                            </Button>
                        </div>
                    )}
                </div>
                <div className='w-full mb-6'>
                    <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
                    <h2 className='text-gray-600'>Author: <span className='text-gray-900 font-bold'>{authorName || 'Unknown'}</span> </h2>
                </div>
                <div className='glass px-3 py-1.5 rounded-lg font-medium select-none hover:bg-black hover:text-gray-300 duration-1000'>
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null
}