import React, { useState } from "react";
import ReactDOM from "react-dom";
import firebase from "../../services/firebase"
import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import admin from "firebase-admin"

class ResumeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        organization: '',
        email: '',
        message: ''};
  
      this.handleName = this.handleName.bind(this);
      this.handleOrganization = this.handleOrganization.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleMessage = this.handleMessage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleName(event) {
      this.setState({name: event.target.value});
    }
    handleOrganization(event) {
      this.setState({organization: event.target.value});
    }

    handleEmail(event) {
      this.setState({email: event.target.value});
    }

    handleMessage(event) {
      this.setState({message: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('Your Request was submitted');
      var count = 0;
      const db = getFirestore();
      try {
        count++;
        const docRef =  addDoc(collection(db, "requests"), {
          name : this.state.name,
          organization : this.state.organization,
          email : this.state.email,
          message : this.state.message
        });

        admin.firestore().collection('mail').add({
          to: 'makaziwem23@outlook.com',
          message: {
            subject: 'Hello from Firebase!',
            html: 'This is an <code>HTML</code> email body.',
          },
        })
        alert("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      event.preventDefault();
    }
  
    render() {

      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label>
            <p>Name</p>
            </label>
            <input type="text" name="name" value={this.state.name} required="true" onChange={this.handleName} />
            </div>
            <br/>
            <div className="form-group">
            <label>
            <p>Organization</p>
            </label>
            <input type="text" name="organization" value={this.state.organization} required="true" onChange={this.handleOrganization} />
            </div>
            <br/>
            <div className="form-group">
            <label>
            Email
            <input type="email" name="email" value={this.state.email} required="true" onChange={this.handleEmail} />
          </label>
          </div>
          <br/>
          <div className="form-group">
          <label>
            Message
            <textarea name="message" value={this.state.message} required="true" onChange={this.handleMessage} />
          </label>
          </div>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <ResumeForm />,
    document.getElementById('root')
  );
  
  export default ResumeForm;