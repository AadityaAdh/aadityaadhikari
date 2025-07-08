import React, { useState } from 'react'
import './Writepost.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Writeblog() {
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
  const [content,setcontent]=useState('');
  const [minread,setminread]=useState('');
  const [file,setfile]=useState('');

  async function handlecreatepost(e){
    e.preventDefault();
    const data =new FormData();
    data.set('title',title);
    data.set('summary',summary);
    data.set('minread',minread);
    
    data.set('image',file[0]);
    data.set('content',content)

    //image ni pathaunu parni vayae ra yo garnu pare ko

    //natra ta json nai pathauda ni vai halxa ni

    const response = await fetch(`http://localhost:4005/blogs/new`, {
                    method: "POST",
                    body:data
                });

    if (response.ok){
      alert("post created sucessfully")

    }
    else{
      alert("something went wrong")
    }

  }


  return (
    <div className='writepostoutercontainer'>
        <h1>Writing Blogs</h1>
      <form className='writepostform' onSubmit={handlecreatepost}>
        <br></br>
        <label>Image</label>
        <br></br>
        <input type='file' onChange={(e)=>setfile(e.target.files)}></input>
        <br></br>
        <label>Title</label>
        <br></br>
        <input type='text' value={title} onChange={(e)=>settitle(e.target.value)} required></input>
        <br></br>
        <label>Summary</label>
        <br></br>
        <textarea value={summary} onChange={(e)=>setsummary(e.target.value)} required></textarea>
        <br></br>
        <label>How many min read ?</label>
        <br></br>
        <input type='text' value={minread} onChange={(e)=>setminread(e.target.value)} required></input>
        <br></br>
        
        
        <button type='submit' >Create Blog</button>

        <br></br>
        <label>Content</label>
        <br></br>
        <ReactQuill value={content} onChange={(newvalue)=>setcontent(newvalue)} className='quillwritepost' modules={modules}/>

        
      </form>
    </div>
  )
}
