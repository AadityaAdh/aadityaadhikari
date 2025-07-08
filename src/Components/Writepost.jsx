import React, { useState } from 'react'
import './Writepost.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Writepost() {

  




  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      ['link', 'image', 'formula'],

      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],

      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']
    ]
  };
  const [title, settitle] = useState('');
  const [summary, setsummary] = useState('');
  const [link, setlink] = useState('');
  const [content, setcontent] = useState('');
  const [techstack, settechstack] = useState('');
  const [file, setfile] = useState('');

  async function handlecreatepost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('techstack', techstack);
    data.set('link', link);
    data.set('image', file[0]);
    data.set('content', content)

    //image ni pathaunu parni vayae ra yo garnu pare ko

    //natra ta json nai pathauda ni vai halxa ni

    const response = await fetch(`http://localhost:4005/posts/new`, {
      method: "POST",
      body: data
    });

    if (response.ok) {
      alert("post created sucessfully")

    }
    else {
      alert("something went wrong")
    }

  }


  return (
    <div className='writepostoutercontainer'>
      <h1>Writing Projects</h1>
      <form className='writepostform' onSubmit={handlecreatepost}>
        <br></br>
        <label>Image</label>
        <br></br>
        <input type='file' onChange={(e) => setfile(e.target.files)} required></input>
        <br></br>
        <label>Title</label>
        <br></br>
        <input type='text' value={title} onChange={(e) => settitle(e.target.value)} required></input>
        <br></br>
        <label>Summary</label>
        <br></br>
        <textarea value={summary} onChange={(e) => setsummary(e.target.value)} required></textarea>
        <br></br>
        <label>Tech-Stack</label>
        <br></br>
        <input type='text' value={techstack} onChange={(e) => settechstack(e.target.value)}></input>
        <br></br>
        <label>Link</label>
        <br></br>
        <input value={link} type='text' onChange={(e) => setlink(e.target.value)}></input>
        <br></br>

        <button type='submit' >Create Post</button>

        <br></br>
        <label>Content</label>
        <br></br>
        <ReactQuill value={content} onChange={(newvalue) => setcontent(newvalue)} className='quillwritepost' modules={modules} />


      </form>
    </div>
  )
}
