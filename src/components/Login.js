import React, { useEffect } from "react";
import {
  Button,
  Form,
  Card,
  Container,
  FormGroup,
  Label,
  Input,
  CardHeader,
  Col,
} from "reactstrap";

import { useState } from "react";
import { login } from "./service/address-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Login=()=>{

    let navigate=useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });


  const{username,password} = data;

  const [error, setError] = useState({});

  const [submit, setSubmit] = useState(false);

  const[token,setToken]=useState(null);

  useEffect(()=>{
    const userid=JSON.parse(localStorage.getItem("user"))
    
    console.log(userid);
   
  },[])

  useEffect(()=>{

    localStorage.setItem("user",JSON.stringify(data));

  },[data])



  const submitLogin = (event) => {
    event.preventDefault();

    setError(validateUser(data));
    setSubmit(true);

    login(data)
      .then((resp) => {
        if (resp == "Success") {
          toast.success("Login Success");
          setData({
            username: "",
            password: "",
          });

          navigate('/home',{state:{user:data.username}})
        } else {
          toast.error("Login Failed");
          setData({
            username: "",
            password: "",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });

  };


// const submitLogin = (event) => {
//     event.preventDefault();

//     const baToken='Basic '+ window.btoa(data.username + ":" + data.password);

//     setError(validateUser(data));
//     setSubmit(true);

//     login(baToken)
//       .then((resp) => {
//         if (resp == "Success") {
//           toast.success("Login Success");
//           setData({
//             username: "",
//             password: "",
//           });

//           setToken(baToken);
//           navigate('/home',{state:{user:data.username}})
//         } else {
//           toast.error("Login Failed");
//           setData({
//             username: "",
//             password: "",
//           });

//           setToken(null);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//   };


  const validateUser = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "UserName is required";
    } else if (values.username < 4) {
      errors.username = "UserName should be atleast 4 characters";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password < 4) {
      errors.password = "Password should be atleast 4 characters";
    }

    return errors;
  };

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };


    return (
        <div className="App-header">
            <Container>

        <Card
            style={{
              width: "20rem",
              background: "linear-gradient(#1C2833, #ECF0F1)"
            }}
            className="m-auto align-self-center mt-3"
          >
            <CardHeader tag="h2">Login</CardHeader>

            <Form onSubmit={submitLogin}>
              <FormGroup>
                <Label for="username" hidden className="ms-2">
                  UserName
                </Label>
                <Input
                  type="text"
                  placeholder="UserName"
                  onChange={(e) => handleChange(e, "username")}
                  value={data.username}
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label for="password" hidden></Label>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handleChange(e, "password")}
                  value={data.password}
                ></Input>
              </FormGroup>

              <Container className="text-center">
                <Button color="dark mb-3">Login</Button>
                <Button color="secondary ms-3 mb-3" type="reset">
                  Reset
                </Button>
              </Container>
            </Form>
          </Card>
        {/* </Col> */}
      </Container>

        </div>
    )

}


export default Login;