import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "GIF"];
  const dispatch= useDispatch();
  const activeTab= useSelector((state)=> state.search.activeTab)

  return (
    <div className="flex gap-8 p-10 justify-center">
      {tabs.map((elem, idx) => {
        return (
          <button onClick={()=>{
            dispatch(setActiveTab(elem))
          }}
            className={`${(activeTab == elem ? 'bg-blue-800' : 'bg-gray-600 ' )} px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
            key={idx}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
