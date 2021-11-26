import React from 'react';
import Header from './Header';
import Post from './Post';
import { useState } from 'react';
import { ThemeProvider } from './ThemeContext';

const initialPosts = [
    {
        id: Math.random(),
        title: 'Title#1',
        subtitle: 'Sub#1',
        likes: 10,
        read: false,
        removed: false,
    },
    {
        id: Math.random(),
        title: 'Title#2',
        subtitle: 'Sub#1',
        likes: 10,
        read: true,
        removed: false,
    },
    {
        id: Math.random(),
        title: 'Title#3',
        subtitle: 'Sub#1',
        likes: 10,
        read: false,
        removed: true,
    }
]

function App() {
    const [posts, setPosts] = useState(initialPosts);

    function handleRefresh() {
        setPosts((prevState) => [
            ...prevState,
            {
                title: 'teste teste',
                subtitle: 'Novo post',
                likes: 10
            }
        ])
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => (
            prevState.map((post) => (
                post.id === postId 
                    ? { ...post, removed: true }
                    : post
                ),
            )
        ));
    }

    return (
        <ThemeProvider>
            <Header title="JStack's Blog">
                <h2>
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>
                </h2>
            </Header>
            <hr/>
            {posts.map((post, index) => (
                <Post 
                    key={index}
                    onRemove={handleRemovePost}
                    post={post}
                />
            ))}
        </ThemeProvider>
    )
}

export default App;