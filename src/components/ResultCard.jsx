import React from "react";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
const ResultCard = (props) => {
  return (
    <div className="h-72 relative gap-3 w-60 bg-white rounded">
      <a className="h-full" href={props.item.url}>
        {props.item.type == 'photos' ? <img className="w-full h-full object-cover" src={props.item.image} alt="" />: ''}
        {props.item.type == 'videos' ? <video className="w-full h-full object-cover" autoPlay loop muted src={props.item.src}></video>: ''}
        {props.item.type == 'GIF' ? <img className="w-full h-full object-cover" src={props.item.image} alt="" /> : ''}
        </a>
        <div id="btn" className="w-full px-3 py-2 absolute bottom-0 flex justify-between items-center">
            <h2 className="text-sm font-semibold">{props.item.title}</h2>
            <button className="bg-amber-400 px-3 py-2 rounded-full">save</button>
        </div>
    </div>

  );
};

export default ResultCard;