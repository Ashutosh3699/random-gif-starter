import React from 'react';
import Spinner from './Spinner';
import useTag from './useTag';

const Random = () => {

  const {gif,loading,fetchData} = useTag();

  return (
    <div 
    className='bg-green-500 mt-3 py-16 flex flex-col items-center 
    justify-center gap-y-8 w-1/2 mx-auto border-4 border-green-700 rounded-xl'>

      <h1 className='font-bold underline text-2xl text-green-900'>
        A Random GIF
      </h1>

      {

        loading ? (<Spinner/>)  :  (<img  src={gif}  alt='randomGif' />)
      }


      <button className='w-10/12 py-2 text-center bg-emerald-800
       text-green-400 rounded-lg border-4 box-border border-green-300'
       onClick={()=>fetchData()}
       >Generate</button>

    </div>
  )
}

export default Random