import axios from "axios";

const getUserStories = async () => {
  try {
    const res = await axios.get("http://localhost:3000/stories");

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getUserStories };
