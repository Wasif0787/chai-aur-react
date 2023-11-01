import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Wasif0787')
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    //     console.log(data);
    // }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.name}
        <img src={data.avatar_url} alt=""  width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/Wasif0787')
    return response.json()
}