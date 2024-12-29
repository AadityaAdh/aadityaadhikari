import React, { useEffect, useState } from 'react'
import './Viewmyprojectt.css'

//use filter function for array instead as
/*
Object.entries(projectdata)
            .filter(([key]) => !["imagelink", "title", "shortdescription", "link"].includes(key))
            .map(([key, value], index) => (
              <div key={index}>
                <h3>{key}</h3>
                {renderContent(key, value)}
              </div>


*/


export default function Viewmyprojectt(props) {
    const [projectdata, setProjectdata] = useState({});

    const[indextohighlight,setindextohighlight]=useState(0);
    const[myhighlightstyle,setmyhighlightstyle]=useState({color:"green"});
    const [scrolled,setscrolled]=useState(false); //matlab chai xaina change garna lai matrai garya ho



    const projectsdata=[{
        title:"Prativa Chemicals Mern Stack",
        tools:["React","Node","Express","Mongo"],
        imagelink:"PrativaChemicals.png",
        shortdescription:"A good  prativa chemicals website website",
        overview:"someoverview for prativa chemicals",
        fulldescription:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque inventore. Expedita totam ducimus sequi itaque delectus, autem natus eius aliquid veritatis molestiae qui! Iste obcaecati quae distinctio at harum!",
        projectgoals: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem nulla in libero veniam. Neque quibusdam assumenda qui, perferendis aspernatur voluptatum eos delectus sit. Consequatur nesciunt fugit quia culpa! Cum!" ,
        techstack:"HTML,CSS description",
        features:[{featuretitle:"some title",featurepoints:["point1","point2","point3"]}],
        challenges: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nobis consequatur molestias cupiditate soluta minus eum exercitationem aliquid! Repellendus quae quia commodi provident facere odio consequuntur omnis asperiores et odit? " ,
        learningandtakeaways: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eum repellat! Atque est cupiditate placeat ab ad voluptate amet blanditiis molestiae explicabo, voluptatem consequuntur repellat at facere nulla quia. Deleniti. ",
        link:"https://prativachemicals.netlify.app"
    },
    {
      title:"Airline Reservation System",
      tools:["PHP","JS","HTML","MySQL"],
      imagelink:"Airlinereservation.png",
      shortdescription:"A good  lufthansa website website",
      overview:"someoverview for lufthansa",
      fulldescription:  " airline Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque inventore. Expedita totam ducimus sequi itaque delectus, autem natus eius aliquid veritatis molestiae qui! Iste obcaecati quae distinctio at harum!",
      projectgoals: " airline Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem nulla in libero veniam. Neque quibusdam assumenda qui, perferendis aspernatur voluptatum eos delectus sit. Consequatur nesciunt fugit quia culpa! Cum!" ,
      techstack:"HTML,CSS description",
      features:[{featuretitle:"some title",featurepoints:["point1","point2","point3"]}],
      challenges: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nobis consequatur molestias cupiditate soluta minus eum exercitationem aliquid! Repellendus quae quia commodi provident facere odio consequuntur omnis asperiores et odit? " ,
      learningandtakeaways: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eum repellat! Atque est cupiditate placeat ab ad voluptate amet blanditiis molestiae explicabo, voluptatem consequuntur repellat at facere nulla quia. Deleniti. ",
      link:"https://prativachemicals.netlify.app"
  },
  {
    title:"Prativa Chemicals Mern Stack",
    tools:["React","Node","Express","Mongo"],
    imagelink:"PrativaChemicals.png",
    shortdescription:"A good  prativa chemicals website website",
    overview:"someoverview for prativa chemicals",
    fulldescription:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque inventore. Expedita totam ducimus sequi itaque delectus, autem natus eius aliquid veritatis molestiae qui! Iste obcaecati quae distinctio at harum!",
    projectgoals: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem nulla in libero veniam. Neque quibusdam assumenda qui, perferendis aspernatur voluptatum eos delectus sit. Consequatur nesciunt fugit quia culpa! Cum!" ,
    techstack:"HTML,CSS description",
    features:[{featuretitle:"some title",featurepoints:["point1","point2","point3"]}],
    challenges: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nobis consequatur molestias cupiditate soluta minus eum exercitationem aliquid! Repellendus quae quia commodi provident facere odio consequuntur omnis asperiores et odit? " ,
    learningandtakeaways: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eum repellat! Atque est cupiditate placeat ab ad voluptate amet blanditiis molestiae explicabo, voluptatem consequuntur repellat at facere nulla quia. Deleniti. ",
    link:"https://prativachemicals.netlify.app"
},
{
  title:"Prativa Chemicals Mern Stack",
  tools:["React","Node","Express","Mongo"],
  imagelink:"PrativaChemicals.png",
  shortdescription:"A good  prativa chemicals website website",
  overview:"someoverview for prativa chemicals",
  fulldescription:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque inventore. Expedita totam ducimus sequi itaque delectus, autem natus eius aliquid veritatis molestiae qui! Iste obcaecati quae distinctio at harum!",
  projectgoals: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem nulla in libero veniam. Neque quibusdam assumenda qui, perferendis aspernatur voluptatum eos delectus sit. Consequatur nesciunt fugit quia culpa! Cum!" ,
  techstack:"HTML,CSS description",
  features:[{featuretitle:"some title",featurepoints:["point1","point2","point3"]}],
  challenges: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nobis consequatur molestias cupiditate soluta minus eum exercitationem aliquid! Repellendus quae quia commodi provident facere odio consequuntur omnis asperiores et odit? " ,
  learningandtakeaways: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eum repellat! Atque est cupiditate placeat ab ad voluptate amet blanditiis molestiae explicabo, voluptatem consequuntur repellat at facere nulla quia. Deleniti. ",
  link:"https://prativachemicals.netlify.app"
},
{
  title:"Prativa Chemicals Mern Stack",
  tools:["React","Node","Express","Mongo"],
  imagelink:"PrativaChemicals.png",
  shortdescription:"A good  prativa chemicals website website",
  overview:"someoverview for prativa chemicals",
  fulldescription:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque inventore. Expedita totam ducimus sequi itaque delectus, autem natus eius aliquid veritatis molestiae qui! Iste obcaecati quae distinctio at harum!",
  projectgoals: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem nulla in libero veniam. Neque quibusdam assumenda qui, perferendis aspernatur voluptatum eos delectus sit. Consequatur nesciunt fugit quia culpa! Cum!" ,
  techstack:"HTML,CSS description",
  features:[{featuretitle:"some title",featurepoints:["point1","point2","point3"]}],
  challenges: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nobis consequatur molestias cupiditate soluta minus eum exercitationem aliquid! Repellendus quae quia commodi provident facere odio consequuntur omnis asperiores et odit? " ,
  learningandtakeaways: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eum repellat! Atque est cupiditate placeat ab ad voluptate amet blanditiis molestiae explicabo, voluptatem consequuntur repellat at facere nulla quia. Deleniti. ",
  link:"https://prativachemicals.netlify.app"
},
{
  title:"Prativa Chemicals Mern Stack",
  tools:["React","Node","Express","Mongo"],
  imagelink:"PrativaChemicals.png",
  shortdescription:"A good  prativa chemicals website website",
  overview:"someoverview for prativa chemicals",
  fulldescription:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque inventore. Expedita totam ducimus sequi itaque delectus, autem natus eius aliquid veritatis molestiae qui! Iste obcaecati quae distinctio at harum!",
  projectgoals: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem nulla in libero veniam. Neque quibusdam assumenda qui, perferendis aspernatur voluptatum eos delectus sit. Consequatur nesciunt fugit quia culpa! Cum!" ,
  techstack:"HTML,CSS description",
  features:[{featuretitle:"some title",featurepoints:["point1","point2","point3"]}],
  challenges: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nobis consequatur molestias cupiditate soluta minus eum exercitationem aliquid! Repellendus quae quia commodi provident facere odio consequuntur omnis asperiores et odit? " ,
  learningandtakeaways: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eum repellat! Atque est cupiditate placeat ab ad voluptate amet blanditiis molestiae explicabo, voluptatem consequuntur repellat at facere nulla quia. Deleniti. ",
  link:"https://prativachemicals.netlify.app"
},
{
  title:"Prativa Chemicals Mern Stack",
  tools:["React","Node","Express","Mongo"],
  imagelink:"PrativaChemicals.png",
  shortdescription:"A good  prativa chemicals website website",
  overview:"someoverview for prativa chemicals",
  fulldescription:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eaque inventore. Expedita totam ducimus sequi itaque delectus, autem natus eius aliquid veritatis molestiae qui! Iste obcaecati quae distinctio at harum!",
  projectgoals: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem nulla in libero veniam. Neque quibusdam assumenda qui, perferendis aspernatur voluptatum eos delectus sit. Consequatur nesciunt fugit quia culpa! Cum!" ,
  techstack:"HTML,CSS description",
  features:[{featuretitle:"some title",featurepoints:["point1","point2","point3"]}],
  challenges: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, nobis consequatur molestias cupiditate soluta minus eum exercitationem aliquid! Repellendus quae quia commodi provident facere odio consequuntur omnis asperiores et odit? " ,
  learningandtakeaways: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, eum repellat! Atque est cupiditate placeat ab ad voluptate amet blanditiis molestiae explicabo, voluptatem consequuntur repellat at facere nulla quia. Deleniti. ",
  link:"https://prativachemicals.netlify.app"
}
    

    
    
    
]

useEffect(()=>{
    async function fetchhtmldata() {
        for(let i=0;i<projectsdata.length;i++){
            if(projectsdata[i].title==props.title){
    
                setProjectdata(projectsdata[i]);
                break;
            }
        }
        
    }
    fetchhtmldata()
    
    
    
},[])

const handlescroll=()=>{
        setscrolled(!scrolled)
}
window.addEventListener('scroll',handlescroll)

useEffect(()=>{
    allitems.forEach((items,index)=>{
        let topbatakatiscrollvayo=window.scrollY;
        let parentbatakatitalaxa=items.offsetTop;
        let aafnototalheight=items.offsetHeight;
        console.log("hello")
        
        

        if(topbatakatiscrollvayo>=parentbatakatitalaxa&&topbatakatiscrollvayo<parentbatakatitalaxa+aafnototalheight){
            setindextohighlight(index);
            console.log(index)

            
        }


    })

},[scrolled])
let allitems=document.querySelectorAll('.viewmyprojectbottomleftitemscontainer');
let maindiv=document.querySelector('.viewmyprojectbottomcontainer');

function checknonrequiredindexfortableofindex(keys){
    return !["imagelink","shortdescription","link","tools","title"].includes(keys);
}

function focusme(index){
  
  window.scrollTo(0,0);
  let x=allitems[index].offsetTop;
  window.scrollTo(0,x+1)


}
  
  



  return (
    <div className='viewmyprojecttcontainer' >

        <div className="viewmyprojectimagecontainer">
            <img src={projectdata.imagelink}></img>
        </div>

        <div className="viewmyprojecttitlecontainer">
            <h1>{projectdata.title}</h1>
            <p>{projectdata.shortdescription}</p>
            <a href={projectdata.link}>Link</a>


            

        </div>

        <div className="viewmyprojectbottomcontainer">
            <div className="viewmyprojectbottomleftcontainer">
            {Object.keys(projectdata).map((element, index) =>
  !["imagelink", "title", "shortdescription", "link","tools"].includes(element) ? (
    <div key={index}  className='viewmyprojectbottomleftitemscontainer'>
      <h1>&nbsp;&nbsp;&nbsp;{element}</h1>
      {element !== "features" ? (
        <p>{projectdata[element]}</p>
      ) : (
        projectdata[element].map((features, featuresindex) => (
          <div key={featuresindex}>
            <h2>{features.featuretitle}</h2>
            <ul>
              {features.featurepoints.map((point, pointindex) => (
                <li key={pointindex}>{point}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  ) : null
)}

            </div>
            <div className='viewmyprojectbottomrightcontainer'>
                <h1>Table of contents</h1>
                {
                    Object.keys(projectdata).filter(checknonrequiredindexfortableofindex).map((mykey,index)=>(
                        index==indextohighlight?(<h2 onClick={()=>focusme(index)} style={myhighlightstyle}>{mykey}</h2>):(<h2 onClick={()=>focusme(index)}>{mykey}</h2>)
                        
                    ))
                }
            </div>
        </div>
        
        
      
    </div>
  )
}
