import axios from "axios";
const KEY = "AIzaSyDhrrjjJE_-HSRsSgOZ9apa5T_D5NClpe0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    type: "video",
    key: KEY,
  },
});
