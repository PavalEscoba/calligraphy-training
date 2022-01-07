import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4YrnaqjzjfDBWlGhA9B9lRTnxVc5gZI4AVhJqrmvLLY",
  },
});
