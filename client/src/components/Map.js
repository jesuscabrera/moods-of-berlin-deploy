import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./Map.css";

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 52.5170365,
    longitude: 13.3888599,
    width: "100vw",
    height: "50vh",
    zoom: 10,
  });
  // console.log("this is the props ", props);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={props.mapboxToken}
      // mapStyle="mapbox://styles/benchberlin/cka8f1pe629161iqu0304nkde"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      {/*console.log(props, props.places)}*/}
      {/* here we check if there are places already to start showing the markers */}
      {props.places.length &&
        props.places.map((place) => {
          // console.log("mapping", place);
          return (
            <Marker
              key={place._id}
              latitude={place.latitude}
              longitude={place.longitude}
            >
              {/* <img src="./mapbox-icon.png" alt="mapbox icon" /> */}

              {props.mood === "" && (
                <img
                  className="map-marker"
                  src="./allColors_marker.png"
                  alt="mapbox icon"
                />
              )}

              {props.mood === "joyful" && (
                <img
                  className="map-marker"
                  src="./joyful_yellow_marker.png"
                  alt="mapbox icon joyful"
                />
              )}

              {props.mood === "relaxed" && (
                <img
                  className="map-marker"
                  src="./relaxed_lightgreen_marker.png"
                  alt="mapbox icon relaxed"
                />
              )}

              {props.mood === "energetic" && (
                <img
                  className="map-marker"
                  src="./energetic_orange_marker.png"
                  alt="mapbox icon energetic"
                />
              )}

              {props.mood === "bored" && (
                <img
                  className="map-marker"
                  src="./bored_green_marker.png"
                  alt="mapbox icon bored"
                />
              )}

              {props.mood === "thoughtful" && (
                <img
                  className="map-marker"
                  src="./thoughtful_turquise_marker.png"
                  alt="mapbox icon thoughtful"
                />
              )}

              {props.mood === "melancholic" && (
                <img
                  className="map-marker"
                  src="./melancholic_blue_marker.png"
                  alt="mapbox icon melancholic"
                />
              )}

              {props.mood === "anxious" && (
                <img
                  className="map-marker"
                  src="./anxious_violet_marker.png"
                  alt="mapbox icon anxious"
                />
              )}

              {props.mood === "angry" && (
                <img
                  className="map-marker"
                  src="./angry_red_marker.png"
                  alt="mapbox icon angry"
                />
              )}
            </Marker>
          );
        })}
    </ReactMapGL>
  );
};

export default Map;
