import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import PlaceList from "./PlaceList";
import Colorbar from "./Colorbar";
import Map from "./Map";
import { Link } from "react-router-dom";

// here we save the mapbox token
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

// here we create a function that returns a string with the specified values
let query = (street, city, zip, token) => {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${street}_${city}_${zip}.json?types=address&access_token=${token}`;
};

class Places extends Component {
  state = {
    places: [],
    mood: "",
    loadingMap: true,
  };

  getAllPlaces = () => {
    axios
      .get("/api/places")
      .then(async (responseFromApi) => {
        // we make a copy of the database response
        let newPlaces = [...responseFromApi.data];
        // we loop over the places array
        for (let place of newPlaces) {
          // for each loop we get a json file from the mapbox api
          // in the mapbox api we pass a query() function that is converted into a string with the addresss so we get the coordinates
          const data = await axios
            // inside of the path we pass the street,city, zip and token to get the lat and long from that adress
            .get(query(place.street, place.city, place.zip, mapboxToken))
            .catch((err) => {
              return err;
            });
          // for each place we get some coordiantes by calling the axios.get of mapbox path
          // in data we have the results/response of the axios call.
          // to each place we add a lat and a long so we can update the state with all the places
          place.latitude = data.data.features[0].center[1];
          place.longitude = data.data.features[0].center[0];
        }
        // we set the new state
        this.setState({
          places: newPlaces,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPlacesByMood = (mood) => {
    axios
      .get(`/api/places/moods?mood=${mood}`)
      .then(async (responseFromApi) => {
        console.log(responseFromApi.data);
        let newPlaces = [...responseFromApi.data];
        for (let place of newPlaces) {
          const data = await axios
            .get(query(place.street, place.city, place.zip, mapboxToken))
            .catch((err) => {
              return err;
            });
          place.latitude = data.data.features[0].center[1];
          place.longitude = data.data.features[0].center[0];
        }
        this.setState({
          places: newPlaces,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllPlaces();
    /* this.getPlacesByMood(); */
  }

  changeMood = (e) => {
    this.setState(
      {
        mood: e.target.name,
      },
      () => {
        this.getPlacesByMood(this.state.mood);
      }
    );
  };

  render() {
    return (
      <div>
        {/* here in the map component we send all of the places as props */}
        <Map
          places={this.state.places}
          mapboxToken={mapboxToken}
          mood={this.state.mood}
        />
        <div
          className="alert alert-success"
          style={{ margin: "30px 30px 0 30px", borderRadius: "0" }}
          role="alert"
        >
          <h4 className="alert-heading">Moods of Berlin</h4>
          <p>Please fill the form to add a Place.</p>
          <hr></hr>
          <Link to={`/addPlace`}>
            <button type="button" className="btn btn-success btn-lg">
              Add a Place
            </button>
          </Link>
        </div>
        <Colorbar changeMood={this.changeMood} />
        {this.state.places.length ? (
          <PlaceList places={this.state.places} />
        ) : null}
      </div>
    );
  }
}

export default withRouter(Places);
