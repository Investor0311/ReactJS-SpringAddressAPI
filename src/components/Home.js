import React from "react";
import { Button, Container } from "reactstrap";
import { useEffect,useState } from "react";
import { readby } from "./service/address-service";
import {Card} from "reactstrap";
import {CardBody} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { deleteby } from "./service/address-service";
import {toast} from 'react-toastify'

const Home=()=>{

    let navigate=useNavigate();
    const [userlocal,setUserlocal]=useState('');
    const [details,setDetails]=useState([]);

    useEffect(()=>{
        const userid=JSON.parse(localStorage.getItem("user"))
        setUserlocal(userid.username)
        
      },[]) 

      const showDetails=()=>{
        readby(userlocal).then((resp)=>{
            setDetails(resp);
            console.log(resp);
        })

    }

    const updateDetails=()=>{

        navigate('/update','Success');
        

    }

    const deleteDetails=()=>{

        deleteby(userlocal).then((resp)=>{
            if(resp=="Success")
            {
                toast.success('Deleted Details')
                console.log(resp);
            }

            else
            {
                toast.error('Deleted Not Details')
            }
            
        })
        
    }





    return (

        <div className="App">
            <Button onClick={showDetails}>Show details</Button>


            {details.map((user)=>

            <Card style={{ width: '20rem' }} className="m-auto align-self-center mt-4">
            <CardBody>
                <h1>Name: {user.firstname}</h1>
                <h2>LastName: {user.lastname}</h2>
                <h2>Mobile: {user.phones}</h2>
                <h2>Username: {user.username}</h2>
                <h2>Address: {user.addresses}</h2>
                <Container className="text-center">
                <Button color="success mb-3" onClick={updateDetails}>Update</Button>
                <Button color="danger mb-3" onClick={deleteDetails}>Delete</Button>
                </Container>
                
            </CardBody>
            </Card>

)}

        </div>
    )

}


export default Home;