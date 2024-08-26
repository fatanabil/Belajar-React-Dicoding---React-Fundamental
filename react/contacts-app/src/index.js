import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContactApp from "./components/ContactApp";

import './styles/style.css';

// class MyForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             email: '',
//             gender: ''
//         }

//         this.onNameChangeEvenHandler = this.onNameChangeEvenHandler.bind(this);
//         this.onEmailChangeEvenHandler = this.onEmailChangeEvenHandler.bind(this);
//         this.onGenderChangeEvenHandler = this.onGenderChangeEvenHandler.bind(this);
//         this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
//     }

//     onNameChangeEvenHandler(event) {
//         this.setState(prevState => {
//             return {
//                 ...prevState,
//                 name: event.target.value,
//             }
//         })
//     }

//     onEmailChangeEvenHandler(event) {
//         this.setState(prevState => {
//             return {
//                 ...prevState,
//                 email: event.target.value,
//             }
//         })
//     }

//     onGenderChangeEvenHandler(event) {
//         this.setState(prevState => {
//             return {
//                 ...prevState,
//                 gender: event.target.value,
//             }
//         })
//     }

//     onSubmitEventHandler(event) {
//         event.preventDefault();

//         const message = `
//             Name: ${this.state.name},
//             Email: ${this.state.email},
//             Gender: ${this.state.gender}
//         `;

//         alert(message);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Register Form</h1>
//                 <form action="" onSubmit={this.onSubmitEventHandler} >
//                     <label htmlFor="name">Name: </label>
//                     <input type="text" id="name" value={this.state.name} onChange={this.onNameChangeEvenHandler} />
//                     <br />
//                     <label htmlFor="email">Email: </label>
//                     <input type="text" id="email" value={this.state.email} onChange={this.onEmailChangeEvenHandler} />
//                     <br />
//                     <label htmlFor="gender">Gender: </label>
//                     <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEvenHandler} >
//                         <option value="Man">Man</option>
//                         <option value="Woman">Woman</option>
//                     </select>
//                     <br />
//                     <button type="submit">submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ContactApp />
    </BrowserRouter>
);