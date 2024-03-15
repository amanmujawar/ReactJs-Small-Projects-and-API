import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetApi = () => {

    const [post, setPost] = useState([])

    useEffect(()=>{
        axios.get("https://randomfox.ca/floof/")
        .then((res)=>{
            setPost([res.data]) // Wrap the response data in an array
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])

    return (
        <div>
            {
                Array.isArray(post) && post.length > 0 ? (
                    post.map((p, index) => {
                        const { image, link } = p;
                        return (
                            <div key={index}>
                                <img src={image} alt="" />
                                <a href={link}></a>
                            </div>
                        )
                    })
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    )
}

export default GetApi
