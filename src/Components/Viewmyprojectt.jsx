import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Viewmyprojectt.css'

export default function Viewmyprojectt() {
  
  const {id}=useParams();
  const [data,setdata]=useState();
  const [modifiedHtml,setmodifiedHTML]=useState();
  const [allblockquotes,setallblockquotes]=useState();
  const [indextohighlight,settindextohighlight]=useState();
  const [isadmin,setisadmin]=useState(false);
  const navigate= useNavigate();




  useEffect(()=>{
            async function getprofile(){
            try{
            
            const response = await fetch(`https://aadityaadhbackend.onrender.com/profile`, {
                        method: "GET",
                        credentials: 'include'
                    });
    
            if (response.ok){
                setisadmin(true);
            }
            
        }
        catch(error){
            console.log(error)
            alert("Something Bad happened redirecting to home page")
            navigate('/')
        }
        
        
        
        }
            getprofile()
        },[])






  useEffect(() => {
  const vpc = document.querySelector('.viewmyprojectcontents');
  const blockheadings = document.querySelectorAll('.viewmyprojectcontents blockquote');
  const aheadings = document.querySelectorAll('.tableofcontentsinner a');
  let myd={}


  for (let i=0;i<blockheadings.length;i++){
    let upperlimit;
    if (i==blockheadings.length-1){
      upperlimit=blockheadings[i].offsetTop*1000
    }
    else{
      upperlimit=blockheadings[i+1].offsetTop-5
    }
    
    myd[`blockquote-${i + 1}`]=[blockheadings[i].offsetTop-4,upperlimit]

  }

  const handleScroll = () => {
    if (vpc) {
      //lucily i havent used any position absolute ,relative so there is no parent of any one in case of using offsettop
      //   //so any div offset top is the distance from the top
      //check by these 2
      // console.log(vpc.offsetTop);
      // console.log(window.scrollY);
      

      //limit nikalam kasko kasko area ma k k parxa

      //aarko heading na aaunu jel samman ko sabbai mero ma nia parxa vanni logic ho


      //aaba tyo scroll position kasto ma parxa tesai ko css highlight gardini sakyo

      let scrolledposition=window.scrollY;
      let h=0;
      for (const key in myd) {
        
        if (scrolledposition>=myd[key][0]&&scrolledposition<=myd[key][1]){
          settindextohighlight(h)
          break;
        




        }
        else{
          h+=1;
          settindextohighlight();
        }
      }

    }
  };

  window.addEventListener('scroll', handleScroll);

  
}, [modifiedHtml]);


  
  useEffect(()=>{
    async function getSinglePosts(){
                try{
                
                const response = await fetch(`https://aadityaadhbackend.onrender.com/posts/getPost/${id}`, {
                            method: "GET",
                            
                        });
        
                if (response.ok){
                    const singleitem = await response.json();
                    console.log(singleitem.post)
                    setdata(singleitem.post);
                    // parse


                    const parser = new DOMParser();
                    const doc = parser.parseFromString(singleitem.post.content, 'text/html');

                    const bqs = doc.querySelectorAll('blockquote');

                    bqs.forEach((bq, index) => {
                      bq.setAttribute('id', `blockquote-${index + 1}`);
                    });

                    setmodifiedHTML(doc.body.innerHTML);


                    //const abq = [...singleitem.post.content.matchAll(/<blockquote>(.*?)<\/blockquote>/g)].map(m => m[1]);
                    // const abq = [...singleitem.post.content.matchAll(/<blockquote>(.*?)<\/blockquote>/g)].map(m => m[1]);

                    // const x=abq.matchAll(/>(.+?)<)/g).map(m=>m[1])


                    // console.log(abq);

                    // setallblockquotes(x)

                    // get all <blockquote>...</blockquote> matches, capturing the inner content
                    const blockquoteMatches = [
                      ...singleitem.post.content.matchAll(/<blockquote>(.*?)<\/blockquote>/gs)
                    ].map(m => m[1]);  // m[1] is the capture group contents

                    // now, for each inner content, strip any HTML tags to get plain text
                    const cleanedBlockquotes = blockquoteMatches.map(bq =>
                      bq.replace(/<[^>]+>/g, '').trim()
                    );

                    // log it
                    console.log(cleanedBlockquotes);

                    // save in state
                    setallblockquotes(cleanedBlockquotes);

                  
                  

                  

                    


                    
                    
                    
                }
                else{
                    alert("could not get the post")
                }
                
            }
            catch(error){
                console.log(error)
                
            }
            
            
            
            }
            getSinglePosts()
  },[])


  async function handledelete(id){
    const response = await fetch(`https://aadityaadhbackend.onrender.com/posts/deletePost/${id}`, {
                            method: "DELETE",
                            
                        });

    if (response.ok){
      alert("deleted")
      navigate('/projects')
    }
    else{
      alert("wrong")
    }

  }
  function handleupdate(id){
    navigate(`/adminupdatepost/${id}`)
    
  }
  if (!data&&!modifiedHtml&&!allblockquotes) return (<img src='/infinity.svg'></img>) 
  return (
    <div className='viewmyprojectoutercontainer'>
      {data ? (
        <div>
        <img src={`https://aadityaadhbackend.onrender.com/${data.image}`}></img>
        <h1 className='viewmyprojecttitle'>{data.title} 🔗</h1>
        
        <p className='viewmyprojectsummary'>{data.summary}</p>
        <br></br>
        {isadmin && (<div className='viewmyprojectbuttoncontainer'><button onClick={()=>handleupdate(data._id)}>Update this post</button><button onClick={()=>handledelete(data._id)}>Delete this post</button></div>)}
        <br></br>
        <div className='viewmyprojectshrline'></div>
        
        
        <div className='viewmyprojectdowncontainer'>
          <div className='viewmyprojectcontents' dangerouslySetInnerHTML={{ __html: modifiedHtml || "<p>hello</p> "}}></div>
          <div className='tableofcontentscontainer'>
            <br></br>
            <p className='viewmyprojecttableofcontents'>Table of contents</p>
            
            
              <div className='tableofcontentsinner'>
                {allblockquotes.map((blockquote, i) => (
                
                i==indextohighlight?(<a className='viewmyprojecttableelements' style={{color:"white"}} href={`#blockquote-${i + 1}`}>{blockquote}</a>):(<a className='viewmyprojecttableelements'  href={`#blockquote-${i + 1}`}>{blockquote}</a>)

                ))}
              
              
              </div>
              
            
          </div>

        </div>
        
      </div>
      
      
    ) : (
      <p>Loading...</p>
    )}
      
    </div>
  )
}
