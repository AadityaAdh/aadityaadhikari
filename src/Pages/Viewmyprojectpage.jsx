import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import './Viewmyprojectpage.css'
import { useNavigate } from 'react-router-dom';
import Viewmyprojectt from '../Components/Viewmyprojectt';


export default function Viewmyprojectpage() {
  const navigate = useNavigate();
  
    

    
        
  return (
    <div className='adminviewmyprojectpage_outercontainer'>
                <div className='navbaroutercontainer'>
                    <Navbar/>
                </div>

                <div className="adminviewmyprojectpageoutercontainer">
                  <Viewmyprojectt/>
                            
                
                </div>
                
                
                
              
    </div>
  )
}
