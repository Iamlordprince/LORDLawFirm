import { useState } from 'react';
import '../components/navBar.css'
import 'remixicon/fonts/remixicon.css'
import PopUp from './popup'

function NavBar(){
    const [popup, setPopup] = useState(false);
    return (
       <div className='navContainer'>
        <div className='navfirst'>
            <div className='one-first'>
                <div className='temp'>
                <i class="ri-map-pin-line"></i><p>Hazratganj, Lucknow, Uttar Pradesh 226001</p>
                </div>
                <div className='temp'>   
                <i class="ri-phone-line"></i><p>+91 98765 43210</p>
                </div>
                <div className='temp'> 
                <i class="ri-mail-line"></i><p>contact@veritasalegal.in</p>
                </div>
            </div>
            <div className='one-second'>
                

            </div>
            <div className='one-third'>
                <div className='temp1'>
                    <i class="ri-time-line"></i><p>Mon-Sat: 9:30 AM - 6:30 PM</p>
                </div>
                <i class="ri-linkedin-line"></i>
                <i class="ri-facebook-line"></i>
                <i class="ri-twitter-x-line"></i>
            </div>
        </div>
        <div className='navsecond'>
            <div className='logo-div'>
                <img
                className='logo'
                src='https://cssfounder.us/css106/theme/professional-services/law-firm/05/img/logo.png'
                />
            </div>
            <div className='butons'>
                <button
    onClick={() => {
        document.querySelector(".homeContainer").scrollIntoView({
            behavior: "smooth"
        });
    }}
>
    Home
</button>

<button
    onClick={() => {
        document.querySelector(".aboutContainer").scrollIntoView({
            behavior: "smooth"
        });
    }}
>
    About us
</button>

<button
    onClick={() => {
        document.querySelector(".serviceContainer").scrollIntoView({
            behavior: "smooth"
        });
    }}
>
    Services
</button>
                <button>Our Partner</button>
                <button>FAQ's</button>
                <button>Career</button>
                <button>News Media</button>
            </div>
            <div className='last'>
                <button 
                onClick={() => window.location.href = "contact@veritasalegal.in"}
                className='contactus'>Contact us</button>
                <button onClick={() => setPopup(true)} className='free'>Free Case Consultation</button>
                {popup && (
                    <PopUp
                    onClose={() => setPopup(false)}
                    />
                )}
            </div>
        </div>
       </div>
    )
}

export default NavBar;