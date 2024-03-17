import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [gif, setgif] = useState('');
  const [loading, setLoader] = useState(false);
  const [tag,setTag] = useState('car');
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;



  const fetchData = async () =>{

        setLoader(true);
        try {
          const {data} =  await axios.get(url);
          const output = data.data.images.downsized_medium.url;
          setgif(output);
          
        } catch (error) {
          console.error("Error:");
        }
        setLoader(false);

    }

  useEffect(()=>{

      fetchData();
  },[])


  return (
    <div 
    className='bg-blue-500 mt-3 py-16 flex flex-col items-center 
    justify-center gap-y-8 w-1/2 mx-auto border-4 border-blue-700 rounded-xl mb-7'>

      <h1 className='font-bold underline text-2xl text-blue-900'>
        A Random GIF
      </h1>

      {

        loading ? (<Spinner/>)  :  (<img  src={gif}  alt='randomGif'/>)
      }

      <input type='text' className='w-10/12 py-2 rounded-lg bg-slate-300 text-center font-bold text-xl text-green-400'
        onChange={(event)=>{setTag(event.target.value)}}
        value={tag}
      />


      <button className='w-10/12 py-2 text-center bg-cyan-800
       text-cyan-400 rounded-lg border-4 box-border border-cyan-300'
       onClick={()=>fetchData()}
       >Generate</button>

    </div>
  )
}

export default Tag