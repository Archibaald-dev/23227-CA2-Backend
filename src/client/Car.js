import React from 'react';
import ReactDOM from 'react-dom';
//import the Link component to use for linking prop information
import { Link } from 'react-router-dom';

// define one single car card component
class Car extends React.Component {
  render() {
    return (
      <div className="column is-2" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt="Car image" src={this.props.image} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4 has-text-info">{this.props.name}</p>
                <hr/>
                <p className="subtitle is-size-6">{this.props.brand}</p>
                {/*delete the prop with requested id from the function invoked in the parent component*/}
                <button className="button is-danger" type="button" onClick={() => {this.props.handleDelete(this.props.id);}}>
                  Delete
                </button>
                {/*load the EditCar component via React Router and send the id over to the EditCar component*/}
                <Link to={`/edit-car/${this.props.id}`}>
                  <button className="button is-info" type="button">
                  Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Car;
