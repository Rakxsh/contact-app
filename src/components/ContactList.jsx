import React from "react";
import ContactCard from "./ContactCard";

const AddContact = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContactHandler}
      ></ContactCard>
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
};
export default AddContact;
