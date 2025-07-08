import React, { useState } from 'react'
import './Adminallprojects.css'
import { useNavigate } from 'react-router-dom';


export default function Adminallprojects() {
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();
    
    

    const projectdata = [{
        id:"djak",
        title: "Prativa Chemicals Mern stack",
        summary: "this is summary",
        image: "public/PrativaChemicals.png",
        content: "<h1>Prativa chemicals</h1>"
    },
    {
        id:"far",
        title: "Facial recognition syatem",
        summary: "this is summary",
        image: "public/Facerecognition.jpg",
        content: "<h1>Face recognition</h1>"
    },
    {
        id:"fjadfja4fjai",
        title: "Etl ",
        summary: "this is etl",
        image: "public/Aaditya.jpg",
        content: "<h1>ETL</h1>"
    }


    ]
    const blogdata = [
  {
    id:"f8uq89",
    title: "The Power of Daily Journaling",
    summary: "How a simple habit can transform your mental clarity and emotional health.",
    image: "public/Aaditya.jpg",
    content: `
      <h1>The Power of Daily Journaling</h1>
      <p>Journaling is one of the simplest yet most powerful practices you can adopt. Writing down your thoughts every day helps you process emotions, clarify goals, and even improve memory. Whether you prefer pen-and-paper or digital journaling, the key is consistency.</p>
    `
  },
  {
    id:"8q4u98",
    title: "Exploring the Minimalist Lifestyle",
    summary: "Why less truly can be more in today’s busy world.",
    image: "public/Facerecognition.jpg",
    content: `
      <h1>Exploring the Minimalist Lifestyle</h1>
      <p>Minimalism is about simplifying your life and focusing on what truly matters. By decluttering your space and your mind, you can reduce stress and find greater freedom. It's not just about fewer possessions, but about intentional living.</p>
    `
  },
  {
    id:"6fq767",
    title: "How to Brew the Perfect Cup of Coffee",
    summary: "Simple steps to elevate your morning ritual.",
    image: "public/Aaditya.jpg",
    content: `
      <h1>How to Brew the Perfect Cup of Coffee</h1>
      <p>Brewing great coffee is an art and a science. Start with freshly ground beans, use filtered water, and mind your brew time. Whether you prefer a French press or a pour-over, small details make a big difference in taste.</p>
    `
  },
  {
    id:"ft83",
    title: "Top 5 Travel Destinations for 2025",
    summary: "Where to go for unforgettable adventures next year.",
    image: "public/Facerecognition.jpg",
    content: `
      <h1>Top 5 Travel Destinations for 2025</h1>
      <ul>
        <li>Kyoto, Japan</li>
        <li>Lisbon, Portugal</li>
        <li>Vancouver, Canada</li>
        <li>Cape Town, South Africa</li>
        <li>Queenstown, New Zealand</li>
      </ul>
      <p>Each of these spots offers amazing culture, scenery, and activities for every kind of traveler.</p>
    `
  },
  {
    id:"6ftq",
    title: "Beginner’s Guide to Meditation",
    summary: "Simple techniques to calm your mind and improve focus.",
    image: "public/Aaditya.jpg",
    content: `
      <h1>Beginner’s Guide to Meditation</h1>
      <p>Meditation doesn’t have to be complicated. Start by setting aside just five minutes each day to focus on your breath. With practice, you can train your mind to be more present, reducing anxiety and increasing well-being.</p>
    `
  }
];

function handleadminprojectclick(id){
    navigate(`/adminviewmyproject/${id}`)
    
}
function handleadminblogclick(id){
    navigate(`/adminviewmyblog/${id}`)
    
}

function handlaeadmindeleteproject(id){
    console.log(id)

}

function handlaeadmindeleteblog(id){
    console.log(id)

}

function handlewritepost(){
  navigate('/writepost')

}

  return (
    <div className='adminprojectsalloutercontainer'>
        <button className='writeposts' onClick={handlewritepost}>Write Post</button>
        <h2>What you want to see</h2>
        <select value={selected} onChange={e => setSelected(e.target.value)}>
        <option value="">Select an option</option>
        <option value="Project">Project</option>
        <option value="Blog">Saab</option>
      </select>
                {selected=="Project" && projectdata.map((post, index) => (
                    <div className='postcard' key={index} onClick={()=>handleadminprojectclick(post.id)}>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} className='adminpostsallimg' />
                        <p>{post.summary}</p>
                        <button className='adminpostdelete' onClick={()=>handlaeadmindeleteproject(post.id)}>Delete</button>
                        
                    </div>
                ))}
                {selected=="Blog" && blogdata.map((post, index) => (
                    <div className='postcard' key={index}>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} className='adminpostsallimg' />
                        <p>{post.summary}</p>
                        <button className='adminpostdelete' onClick={()=>handlaeadmindeleteblog(post.id)}>Delete</button>
                        
                    </div>
                ))}
            </div>
  )
}
