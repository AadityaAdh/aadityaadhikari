import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();  
    const [myname, setmyname] = useState();
    const [mypass,setmypass] = useState();

    async function handleproceed(e){
      e.preventDefault();


        


      try {
                const response = await fetch(`http://localhost:4005/posts/getUser?uniqueid=${myname}&password=${mypass}`, {
                    method: "GET",
                    credentials: 'include'
                });
                if (response.ok) {
                    navigate('/')
                } else {
                    alert("only aaditya is allowed to login")
                }
            } catch (error) {
              console.log(error)
                alert("Please retry again")
            }
    }
  return (
    <div className="logincontainer">
      <div className="loginbackground">
        <div className="loginshape"></div>
        <div className="loginshape"></div>
      </div>
      <form className='loginformcontainer'>
        <h3>Login</h3>

        <label htmlFor="username" className='loginlabel'>Username</label>
        <input type="text" placeholder="Email or Phone" id="username" className='logininput' value={myname} onChange={(e)=>setmyname(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" className='logininput' value={mypass} onChange={(e)=>setmypass(e.target.value)} />

        <button  className='proceedlogin' onClick={handleproceed}>Log In</button>
        
      </form>
    </div>
  )
}
