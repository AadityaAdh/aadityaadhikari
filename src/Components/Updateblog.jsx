import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function Updateblog() {
    const {id} = useParams();
    const [postinfo,setpostinfo]=useState(null);
    const navigate=useNavigate();
    
    const modules={toolbar:[
  ['bold', 'italic', 'underline', 'strike'],        
  ['blockquote', 'code-block'],
  ['link', 'image','formula'],

  [{ 'header': 1 }, { 'header': 2 }],               
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      
  [{ 'indent': '-1'}, { 'indent': '+1' }],          
  [{ 'direction': 'rtl' }],                         

  [{ 'size': ['small', false, 'large', 'huge'] }],  
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         
  ]};
  const [title,settitle]=useState('');
  const [summary,setsummary]=useState('');
  const [minread,setminread]=useState('');
  const [content,setcontent]=useState('');
  const [file,setfile]=useState('');

  async function handleupdatepost(e){
    e.preventDefault()
    const data =new FormData();
    data.set('title',title);
    data.set('summary',summary);
    data.set('minread',minread);
    if (file[0]){
      data.set('image',file[0]);
  }
    data.set('content',content)

    //image ni pathaunu parni vayae ra yo garnu pare ko

    //natra ta json nai pathauda ni vai halxa ni

    const response = await fetch(`https://aadityaadhbackend.onrender.com/blogs/update/${id}`, {
                    method: "PUT",
                    body:data
                });

    if (response.ok){
      alert("post updated sucessfully")
      navigate('/blogs')
      

    }
    else{
      alert("bad response")
    }

  }
  useEffect(()=>{
    //get that project data from that id
    async function getsingleproject() {
      try{
      const response = await fetch(`https://aadityaadhbackend.onrender.com/blogs/getBlog/${id}`, {
                            method: "GET",
                            
      });
      if (response.ok){
        const singleitem = await response.json();
        settitle(singleitem.blog.title)
        setsummary(singleitem.blog.summary)
        setcontent(singleitem.blog.content)
        setminread(singleitem.blog.minread)

      }
      else{
        alert("respose bad came from server")
      }
    }
    catch(err){
      console.log(err)
      alert("some error happened check log")
      
    }

      
    }
    //lets say got it and save in  project data

    getsingleproject()

    

  },[])
  
  return (
    <div className='writepostoutercontainer'>
          <form className='writepostform'>
            <br></br>
            <label>Image</label>
            <br></br>
            <input type='file'  onChange={(e)=>setfile(e.target.files)}></input>
            <br></br>
            <label>Title</label>
            <br></br>
            <input type='text' value={title} onChange={(e)=>settitle(e.target.value)}></input>
            <br></br>
            <label>Summary</label>
            <br></br>
            <textarea value={summary} onChange={(e)=>setsummary(e.target.value)}></textarea>
            <br></br>
            <label>How many min read ?</label>
            <br></br>
            <input type='text' value={minread} onChange={(e)=>setminread(e.target.value)}></input>
            <br></br>
            
            
            <button onClick={handleupdatepost}>Update Blog</button>
    
            <br></br>
            <label>Content</label>
            <br></br>
            <ReactQuill value={content} onChange={(newvalue)=>setcontent(newvalue)} className='quillwritepost' modules={modules}/>
    
            
          </form>
    </div>
  )
}
