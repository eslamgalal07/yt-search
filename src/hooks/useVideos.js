import { useState, useEffect } from "react";
import youtube from "../components/apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    let response = await youtube.get("/search", { params: { q: term } });
    setVideos(response.data.items);
  };
  return [videos, search];
};
export default useVideos;
