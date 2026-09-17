import './popup.css'


function PopUp({ onClose }){
    return (
        <div className='overlay'>
            <div className='popupContainer'>
            <div className='popup'>
                <button className='closeBtn'
                onClick={onClose}
                >X</button>
            </div>
            <div className='popupText'>
                <h3>First Name</h3>
                <input type='text' placeholder='Enter your First Name'/>
                <h3>Last Name</h3>
                <input type='text' placeholder='Enter your last name'/>
                <h3>Mobile number</h3>
                <input type='Number' placeholder='Enter your phone number'/>
                <h3>Call Timing</h3>
                <input type='time'/>
                <h3>Call Date </h3>
                <input type='Date'/>
            </div>
            </div>
        </div>
    )
}

export default PopUp