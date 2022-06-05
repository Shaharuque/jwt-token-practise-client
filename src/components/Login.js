import React from 'react';
import { useNavigate } from 'react-router-dom';


const inputStyle = {
    width: '100%',
    height: '30px',
    marginBottom: '10px'
}

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log({email,password})

        //login information send/post req to server
        fetch('http://localhost:5000/login',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})  //always {information to be sent} amn bhabey pathatey hobey  cuz object k stringify kora jay
        })
        .then(res=>res.json())      //responsed stringify obj k object a convert
        .then(data=>{
            if(data.success){
                //'data' tey access token thakbey if user exists ,access token k localStorage store korbo
                localStorage.setItem('accessToken',data.accessToken)
                //and user k onno kono page a hoito navigate korey dibo
                navigate('/orders')
            }
            else{
                alert('Wrong name or password')
            }
            console.log(data)   //backend thekey data pabo if successfully hit the http://localhost:5000/login url/api
      
        })

    }

    return (
        <form onSubmit={handleLogin} style={{ width: '50%', margin: '20px auto' }}>
            <input style={inputStyle} type="email" name="email" placeholder='Email' />
            <br />
            <input style={inputStyle} type="password" name="password" placeholder='Password' />
            <br />
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;