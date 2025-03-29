import React from 'react'
import './Article.css'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Article() {

  const data=[{
    Title:"Prativa Chemicals",
    date:"April 2 2024",
    timeofread:"2 min"
  },
  {
    Title:"Face recognition",
    date:"April 2 2024",
    timeofread:"2 min"
  },
  {
    Title:"Airline Reservation System",
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
        <h2 className='article_latest'>📰 Latest Article</h2>
        <p className='article_view'>View all articles →</p>
        
      </div>
      <div className="articlebottomcontainer">
      {data.map((element,i) => 
        i<=3?
        (
          <div className='articleitemscontainer' key={i}>
            <p className='article_element_title'>{element.Title}</p>
            <p className='article_time'>{element.date}&nbsp;.&nbsp;{element.timeofread} read</p>
          </div>
          
        ):null
        
      )}

      </div>
      
      

      
    </div>
  )
}

