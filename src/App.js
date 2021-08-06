import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import Loader from "./Components/Loader";

import Header from './Components/Header'
import { getHeadlines, getNews } from "./Utils/getreq";

export default function App() {



  const [data,setData]=useState(null)
  const [alert,setAlert]=useState(false)
  const [country, setCountry] = useState('in');
  const [query,setQuery]=useState('')





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
    if(query==''){
      window.alert("Enter Some text")
      return
    }
    getNews(query).then(res=>{
      console.log(res)
      if (res.totalResults == 0) {
        setData([]);
        setAlert(true);
      } else {
        setAlert(false)
        setData(res.articles);
      }
    }).catch(e=>console.log(e))
  }

  const loadData=()=>{
    getHeadlines(country).then(res=>{
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
    <div className="bg-light">
      <Header changeCountry={changeCountry} country={country} />
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

          {
            alert ? <div class="alert alert-danger" role="alert">
  The topic you searched is not found! Please edit your search or go <a href="/" className="active">back</a>
</div>:null
          }
        </div>
      </div>
    </div>
  );
}
