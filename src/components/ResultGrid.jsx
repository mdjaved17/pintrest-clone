import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import ResultCard from './ResultCard'
import {
  setActiveTab,
  setResults,
  setLoading,
  setError,
  setQuery,
} from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photos",
            title: item.alt_description,
            image: item.urls.small,
            src: item.urls.full,
          }));
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "videos",
            title: item.user.name || "video",
            image: item.image,
            src: item.video_files[0].link,
          }));
        }
        if (activeTab === "GIF") {
          let response = await fetchGIF(query);
          console.log(response)
          data = response.results.map((item) => ({
            id: item.id,
            type: "GIF",
            title: item.title || "GIF",
            image: item.media_formats.tinygif.url

          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message))
      }
    };
    getData();
  }, [query, activeTab]);

  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading...</h1>

  return (
    <div className="flex flex-wrap gap-8 px-5 justify-center">
      {results.map((item, idx)=>{
          return <div key={idx}>
            <ResultCard item={item}/>
          </div>
      })}
    </div>
  )
};

export default ResultGrid;
