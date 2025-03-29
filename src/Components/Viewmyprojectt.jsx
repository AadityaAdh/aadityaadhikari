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
      shortdescription:"An e-commerce website for seamless shopping and management of detergent products.",
      overview:"Prativa Chemicals is an e-commerce platform designed to streamline the shopping and management of detergent products. It provides users with an intuitive shopping experience while offering business owners powerful management tools. The platform supports secure transactions, user authentication, and order tracking, ensuring a seamless shopping experience.",
      fulldescription:"Prativa Chemicals is a complete e-commerce solution catering to detergent products. Built using the MERN stack, the website provides a smooth and efficient shopping experience for customers while enabling administrators to manage inventory, process orders, and track deliveries. The platform integrates a secure payment gateway to ensure safe transactions. Users can browse products, add them to the cart, and complete purchases with ease. The admin dashboard allows business owners to monitor sales, update inventory, and analyze customer data for better decision-making. The platform is designed to be scalable and responsive, making it accessible across devices. Additional features like user authentication, product filtering, and order history enhance the overall usability of the platform.",
      projectgoals:"The primary goal of this project was to develop a user-friendly e-commerce platform that allows users to browse, purchase, and manage detergent products efficiently. Key objectives included integrating a secure payment gateway, implementing an intuitive UI/UX, enabling seamless inventory and order management for business owners, and ensuring responsiveness for accessibility on all devices.",
      techstack:"MongoDB, Express.js, React.js, Node.js",
      features:[{
          featuretitle:"Key Features",
          featurepoints:["User authentication and authorization","Secure online payments","Real-time order tracking","Responsive and dynamic UI","Admin dashboard for inventory management","Product filtering and search functionality","Order history and user profiles"]
      }],
      challenges:"During the development process, integrating secure payment gateways posed a significant challenge due to compliance and security concerns. Ensuring the website remained fully responsive across different devices required extensive testing and optimization. Managing real-time order tracking efficiently while maintaining performance was another critical hurdle. Additionally, handling large-scale data efficiently in MongoDB while maintaining fast query execution required database indexing and optimization.",
      learningandtakeaways:"This project provided hands-on experience in full-stack development with the MERN stack. Key takeaways include improved proficiency in state management, API development, and handling authentication securely. Additionally, it reinforced best practices for optimizing performance, database indexing, and maintaining a responsive user interface for e-commerce applications.",
      link:"https://prativachemicals.netlify.app"
  },
  {
      title:"Airline Reservation System",
      tools:["PHP","JS","HTML","MySQL"],
      imagelink:"Airlinereservation.png",
      shortdescription:"An efficient system for booking and managing airline reservations.",
      overview:"The Airline Reservation System is a web-based application that allows users to book and manage airline tickets conveniently. It enables passengers to search for flights, reserve seats, and make online payments. The system also provides an admin panel for airline operators to manage flight schedules, ticket pricing, and customer bookings.",
      fulldescription:"This project was developed to create a streamlined airline booking experience. Users can search for flights based on destinations, dates, and seat preferences. Once booked, they receive digital tickets that can be managed through their accounts. The system automates seat allocation and pricing while providing airline operators with an intuitive dashboard for handling reservations and customer inquiries. Secure payment processing is implemented to ensure safe transactions, and the system also features email notifications for confirmed bookings. The UI is designed to be user-friendly, providing both customers and administrators with a seamless experience.",
      projectgoals:"The main goal was to provide a digital solution for airline reservations that simplifies the booking process and minimizes errors. Key objectives included ensuring real-time seat availability, integrating secure payments, developing an easy-to-use admin dashboard for airline staff, and automating email confirmations for customer bookings.",
      techstack:"PHP, JavaScript, HTML, MySQL",
      features:[{
          featuretitle:"Key Features",
          featurepoints:["User-friendly flight search and booking system","Secure online payment integration","Automated seat allocation","Admin panel for flight and booking management","Email notifications for confirmed bookings","User account management for ticket history","Real-time seat availability tracking"]
      }],
      challenges:"Handling real-time seat availability was a complex task that required implementing database optimizations and transaction locks to prevent double booking. Integrating a secure payment system while ensuring data privacy and security was a major challenge due to encryption and fraud prevention requirements. Designing a responsive and intuitive UI for both users and administrators required careful planning to ensure accessibility and ease of use.",
      learningandtakeaways:"This project strengthened my understanding of backend development with PHP and MySQL. I gained valuable experience in handling real-time data updates, securing online transactions, and implementing database optimization techniques for performance improvements. Additionally, I learned the importance of designing a UI that caters to both end-users and administrators efficiently.",
      link:"https://github.com/AadityaAdh/Airline_Reservation_system"
  },
  {
      title:"Face Recognition System",
      tools:["TensorFlow", "Python", "OpenCV", "Mongo"],
      imagelink:"Facerecognition.jpg",
      shortdescription:"A Face Recognition System that accurately identifies individuals for secure authentication and attendance management.",
      overview:"This project focuses on implementing a deep learning-based face recognition system for authentication and attendance tracking. It utilizes advanced computer vision techniques to identify individuals with high accuracy, making it suitable for security and monitoring applications.",
      fulldescription:"The Face Recognition System is designed to identify and verify individuals based on facial features. It leverages convolutional neural networks (CNNs) trained on a large dataset to ensure accurate recognition. The system can be used in various scenarios, including automated attendance tracking, access control, and identity verification. OpenCV is utilized for real-time face detection, while TensorFlow powers the deep learning model. MongoDB is used to store user profiles and authentication data securely.",
      projectgoals:"The goal was to develop an accurate and efficient face recognition system for real-world applications. Objectives included training a high-precision model, optimizing real-time performance, and implementing robust security measures to prevent spoofing attacks and unauthorized access.",
      techstack:"TensorFlow, Python, OpenCV, MongoDB",
      features:[{
          featuretitle:"Key Features",
          featurepoints:["Real-time face detection and recognition","Secure authentication system","Automated attendance tracking","Database integration for storing user profiles","High-accuracy deep learning model","Spoofing detection mechanism","Scalability for large datasets"]
      }],
      challenges:"Training the model to achieve high accuracy while maintaining performance in real-time was challenging. Handling variations in lighting, occlusions, and facial expressions required extensive data preprocessing and augmentation. Implementing a secure system to prevent spoofing attempts, such as using anti-spoofing techniques, was another key challenge.",
      learningandtakeaways:"This project provided valuable insights into deep learning for computer vision. I gained experience in training CNNs for facial recognition, optimizing real-time performance, and implementing security features such as anti-spoofing techniques. The project reinforced my understanding of integrating AI models with real-world applications and database storage solutions.",
      link:"https://prativachemicals.netlify.app"
  },
  {
    title:"Traffic Sign Recognition",
    tools:["TensorFlow","Python","OpenCV"],
    imagelink:"TrafficSignRecognition.png",
    shortdescription:"A deep learning-based system that identifies and classifies traffic signs in real-time.",
    overview:"Traffic Sign Recognition is a deep learning-based system that accurately identifies and classifies traffic signs using convolutional neural networks (CNNs). It is designed for real-time applications such as autonomous vehicles and driver assistance systems, ensuring safety on the road.",
    Fulldescription:"This project utilizes deep learning to recognize and classify traffic signs from images. A convolutional neural network (CNN) was trained on a labeled dataset of traffic signs to achieve high accuracy in classification. The model processes input images, detects traffic signs, and categorizes them into their respective classes. OpenCV was used for image preprocessing, including resizing, normalization, and augmentation. The system can be integrated into real-world applications like self-driving cars, traffic monitoring, and road safety enhancements.",
    projectgoals:"The goal was to develop a real-time traffic sign recognition system capable of accurately classifying traffic signs. Objectives included training a deep learning model to achieve high accuracy, optimizing the system for real-time inference, and ensuring robustness against variations in lighting and environmental conditions.",
    techstack:"TensorFlow, Python, OpenCV",
    Features:[{
        featuretitle:"Key Features",
        featurepoints:["Real-time traffic sign detection and classification","High-accuracy CNN model","Preprocessing with OpenCV for enhanced recognition","Supports multiple classes of traffic signs","Optimized for real-time inference","Can be integrated into autonomous driving systems"]
    }],
    Challenges:"One major challenge was ensuring the model's robustness in real-world conditions, where lighting, occlusions, and camera angles vary significantly. Achieving high classification accuracy required extensive data augmentation and hyperparameter tuning. Additionally, optimizing the model for real-time performance without sacrificing accuracy was a key technical hurdle.",
    Learningandtakeaways:"This project strengthened my knowledge of deep learning for image classification and real-time inference optimization. I gained hands-on experience in dataset preprocessing, CNN model training, and performance tuning. The project also reinforced the importance of data augmentation techniques for improving model generalization.",
    link:"https://github.com/AadityaAdh/Traffic-Sign-Recognition"
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
            <a href={projectdata.link}>⛓️‍💥 Link</a>
            <br></br><br></br>


            

        </div>

        <div className="viewmyprojectbottomcontainer">
            <div className="viewmyprojectbottomleftcontainer">
            {Object.keys(projectdata).map((element, index) =>
  !["imagelink", "title", "shortdescription", "link","tools"].includes(element) ? (
    <div key={index}  className='viewmyprojectbottomleftitemscontainer'>
      <br></br>
      <h2 className='viewproject_heading'>&nbsp;&nbsp;&nbsp;{element}</h2>
      {element !== "features" ? (
        <p className='viewproject_element_description'>{projectdata[element]}</p>
      ) : (
        projectdata[element].map((features, featuresindex) => (
          <div key={featuresindex}>
            <h3>{features.featuretitle}</h3>
            <ul className='viewproject_element_description'>
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
                <p className='viewmyprojects_table'>Table of contents</p>
                {
                    Object.keys(projectdata).filter(checknonrequiredindexfortableofindex).map((mykey,index)=>(
                        index==indextohighlight?(<p className='viewprojects_table_keys' onClick={()=>focusme(index)} style={myhighlightstyle}>{mykey}<br></br><br></br></p>):(<p className='viewprojects_table_keys' onClick={()=>focusme(index)}>{mykey}<br></br><br></br></p>)
                        
                    ))
                }
                
            </div>
        </div>
        
        
      
    </div>
  )
}
