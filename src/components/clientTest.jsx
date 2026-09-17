import './clientTest.css';
import img11 from '../assets/image11.png';
import img9 from '../assets/image9.png'
import { useState } from 'react';

function Card4({img1, img2, heading, title, des, name, role, }){
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className='ctCards'>
            <div className='ctcImg'>
                <img
                src={img1}
                />
            </div>
            <div className='ctctext'>
                <h4>{heading}</h4>
                <h1>{title}</h1>
                &nbsp;
                <p>{des}</p>
            
            <div className='ctcReview'>
                <div className='ctcUserReview'>
                    <div>
                        <img src={img2}/>
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <p>{role}</p>
                        <div className='ctcRating'>
                            {[1,2,3,4,5].map((star) => (
                                <button
                                key={star}
                                className={
                                    star <= (hover || rating) ? "star active" : "star" 
                                }
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(0)}
                                aria-label={`Rate ${star} stars`}
                                ><i class="ri-star-line"></i></button>
                            ))}
                            
                        </div>
                    </div>
                </div>
                <div className='ctcbtn'>
                    <button><i class="ri-arrow-left-fill"></i></button>
                    <button><i class="ri-arrow-right-fill"></i></button>
                </div>
            </div>
            </div>
        </div>
    )
}
const cards4 = [
    {
        id:1,
        img1: img11,
        img2: img9,
        heading: "Client Testinomials",
        title: "What Our Clients Say",
        des: "I was struggling with family law for months before I found abc. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again. Their team is incredibly knowledgeable and patient, and they always go the extra mile to ensure customer satisfaction. I am so grateful for their help and would recommend them to anyone.",
        name:"William Hazelip",
        role:"ui/ux developer",

    }
]

function ClientTest(){
    
    return (
       <div className='ctContainer'>
        {cards4.map((item) => (
            <Card4
            key={item.id}
            img1={item.img1}
            img2={item.img2}
            heading={item.heading}
            title={item.title}
            des={item.des}
            name={item.name}
            role={item.role}
            />
        ))}
       </div>

    )
}

export default ClientTest