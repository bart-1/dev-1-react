
import React from 'react';
import './TxtInfo.css';


const TxtInfo = (props) => {


    return (

        <div  className="infoBox" >
            <h4>{props.h}</h4>
            <p>{props.t}</p>
        </div>
    )
}

export default TxtInfo;
