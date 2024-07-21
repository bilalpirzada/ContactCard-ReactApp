import React, {useState} from 'react';
import '../App.css';
 

const ContactCard = (props)=>{

    const [showAge, setShowAge] = useState(false);

    
    
    return    (
        <div className="contact-card">
            <img 
            src={props.avatarUrl} 
            alt="profile">
            </img>

            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={()=>{setShowAge(!showAge)}}>show age</button>
                {showAge && <p>Age: {props.age}</p>}
            </div>
        </div>
    )
}

export default ContactCard;