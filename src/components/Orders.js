import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [orders,setOrders]=useState([])
    const navigate=useNavigate()
    //valid access token holey data peye jabo server thekey
    useEffect(()=>{
        fetch('http://localhost:5000/orders',{
            method:"GET",
            //server a user GET request korar somoy headers a user->accesstoken ta bearer ar sahey server a pathai dissi .
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            console.log(res)
            if(res.status !== 200){
                navigate('/login')
            }
            return res.json()
        })
        .then(data=>setOrders(data))
    },[])
    return (
        <div>
            <h1>This is Orders page: {orders.length}</h1>
        </div>
    );
};

export default Orders;