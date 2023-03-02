import axios from "axios";

export const signup=(user)=>{
    return axios.post(`http://localhost:8080/register`,user)
    .then((response)=>response.data)
}

export const login=(user)=>{
    return axios.post(`http://localhost:8080/auth`,user)
    .then((response)=>response.data)
}

export const readby=(user)=>{
    return axios.post(`http://localhost:8080/home`,user)
    .then((response)=>response.data)
}

export const updateby=(user)=>{
    return axios.post(`http://localhost:8080/update`,user)
    .then((response)=>response.data)
}

export const deleteby=(user)=>{
    return axios.post(`http://localhost:8080/delete`,user)
    .then((response)=>response.data)
}


// export const login=(token)=>{
//     return axios.get(`http://localhost:8080/basicauth`,{
//         headers:{
//             //Authorization: 'Basic eWFzaDphYmM='
//             Authorization: token
//         }

//     })
//     .then((response)=>response.data)
// }