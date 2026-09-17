import './service.css';
import { useState } from 'react';

import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';
import img6 from '../assets/image6.jpg';
import img7 from '../assets/image7.jpg';


function Card({ title, description, img, icon }) {
    return (
        <div className="cardContainer">

            <img
                src={img}
                alt={title}
            />

            <i className={`cardIcon ${icon}`}></i>

            <h2>{title}</h2>

            <p>{description}</p>

            <button className="cardsbtn">
                Learn More
                <i className="ri-arrow-right-long-line"></i>
            </button>

        </div>
    );
}


function Card2({ icon, Num, des }) {
    return (
        <div className="card2Container">

            <i className={`cardIcon2 ${icon}`}></i>

            <h1>{Num}</h1>

            <p>{des}</p>

        </div>
    );
}


function Service() {

    const [startIndex, setStartIndex] = useState(0);


    // =========================
    // CARD DATA
    // =========================

    const cards = [
        {
            id: 1,
            img: img4,
            icon: "ri-criminal-line",
            title: "Criminal Defense",
            description:
                "Aggressive defense for your rights and freedom. We fight for the best possible outcome."
        },

        {
            id: 2,
            img: img5,
            icon: "ri-car-washing-line",
            title: "DUI Defense",
            description:
                "Experienced representation for DUI/DWI charges and license restoration."
        },

        {
            id: 3,
            img: img6,
            icon: "ri-shield-fill",
            title: "Domestic Violence",
            description:
                "Compassionate legal support and protection when you need it most."
        },

        {
            id: 4,
            img: img7,
            icon: "ri-home-5-fill",
            title: "Simple Possession",
            description:
                "Legal assistance for simple possession charges with a focus on the future."
        },

        {
            id: 5,
            img: img4,
            icon: "ri-scales-3-line",
            title: "Family Law",
            description:
                "Experienced legal guidance for family and personal legal matters."
        }
    ];


    // =========================
    // CARD 2 DATA
    // =========================

    const cards2 = [
        {
            id: 1,
            icon: "ri-scales-3-line",
            Num: "08+",
            des: "Years of Experience"
        },

        {
            id: 2,
            icon: "ri-shopping-bag-fill",
            Num: "1000+",
            des: "Cases Handled"
        },

        {
            id: 3,
            icon: "ri-team-line",
            Num: "98%",
            des: "Client Satisfaction"
        },

        {
            id: 4,
            icon: "ri-award-fill",
            Num: "15+",
            des: "Practice Areas"
        },

        {
            id: 5,
            icon: "ri-shield-check-fill",
            Num: "24/7",
            des: "Client Support"
        }
    ];


    // =========================
    // NEXT BUTTON
    // =========================

    const nextCards = () => {

        setStartIndex((prev) => {

            return (prev + 1) % cards.length;

        });

    };


    // =========================
    // PREVIOUS BUTTON
    // =========================

    const prevCards = () => {

        setStartIndex((prev) => {

            return (prev - 1 + cards.length) % cards.length;

        });

    };


    // =========================
    // GET 4 VISIBLE CARDS
    // =========================

    const visibleCards = Array.from(
        { length: 4 },
        (_, index) => {

            return cards[
                (startIndex + index) % cards.length
            ];

        }
    );


    return (

        <div className="serviceContainer">


            {/* =========================
                TOP TITLE
            ========================= */}

            <div className="Supper">

                <i className="ri-scales-line"></i>

                <h3>
                    -- OUR BEST OF SERVICE --
                </h3>

            </div>


            {/* =========================
                HEADING
            ========================= */}

            <div className="Sh1">

                <h1>
                    What People Say About
                </h1>

                <h1>
                    Our <span>Legal Practice Area</span>
                </h1>

            </div>


            {/* =========================
                DESCRIPTION
            ========================= */}

            <div className="Spara">

                <p>
                    We provide strategic legal solutions tailored
                    to your unique needs with
                </p>

                <p>
                    dedication, integrity, and proven results.
                </p>

            </div>


            {/* =========================
                CARD SLIDER
            ========================= */}

            <div className="cardSlider">


                {/* LEFT BUTTON */}

                <button
                    className="sliderBtn leftBtn"
                    onClick={prevCards}
                >

                    <i className="ri-arrow-left-line"></i>

                </button>


                {/* CARDS */}

                <div className="cards">

                    {visibleCards.map((card, index) => (

                        <Card
                            key={`${card.id}-${index}`}
                            title={card.title}
                            description={card.description}
                            img={card.img}
                            icon={card.icon}
                        />

                    ))}

                </div>


                {/* RIGHT BUTTON */}

                <button
                    className="sliderBtn rightBtn"
                    onClick={nextCards}
                >

                    <i className="ri-arrow-right-line"></i>

                </button>


            </div>


            {/* =========================
                STATISTICS CARDS
            ========================= */}

            <div className="sLast">

                {cards2.map((card) => (

                    <Card2
                        key={card.id}
                        icon={card.icon}
                        Num={card.Num}
                        des={card.des}
                    />

                ))}

            </div>


        </div>

    );
}


export default Service;