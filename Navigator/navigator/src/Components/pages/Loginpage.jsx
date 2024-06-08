import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
const Loginpage = () => {
  const [email,setemail] = useState("")
  const [password,setpassword ] = useState("")
  const hendalesubmit=(el)=>{
      el.preventDefault()
      let userdata={
        email,password
      }
      console.log(userdata)
        // post part

          fetch("https://reqres.in/api/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userdata)
          }).then((res)=>res.json())
          .then((date)=>{
            localStorage.setItem("token",date.token)
            console.log(date)
          })
          .catch((erro)=>console.log(erro)) 
  }
  return (
    <div>
      <h1>Login page</h1>
      <Form onSubmit={hendalesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>&nbsp;&nbsp;&nbsp;
        <Form.Control type="email" onChange={(e)=>setemail(e.target.value)} placeholder="Enter email" />
      </Form.Group><br/>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>&nbsp;&nbsp;&nbsp;
        <Form.Control type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" /> 
      </Form.Group><br/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      
    </div>
  )
}

export default Loginpage
