import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';

//Create Car component that will create a new car card
class CreateCar extends Component {
    constructor(props) {
        super(props);
        // the form fields are stored in a state
        this.state = { 
            name: '', 
            horsepower: '', 
            weels: '', 
            brand: '', 
            picture: '' 
        };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //once the input boxes are changed, update the state to match the value
    handleChange(event) {
        //name of the input boxes must match the property names in the state
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        //preventDefault() is called on the event when it occurs to prevent a browser reload/refresh
        event.preventDefault();

        //use axios to send a POST request to the server which includes the state information for the new car to be created
        axios.post('/api/cars', this.state)
            //on success go to home
            .then(res => this.props.history.push('/'))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // remember that the name of the input fields should match the state
        return (
            <div className="is-fluid">
                {/*on form submit call handleSubmit()*/}
                <form onSubmit={this.handleSubmit}>
                    <h2 className="title is-1 has-text-info">Create New Car</h2>
                    <hr />
                    {/*main container for input fields*/}
                    <div className="container">
                    {/*FIRST COLUMN*/}
                    <div className="columns">
                        <div className="column is-half">
                            <div className="field">
                                <label className="label"> Name: </label>
                                <div className="control">
                                    <input className="input is-small" required type="text" name="name" value={this.state.name} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label"> Horsepower </label>
                                <div className="control">
                                    <input className="input is-small" type="number" name="horsepower" value={this.state.horsepower} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                             <div className="field">
                                <label className="label"> Picture: </label>
                                <div className="control">
                                    <input className="input is-small" type="url" name="picture" value={this.state.picture} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                        </div>
                        {/*SECOND COLUMN*/}
                        <div className="column">
                            <div className="field">
                                <label className="label"> Weels </label>
                                <div className="control">
                                    <input className="input is-small" type="number" name="weels" value={this.state.weels} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label"> Brand </label>
                                <div className="control">
                                    <input className="input is-small" type="text" name="brand" value={this.state.brand} onChange={this.handleChange} id="form" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*SUBMIT BUTTON*/}
                    <input className="button is-info" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateCar;
