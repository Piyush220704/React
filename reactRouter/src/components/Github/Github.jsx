import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Piyush220704')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setData(data);
    //     })
    // }, [] );
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-around'>
        <img src={data.avatar_url} alt="git_picture" width={200}/>
        <div className='flex items-center'>Github Followers : {data.followers}</div>
         
    </div>
  )
}

export default Github
export const getInfo = async ()=>{
    const res = await fetch('https://api.github.com/users/Piyush220704').then(res => res.json());
    return res;
}