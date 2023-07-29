import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { BsStopwatch, BsStopwatchFill } from "react-icons/bs";
import {MdOutlinePlaylistAdd} from "react-icons/md";
import {TbNotes} from "react-icons/tb";

const SinglePage = () => {
  const { id } = useParams();
  const { videos, watchLater, dataDispatch } = useContext(DataContext);
  const navigate = useNavigate();
  const filteredVideo = videos?.find((video) => video._id === parseInt(id));

  const [openModal, setOpenModal] = useState(false);



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


  console.log("filteredVidoe", filteredVideo);
  const { thumbnail, title, } = filteredVideo;

  return (
    <main className="w-full h-auto flex flex-col justify-between md:flex-row p-3 xl:p-6">
      <div className="w-[65%] h-[50%] p-3">
        <img className="w-full h-full" src={thumbnail} alt="" />
        <div className="w-full h-[50px] items-center flex justify-between">
              <p className="text-xl font-heading font-medium" >{title}</p>
              <div className="w-[20%] h-full flex items-center justify-evenly">
                <div className="" onClick={(event)=>handleWatchLater(event, filteredVideo)}>
                {    
                  checkWatchLater(filteredVideo) ? <BsStopwatchFill className='text-red-600  text-xl font-bold  hover:text-red-700 '/> : <BsStopwatch className='text-red-700'/>    
                }
                </div>
                
                <div className="">
                  <MdOutlinePlaylistAdd onClick={()=> setOpenModal(!openModal)}/>
                </div>
                
               <div className="">
                <TbNotes/>
               </div>
              </div>
              </div>
              <div className="w-full h-[1px] bg-black font-bold" ></div>
      </div>
      <div className="w-[30%] h-auto lg:w-[25%] xl:w-[20%]">
        {videos?.slice(0, 5)?.map((video) => (
          <main className="w-full h-[200px] m-3  shadow-xl cursor-pointer flex  border-1 border-slate-100">
            <div className="w-full h-[80%] relative p-3">
              <img className="w-full h-full" src={video?.thumbnail} alt="thumbnail" onClick={()=> navigate(`/category/${video._id}`)} />
             
            </div>
            <div className="px-3 flex flex-col">
              <p className="font-medium text-md">{video?.title}</p>
              <p>
                {video?.views} Views | <span>{video?.creator}</span>
              </p>
            </div>
          </main>
        ))}
      </div>
    </main>
  );
};

export default SinglePage;
