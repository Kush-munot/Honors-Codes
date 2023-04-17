import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(resp => {
                console.log(resp);
                setPost(resp.data)
            })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}> Fetch Data</button>
            <p>{post.title}</p>
        </div>
    )
}

export default DataFetching