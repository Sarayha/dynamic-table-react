import React, { useState } from 'react';
import './App.css';
import data from './mock-data.json';
import {nanoid} from 'nanoid';

const App = () => {

  const[contacts, setContacts] = useState(data);
  const[addFormData, setAddFormData] = useState({
    name:'',
    address:'',
    phone:'',
    email:'',
  })

  const handleAddFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;


    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      address: addFormData.address,
      phone: addFormData.phone,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  return (
    <div className="App-container">
      <h1>contact</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
          <tr>
            <td> {contact.name}</td>
            <td>{contact.address.city}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
          </tr>

          ))}




        </tbody>
      </table>
      <h2>Add a Contact</h2>

      <form onSubmit={handleAddFormSubmit}>
        <input type="text" 
        name='name' 
        required = 'required' 
        placeholder='Enter a name...'
        onChange={handleAddFormChange}
        />
        <input type= "text" 
        name= "address" 
        required = "required" 
        placeholder="Enter an address..."
        onChange={handleAddFormChange}
        />
        <input type="text" 
        name= "phone"
        required = 'required' 
        placeholder="Enter a phone number..."
        onChange={handleAddFormChange}
        />
        <input type= "email" 
        name= "email"
        required = 'required' 
        placeholder="Enter an email..."
        onChange={handleAddFormChange}
        />
        <button type="Submit">Add</button>
      </form>

    </div>
  );
};

export default App;
