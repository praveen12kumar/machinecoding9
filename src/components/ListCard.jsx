import React, {useContext} from 'react'
import {BsStopwatch, BsStopwatchFill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';


const ListCard = ({video}) => {
    const navigate = useNavigate();
    const {creator, thumbnail, title, views } = video;
    const {dataDispatch, watchLater} = useContext(DataContext);
    
    const addWatchLater = (video)=>{
        dataDispatch({
            type:"AddWatchLater",
            payload:video,
        })
    }

    const removeWatchLater = (video)=>{
       const filteredVideos =  watchLater.filter((item)=> item._id !== video._id)
        dataDispatch({
            type:"RemoveWatchLater",
            payload: filteredVideos,
        })
    }
    const checkWatchLater = (video) => {
        return watchLater.some((item)=> item._id === video._id)
    }

    const handleWatchLater = (event, video) => {
        event.stopPropagation();
        checkWatchLater(video) ? removeWatchLater(video) : addWatchLater(video);
    }

    


  return (
    <main className='w-[300px] h-[300px] m-6 p-3 shadow-xl cursor-pointer flex flex-col border-1 border-slate-100'>
        <div className="w-full h-[80%] relative p-3" onClick={()=> navigate(`/category/${video._id}`)} >
            <img className='w-full h-full' src={thumbnail} alt="thumbnail" />
           <div className="bg-white p-2 absolute top-0 right-0 rounded-l-lg z-10" onClick={(event)=>handleWatchLater(event, video)}>
            {    
                checkWatchLater(video) ? <BsStopwatchFill className='text-red-600  text-xl font-bold  hover:text-red-700 '/> : <BsStopwatch className='text-red-700'/>    
            }
           </div>
        </div>
        <div className="px-3 flex flex-col">
           <p className='font-medium text-md'>{title}</p>
           <p>{views}{" "} Views | <span>{creator}</span></p>
        </div>    
    </main>
  )
}

export default ListCard
