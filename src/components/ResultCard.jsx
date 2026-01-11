import React from "react";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
const ResultCard = (props) => {
  return (
    <div className="h-72 relative gap-3 w-60 bg-white rounded">
      <div className="h-full ">
        {props.item.type == 'photos' ? <img className="w-full h-full object-cover" src={props.item.image} alt="" />: ''}
        {props.item.type == 'videos' ? <video className="w-full h-full object-cover" autoPlay loop muted src={props.item.src}></video>: ''}
        {props.item.type == 'GIF' ? <img className="w-full h-full object-cover" src={props.item.image} alt="" /> : ''}
        <div id="btn" className="w-full px-3 py-2 absolute bottom-0">
            <h2 className="text-sm font-semibold">{props.item.title}</h2>
        </div>
      </div>

    </div>
  );
};

export default ResultCard;