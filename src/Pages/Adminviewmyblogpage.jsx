import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Adminviewmyblogpage() {
  const navigate = useNavigate();
  
    

    useEffect(()=>{
            async function getprofile(){
            try{
            
            const response = await fetch(`http://localhost:4005/profile`, {
                        method: "GET",
                        credentials: 'include'
                    });
    
            if (!response.ok){
                alert("Don't try to trick us")
                navigate('/')
            }
            
        }
        catch(error){
            console.log(error)
            navigate('/')
        }
        
        
        
        }
            getprofile()
        },[])
        
  return (
    <div>
      blogs page
    </div>
  )
}
