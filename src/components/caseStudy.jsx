import './caseStudy.css'
import img8 from '../assets/image8.jpg';
import img9 from '../assets/image9.png';
import img10 from '../assets/image10.png';

function CSCard({img, id, title, des}){
    return (
        <div className='cscdcontainer'>
            <div className='csImg'>
                <img
            src={img}
            alt= {title}
            />
            </div>
            <div className='csH'>
                <h1>0{id}</h1>
                <div className='cstitledes'>
                    <h2>{title}</h2>
                    <p>{des}</p>
                    <button>View Case Study <i class="ri-arrow-right-long-line"></i></button>
                </div>
            </div>
        </div>
    )
}

const card3 = [
    {
        id:1,
        img: img8,
        title: "Dedicated Criminal Defense with a Human Touch",
        des: "We provide aggressive defense while ensuring our clients feel heard, supported, and confident throughout the process."
    },
    {
        id:2,
        img: img9,
        title: "A Family's Fight for Justice: Their Legal Odyssey",
        des: "From complex disputes to emotional challenges, we stood by the family and delivered the justice they deserved."
    },
    {
        id:3,
        img: img10,
        title: "Defending Justice: A Family's Legal Journey",
        des: "We successfully defended our client's rights and secured a favorable outcome in a complex legal battle"
    }
]

function CaseStudy(){
    return (
        <div className='caseContainer'>
            <h3 className='folder'><i class="ri-folder-4-line"></i> CASE STUDY ----</h3>
            <div className='CStext'>
                <div className='CSh1'>
                    <h1>Tailored for <span>Legal</span> Practices In</h1>
                <h1>Injury Law And Traffic Defense</h1>
                </div>
                <div className='CSArrow'>
                    <i class="ri-arrow-left-line"></i>
                    <i class="ri-arrow-right-line"></i>
                </div>
            </div>
            <div className='CSpara'>
                <p>Explore how our strategic legal solutions have delivered real results</p>
                <p> and made a difference in our clients' lives.</p>
            </div>
            <div className='csDiv' >
               {card3.map((card) => (
                <CSCard
                key={card.id}
                id={card.id}
                title={card.title}
                img={card.img}
                des={card.des}
                />
               ))}
            </div>
        </div>
    )
}

export default CaseStudy;