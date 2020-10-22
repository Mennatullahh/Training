import React, { Component } from 'react'
import './form.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FirstName: "",
            LastName: "",
            Email: "",
            Password: "",
            Gender: "",
            ProfilePicture:'',
            UploadMultipleFiles:'',
            Phone:""


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    email = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    phone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    profile = (event) => {
        this.setState({
            ProfilePicture: event.target.value
        })
    }
    files = (event) => {
        this.setState({
            UploadMultipleFiles: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: '',
            phone:"",
            gender: "",
            profile:'',
            files: ''
        })
     event.preventDefault()
        
    }

onChange(e)
{
    let files=e.target.files;
    console.warn("data file", files)
}


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>First Name:</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>Last Name: </label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>E-mail: </label> <input type="text" value={this.state.Email} onChange={this.email} placeholder="E-mail..." /><br />
                    <label>Password : </label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Phone: </label> <input type="text" value={this.state.Phone} onChange={this.phone} placeholder="Phone..." /><br />
                    <label>Gender : </label><select onChange={this.genderhandler} defaultValue="Select Gender">
                    <label>Personal Photo : </label> <input type="file" name="file" onChange={(e)=>this.onChange(e)}  /><br />
                    <label>Upload Multiple Files : </label> <input type="file" name="file" onChange={(e)=>this.onChange(e)} /><br />
                    
                    
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
