import React from 'react'


class AddContact extends React.Component {

  state = {
    name: "",
    email: "",
  };

   add = (e) => {
       e.preventDefault();
       if(this.state.name === "" ||  this.state.email === ""){
           alert("All the Details are Mandatory!")
           return;
       }
       this.props.addContactHandler(this.state);
       this.setState({ name :"", email:""});

  }

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter the Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter the Email Address"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <button className="ui button blue"> Add </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddContact;