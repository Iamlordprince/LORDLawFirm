import '../components/home.css';
import img from '../assets/image1.jpg';
import { useState } from 'react';
import PopUp from './popup'

function Home() {
    const [popup, setPopup] = useState(false);
    return (
        <div className="homeContainer">

            <div className="text">

                <div className="forSpace">

                    <h3>
                        Justice. Integrity. Results
                    </h3>

                    <h1>
                        Your Rights.
                    </h1>

                    <h1>
                        Our <span>Responsibility.</span>
                    </h1>

                    <p>
                        At Veritas Law Partners, we stand by you with
                    </p>

                    <p>
                        expert legal guidance and relentless advocacy.
                    </p>

                    <div className="btn">

                        <button onClick={() => setPopup(true)} className="freeCase">
                            Free Case Consultation
                            <i className="ri-arrow-right-up-line"></i>
                        </button>

                        <button onClick={() => {
        document.querySelector(".serviceContainer").scrollIntoView({
            behavior: "smooth"
        });
    }} className="explore">
                            Explore Our Services
                            <i className="ri-arrow-right-up-line"></i>
                        </button>

                    </div>
                    <div className='detail'>
                        <div>
                            <h2>15+</h2><p>Years of Experinece</p>
                        </div>
                         <div className="line"></div>
                        <div>
                            <h2>1000+</h2><p>Cases Handled</p>
                        </div>
                         <div className="line"></div>
                        <div>
                            <h2>98%</h2><p>Client Satisfication</p>
                        </div>
                    </div>
                </div>
                <img
                    className="forImg"
                    src={img}
                    alt="Lady Justice"
                />

            </div>
            <div className='lastPart'>
                <div className='one'>
                    <div>
                    <i class="ri-user-line"></i>
                </div>
                <div>
                    <h3>Expert Legal</h3> 
                    <p>Seasoned lawyer with</p>
                    <p>domain expertise</p>
                </div>
                </div>
                <div className='two'>
                    <div>
                    <i class="ri-shield-check-line"></i>
                </div>
                <div>
                    <h3>Client-First Approach</h3>
                    <p>Your goals, our priority</p>
                </div>
                </div>
                <div className='three'>
                    <div>
                    <i class="ri-auction-line"></i>
                </div>
                <div>
                    <h3>Strategic Advocacy</h3>
                    <p>Smarter legal solutions</p>
                    <p>for better outcomes.</p>
                </div>
                </div>
                <div className='four'>
                    <div>
                    <i class="ri-bank-line"></i>
                </div>
                <div>
                    <h3>Trusted & Confidential</h3>
                    <p>Your privacy is always</p>
                    <p>protected with us</p>
                </div>
                </div>
                {popup && 
                <PopUp
                onClose={() => setPopup(false)}
                />}
            </div>
        </div>
    );
}

export default Home;