import  { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useTag = (tag) => {

  const [gif, setgif] = useState('');
  const [loading, setLoader] = useState(false);
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


  const fetchData = useCallback( async () =>{

        setLoader(true);
        try {
          const {data} =  await axios.get(tag ? (tagMemeUrl) : (randomMemeUrl));
          const output = data.data.images.downsized_medium.url;
          setgif(output);
          
        } catch (error) {
          console.error("Error:");
        }
        setLoader(false);

    },[tagMemeUrl,randomMemeUrl,tag]);

  useEffect(()=>{

    fetchData();
  },[fetchData])

  return({gif,loading,fetchData});

}

export default useTag