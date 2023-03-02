import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardImg,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
  import { useState,useEffect } from "react";
  import { Link } from "react-router-dom";
  import {toast} from 'react-toastify'
  import { signup } from "./service/address-service";



const AddressBook=()=>{

    // const [data,setData]=useState({
    //     name: '',
    //     mobile: '',
    //     username: '',
    //     password: '',
    // })

    const [data,setData]=useState({
        fname: '',
        lname: '',
        mobile: '',
        address: '',
        username:'',
        password: '',
    })
  
    const [error,setError]=useState({})
    const [submit,setSubmit]=useState(false)
  


    const handleChange=(event,property)=>{
        setData({...data,[property]:event.target.value})
        console.log(data)
    }
  
  
    // const resetData=()=>{
    //     setData({
    //       name: '',
    //       mobile: '',
    //       username: '',
    //       password: '',
    //   })
    // }

    const resetData=()=>{
        setData({
          fname: '',
          lname: '',
          mobile: '',
          address: '',
          username:'',
          password: '',
      })
    }



    const submitForm=(event)=>{
        event.preventDefault()
        setError(validate(data))
        setSubmit(true)
        // signup(data).then((resp)=>{
        //   toast.success('User Registered')
        //   setData({
        //     name: '',
        //     mobile: '',
        //     username: '',
        //     password: '',
        // })  
    
        // }).catch((error)=>{
        //   toast.success('Form Data is Invalid')
        //   console.log(error)
        // })
      }
    
      useEffect(()=>{
        if(Object.keys(error).length ===0 && submit)
        {
            signup(data).then((resp)=>{
              toast.success('User Registered')
              setData({
                fname: '',
                lname: '',
                mobile: '',
                address: '',
                username:'',
                password: '',
            })  
              
            }).catch((error)=>{
              toast.error('Form Data is Invalid')
              console.log(error)
            })
        }
    
      },[error])
    
      const validate=(values)=>{
          const errors={}
    
          if(!values.fname)
          {
            errors.name="Name is required";
          }
          if(!values.mobile)
          {
            errors.mobile="Mobile is required";
          }
          else if(values.mobile<10 && values.mobile>10)
          {
            errors.mobile="Mobile should be 10 digits";
          }
          if(!values.lname)
          {
            errors.lname="Username is required";
          }
          else if(values.lname<4)
          {
            errors.lname="UserName should be atleast 4 characters";
          }
    
          if(!values.address)
          {
            errors.address="Password is required";
          }
    
          else if(values.address<4)
          {
            errors.address="Password should be atleast 4 characters";
          }
    
          return errors;
      }


    return(

        <div>
            <Card style={{width:'18rem'}} className="m-auto align-self-center">
                <CardBody>
                <Form onSubmit={submitForm}>
              <FormGroup>
                <Label for="fname" >Enter First Name</Label>
                <Input type="text" placeholder="Enter here" onChange={(e)=>handleChange(e,'fname')} value={data.fname}></Input>
              </FormGroup>
              <p className="App-link">{error.fname}</p>
              <FormGroup>
                <Label for="lname" >Enter Last Name</Label>
                <Input type="text" placeholder="Enter here" onChange={(e)=>handleChange(e,'lname')} value={data.lname}></Input>
              </FormGroup>
              <p className="App-link">{error.lname}</p>
              <FormGroup>
                <Label for="mobile" >Enter Mobile</Label>
                <Input type="number" placeholder="Enter here" onChange={(e)=>handleChange(e,'mobile')} value={data.mobile}></Input>
              </FormGroup>
              <p className="App-link">{error.mobile}</p>
              <FormGroup>
                <Label for="address" >Enter Address</Label>
                <Input type="text" placeholder="Enter here" onChange={(e)=>handleChange(e,'address')} value={data.address}></Input>
              </FormGroup>
              <p className="App-link">{error.address}</p>
              <FormGroup>
                <Label for="username" >Enter Username</Label>
                <Input type="text" placeholder="Enter here" onChange={(e)=>handleChange(e,'username')} value={data.username}></Input>
              </FormGroup>
              <p className="App-link">{error.username}</p>
              <FormGroup>
                <Label for="address" >Enter Password</Label>
                <Input type="password" placeholder="Enter here" onChange={(e)=>handleChange(e,'password')} value={data.password}></Input>
              </FormGroup>
              <p className="App-link">{error.password}</p>
              <Container className="text-center">
                <Button color="dark">Register</Button>
                <Button color="secondary ms-3" type="reset" onClick={resetData}>Reset</Button>
              </Container>
              <Link className="list-group-item list-group-item-action text-center mt-3" action to="/auth" tag="a">Already Have an Account?</Link>
            </Form>
                </CardBody>

            </Card>
        </div>
    )


}



export default AddressBook;