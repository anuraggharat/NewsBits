import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import Loader from "./Components/Loader";
import './App.css' 
import Header from './Components/Header'
import { getHeadlines, getNews, getNewsByCategory } from "./Utils/getreq";

var categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export default function App() {


  const [category, setCategory] = useState('headlines');


  const [data,setData]=useState(null)
  const [alert,setAlert]=useState(false)
  const [query,setQuery]=useState('')




  const changeCategory=(newcategory)=>{
    setCategory(newcategory)
     getNewsByCategory(newcategory)
       .then((res) => {
         if (res.status) {
           setData(res.articles);
         } else {
           setData(null);
         }
       })
       .catch((e) => console.log(e));
  }

  const changeCountry=(cou)=>{
        getHeadlines(cou)
          .then((res) => {
            if (res.status) {
              setData(res.articles);
            } else {
              setData(null);
            }
          })
          .catch((e) => console.log(e));
  }


  const handleChange=(e)=>{
    setQuery(e.target.value)
  }

  const onSubmit=()=>{
    if(query===''){
      window.alert("Enter Some text")
      return
    }
    getNews(query).then(res=>{
      console.log(res)
      if (res.totalResults === 0) {
        setData([]);
        setAlert(true);
      } else {
        setAlert(false)
        setData(res.articles);
      }
    }).catch(e=>console.log(e))
  }

  const loadData=()=>{
    setCategory('headlines')
    getHeadlines().then(res=>{
      if(res.status){
        setData(res.articles)
              }
      else{
        setData(null)

      }
    }).catch(e=>console.log(e));
  }




  useEffect(()=>(
    loadData()
  ),[])


  return (
    <div className="bg-light p-0">
      <Header changeCountry={changeCountry} />
      <div className="container min-vh-100  mt-5">
        <div className="w-50 mx-auto mb-5">
          <div className="input-group-lg input-group mb-3  ">
            <input
              type="text"
              className="form-control "
              placeholder="Search"
              value={query}
              onChange={handleChange}
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
              onClick={onSubmit}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        <div className="container w-75 mb-5">
          <ul className="nav nav-pills">
            <li
              className="nav-item"
              onClick={() => loadData()}
            >
              <p
                className={category === 'headlines' ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                Headlines
              </p>
            </li>
            {categories.map((item, index) => (
              <li
                className="nav-item"
                onClick={() => changeCategory(item)}
                key={index}
              >
                <p
                  className={category === item ? "nav-link active" : "nav-link"}
                  aria-current="page"
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="container w-75">
          {data ? (
            <div>
              {data.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          ) : (
            <Loader />
          )}

          {alert ? (
            <div className="alert alert-danger" role="alert">
              The topic you searched is not found! Please edit your search or go{" "}
              <a href="/" className="active">
                back
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
