import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Posts from './Posts';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default function Postrenderer() {
    let navigate = useNavigate();
    useEffect(() =>{
        let id = localStorage.getItem('id');
        let pass = localStorage.getItem('pass');
        if (id !== 'roshanneupane54321@gmail.com' && pass !== 'happy123') {
            navigate('/login');
        }
    }, []);

    const [posts, setPosts] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getPosts();
    }, []);
    return (
        <div>
            <Header/>
            {posts.map((post, id) => {
                return <Posts key={id} username={post.username} caption={post.caption} captioner={post.captioner} imageUrl={post.imageUrl} />
            }
            )}
        </div>
    )
}
