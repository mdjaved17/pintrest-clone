import React from "react";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
const ResultCard = (props) => {
  return (
    <div className="h-72 gap-3 w-60 bg-amber-300">
      {props.item.type == 'photos' ? <img className="w-full h-40 object-cover" src={props.item.image} alt="" />: ''}
      {props.item.type == 'videos' ? <video className="w-full h-40 object-cover" autoPlay loop muted src={props.item.src}></video>: ''}
      {props.item.type == 'GIF' ? <img className="w-full h-40 object-cover" src={props.item.image} alt="" /> : ''}
      <h1 className="text-black">{props.item.title}</h1>

    </div>
  );
};

export default ResultCard;