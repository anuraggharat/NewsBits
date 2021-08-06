import axios from "axios";

export const getHeadlines =async(country="in")=>{
    try {
        const req = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
        console.log("in req",req)
        return req.data
    } catch (error) {
        console.log("error",error);
        return {status : false,message:"Something went wrong!"}
    }

    
}

export const getNews = async (query) => {
  try {
    const req = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    
    return req.data;
  } catch (error) {
    console.log("error", error);
    return { status: false, message: "Something went wrong!" };
  }
};


export const getNewsByCategory = async (category) => {
  try {
    const req = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );

    return req.data;
  } catch (error) {
    console.log("error", error);
    return { status: false, message: "Something went wrong!" };
  }
};