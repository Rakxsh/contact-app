import React from 'react'


const ContactCard = (props) => {

    const {id, name, email} = props.contact;
    return (
      <div className="item">
        <img
          className="ui avatar image"
          src="https://image.shutterstock.com/image-vector/man-icon-flat-vector-260nw-1371568223.jpg"
          alt="user"
        />
        <div className="content">
          <div className="Header">{name}</div>
          <div>{email}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={()=>props.clickHandler(id)}
        ></i>
      </div>
    );
}
export default ContactCard;