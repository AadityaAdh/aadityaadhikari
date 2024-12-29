import React from 'react'
import './Article.css'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Article() {

  const data=[{
    Title:"Mern website using mern stack",
    date:"April 2 2024",
    timeofread:"2 min"
  },
  {
    Title:"Face recognition",
    date:"April 2 2024",
    timeofread:"2 min"
  },
  {
    Title:"Automated Attendence",
    date:"April 2 2024",
    timeofread:"2 min"
  },
  {
    Title:"Traffic sign genreration",
    date:"April 2 2024",
    timeofread:"2 min"
  },
  {
    Title:"Hangman",
    date:"April 2 2024",
    timeofread:"2 min"
  }
]
  return (
    <div className='articlecontainer'>
      <div className="articletopcontainer">
        <h1>📰 Latest Article</h1>
        <p>View all articles<IoIosArrowRoundForward /></p>
        
      </div>
      <div className="articlebottomcontainer">
      {data.map((element,i) => 
        i<=3?
        (
          <div className='articleitemscontainer' key={i}>
            <h2>{element.Title}</h2>
            <p>{element.date}&nbsp;.&nbsp;{element.timeofread} read</p>
          </div>
          
        ):null
        
      )}

      </div>
      
      

      
    </div>
  )
}
