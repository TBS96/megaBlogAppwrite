import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components/index'
import appwriteService from '../appwrite/config'

function AllPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
        .catch(error => {
            console.log('Error in showing posts:', error);
        })
    }, []);

    return (
        <div className='w-full py-8'>
            <Container>
                {posts.length > 0 ? (
                    <>
                        <h1 className='text-center text-2xl font-bold'>Posts created: {posts.length}</h1>
                        <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                    </>
                ) : (
                    <h1 className='text-center text-2xl font-bold'>No posts created. Number of posts: {posts.length}</h1>
                )}
            </Container>
        </div>
    )
}

export default AllPosts