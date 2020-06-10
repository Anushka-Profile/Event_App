import React from 'react';


const Header =(props) =>{
    const {noOfEvents}=props;
    return(
        <h5 className="bg bg-warning " style={{
            height:"50px",
            fontSize: '25px'
        }}>
            <span className="m-2 p-3">Event List</span>
            <span className="badge badge-pill badge-secondary m-2 float-right">
            Total Events: &nbsp;
            <span className="badge badge-pill badge-light">
                {noOfEvents}
            </span>
        </span>
        </h5>

    )
}

export default Header;