import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./PlaceList.css";

const PlaceList = (props) => {
  // console.log(props.places);
  return (
    <div>
      <div className="card-columns" style={{ margin: "0 35px" }}>
        {props.places.map((place) => {
          return (
            <div key={place._id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={place.imgPath}
                  alt={place.title}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{place.title}</h5>
                  <b>Mood: </b> {place.mood}
                  <div className={place.mood}></div>
                  <p className="card-text">
                    {" "}
                    <b>Address: </b>
                    {place.street} {place.zip} {place.city}
                  </p>
                </div>
                <div className="card-footer ">
                  <Link to={`/places/${place._id}`}>
                    <button type="button" className="btn btn-info btn-block">
                      See place
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlaceList;
