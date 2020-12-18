import React, { Component } from 'react';
//import the Link component to handle React Router
import { Link } from 'react-router-dom';
import Car from './Car';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';
import './app.css';
// import stylesheet 
//MAKE SURE TO INSTALL USING npm install bulma
import 'bulma/css/bulma.css';

// this component will handle all elements in the cars array
class CarList extends Component {
    constructor(props) {
        super(props);
        // store the cars array in the state
        this.state = { cars: [] };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.updateCars = this.updateCars.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // fetch all car data from the server when the component mounts
    componentDidMount() {
        this.updateCars();
    }

    //
    updateCars() {
        // get the cars API using axios GET request to the server 
        axios.get('api/cars')
            .then(response => {
                //store the response in the state
                this.setState({ cars: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDelete(carId) {
        // make a DELETE request to the server which will handle the removal of the car with the specific carId
        axios
            .delete('api/cars', {
                data: {
                    id: carId
                }
            })
            .then(response => {
                //if the deletion was successful then re-render the list of cars
                this.updateCars();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // produce a Car component for each car object
        const carList = this.state.cars.map(u => (
            //map through each element in the array and set to the value received from the server
            <Car
                key={u._id}
                id={u._id}
                name={u.name}
                brand={u.brand}
                horsepower={u.horsepower}
                image={u.picture}
                weels={u.weels}
                //you must include the handleDelete method to use in child components
                handleDelete={this.handleDelete}
            />
        ));

        //return the list of cars
        return (
            <div className="is-fluid">
                {/*Navigation bar*/}
                <nav className="navbar">
                    <h1 className="navbar-item title is-1 has-text-info">List of Cars</h1>
                    {/*when this button is pressed, CreateCar component will be rendered by using React Router*/}
                    <Link to={'/create-car'} className="navbar-item navbar-end">
                        <button className="button is-link" type="button">Create new car</button>
                    </Link>
                </nav>
                <hr />
                {/*CAR LIST*/}
                <div>
                    <div className="columns is-multiline">
                        {carList}
                    </div>
                </div>
                {/*FOOTER*/}
                <footer className="footer has-background-info">
                    <div className="content has-text-centered">
                        <p className="has-text-white-bis"><strong>Random Car API</strong> styled with Bulma.</p>
                    </div>
                </footer>
            </div>

        );
    }
}

export default CarList;
