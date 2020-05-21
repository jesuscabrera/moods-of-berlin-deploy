import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import EditPlace from "./EditPlace";
import { Accordion, Button, Card } from "react-bootstrap";

class PlaceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSinglePlace = () => {
    const { params } = this.props.match;
    axios
      .get(`/api/places/${params.id}`)
      .then((responseFromApi) => {
        // console.log(responseFromApi);
        const thePlace = responseFromApi.data;
        this.setState(thePlace);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSinglePlace();
  }

  // DELETE PLACE:
  deletePlace = () => {
    const { params } = this.props.match;
    axios
      .delete(`/api/places/${params.id}`)
      .then(() => {
        this.props.history.push("/places"); // !!!
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // console.log("<Places/> RENDER");

    let allowedToEditOrDelete = false;
    const user = this.props.user;
    // console.log("user:", user);
    const owner = this.state.owner;
    // console.log("owner", owner);
    if (user && user._id === owner) allowedToEditOrDelete = true;

    return (
      <div>
        <div
          className="card"
          style={{ margin: "1em auto", width: "80%" }}
          key={this.state._id}
        >
          <img
            className="img-fluid"
            style={{ minWidth: "100%" }}
            src={this.state.imgPath}
            alt={this.state.title}
          ></img>

          <div className="card-body">
            <h5 className="card-title">{this.state.title} </h5>
            <br></br>

            <p>
              <b>Mood: </b> {this.state.mood}
            </p>

            <p className="card-text">
              <b>Description: </b> {this.state.description}
            </p>

            <p>
              <b>Address: </b>
              {this.state.street} {this.state.zip} {this.state.city}
            </p>
          </div>

          {/* Only the owner is allowed to edit or delete a place */}
          {allowedToEditOrDelete && (
            <div className="card-footer">
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="info" eventKey="0">
                      Edit
                    </Accordion.Toggle>
                    <button
                      type="button"
                      className="btn btn-danger mx-2"
                      onClick={() => this.deletePlace()}
                    >
                      Delete
                    </button>
                    <br></br>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {" "}
                      <EditPlace
                        thePlace={this.state}
                        getThePlace={this.getSinglePlace}
                        {...this.props}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PlaceDetails;
