import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components/index'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {

    const [post, setPost] = useState([]);

    const { slug } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
            .then((post) => {
                if (post) {
                    setPost(post)
                }
            })
            .catch(error => {
                console.log('Error fetching post:', error);
            })
        }
        else {
            navigate('/');
        }
    }, [slug, navigate]);

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>
    ) : null
}

export default EditPost