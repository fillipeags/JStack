import React from 'react';
import Header from './Header';
import Post from './Post';
import { useState } from 'react';

const initialPosts = [
    {
        title: 'Title#1',
        subtitle: 'Sub#1',
        likes: 10
    },
    {
        title: 'Title#2',
        subtitle: 'Sub#1',
        likes: 10
    },
    {
        title: 'Title#3',
        subtitle: 'Sub#1',
        likes: 10
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

    return (
        <>
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
                    likes={post.likes}
                    post={{
                        title: post.title,
                        subtitle: post.subtitle
                    }}
                />
            ))}
        </>
    )
}

export default App;