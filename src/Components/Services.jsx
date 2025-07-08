import './Services.css'
import { SiApachespark } from "react-icons/si";
import { SiApacheairflow } from "react-icons/si";
import { SiScrapy } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { PiCylinderThin } from "react-icons/pi";
import { SiTensorflow } from "react-icons/si";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Marquee from "react-fast-marquee";










export default function Services() {
    const navigate = useNavigate();



    const data = [
        {
            title: "Pyspark",
            summary: "I can build pyspark app for you",
            icon: <SiApachespark />,
            classname: "icon-ppyspark"

        },
        {
            title: "Airflow",
            summary: "Pipeline orchestrate i can do for you",
            icon: <SiApacheairflow />,
            classname: "icon-aairflow"

        },
        {
            title: "Web scraping",
            summary: "Webscraping i can do for you",
            icon: <SiScrapy />,
            classname: "icon-wwebscraping"

        },
        {
            title: "Web sites",
            summary: "Build basic full stack app for you",
            icon: <TbWorldWww />,
            classname: "icon-wwebsites"

        },
        {
            title: "Image Recognition",
            summary: "Basic Image recognition app for you",
            icon: <SiTensorflow />,
            classname: "icon-ttensorflow"
        },
        {
            title: "Date Pipeline",
            summary: "Data pipeline for you",
            icon: <PiCylinderThin />,
            classname: "icon-ppipeline"
        }





    ]


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('displaylefttorightanimation');
                }
            });
        });
        const allhereobserver = document.querySelectorAll('.hereleftobserver');
        allhereobserver.forEach((el) => observer.observe(el));




    }, []);
    return (
        <div className='servicescontainer'>
            <div className="servicesupcontainer">
                <h1>Services</h1>
                <p onClick={() => navigate('/contact')}>Contact Me →</p>

            </div>
            <br></br>

            <div className="servicesmiddlecontainer">
                <Marquee gradient={false} speed={50} className='marq'>
                    <span>Python</span>
                    <span >Java Script</span>
                    <span >Airflow</span>
                    <span>Pyspark</span>
                    <span>Selenium</span>
                    <span>Docker</span>
                    <span>HDFS</span>
                    <span>C++</span>
                    <span>Python</span>
                    <span >Java Script</span>
                    <span >Airflow</span>
                    <span>Pyspark</span>
                    <span>Selenium</span>
                    <span>Docker</span>
                    <span>HDFS</span>
                    <span>C++</span>
                    


                </Marquee>

            </div>







            <br></br>


            <div className='servicesdowncontainer'>


                {data.map((element, index) => (
                    <div class="book hereleftobserver">
                        <p>{element.summary}</p>
                        <div class="cover">
                            <div className="servicelogocontainer"><p className={element.classname}>{element.icon}</p></div>


                            <p className='servicetitle'>{element.title}</p>
                        </div>
                    </div>

                ))}



            </div>

        </div>
    )
}
