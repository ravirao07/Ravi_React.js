import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import { Link } from 'react-router-dom'
const Productpage = () => {
  const [mydate,setmydate] = useState([])
  const [loading,setloading] = useState(false)
  useEffect(()=>{   
    setloading(true)
    axios.get("https://fakestoreapi.com/products").
    // then((res)=>console.log(res.data))
    then((res)=>{
      setmydate(  res.data)
  setloading(false)
    }).

    catch((erro)=>console.log(""))  
  },[])

  return loading ? <h1> Loading......</h1> : (
    <div>
      <h1>Product page</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"15px"}}>
          {mydate.map((el)=>{
            const { id, title, price, image,category,description, rating} = el;
              return(
                <Link to={`/project/${el.id}`} key={el.id} style={{border:"1px solid black"}} >
                  <h4>{id}</h4>
                  <img src={image} width={200} height={200} alt="" />
                  <h3>{title}</h3>
                  <h4>{category}</h4> 
                  <p>{description}</p>
                  <h5>{rating.rate}</h5>
                </Link>
              )
          })}
      </div>
    </div>
  )
}

export default Productpage
