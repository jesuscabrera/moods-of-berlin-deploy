import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className="slider" style={{ borderTop: "solid 2px white" }}>
      <div className="bg-info row d-flex">
        <div className="col-lg-6 px-5">
          <img
            src="\Plutchik-wheel.png"
            className="img-fluid p-5"
            alt="Responsive image"
          ></img>
        </div>
        <div className="col-lg-6 align-self-center">
          <h6 style={{ fontSize: "2rem" }} className="text-white display-4">
            How do you feel today?
          </h6>
          <h1 className="text-white display-2">Moods of Berlin</h1>
          <h6 style={{ fontSize: "2rem" }} className="text-white display-4">
            what would you like to do?
          </h6>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 containerBox">
          <div className="row">
            <div className="col-6 ">
              <div className="row">
                <div className="col-6">
                  <Link to="/places">
                    <div className="overlay-effect-yellow"></div>
                    <div className="item1"></div>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/places">
                    <div className="overlay-effect-green"></div>
                    <div className="item2"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <Link to="/places">
                <div className="overlay-effect-orange"></div>
                <div className="item3"></div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-6 ">
              <Link to="/places">
                <div className="overlay-effect-violet"></div>
                <div className="item4"></div>
              </Link>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <Link to="/places">
                    <div className="overlay-effect-turquoise"></div>
                    <div className="item5"></div>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/places">
                    <div className="overlay-effect-red"></div>
                    <div className="item6"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row col-9 pullToTop">
            <div className="col-3">
              <Link to="/places">
                <div className="overlay-effect-blue"></div>
                <div className="item7"></div>
              </Link>
            </div>
            <div className="col-9">
              <Link to="/places">
                <div className="overlay-effect-greenyellow"></div>
                <div className="item8"></div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 p-3">
          <h4 className="my-3">INTRO TEXT</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            turpis nunc. Sed eu fermentum velit. Duis molestie augue neque, eu
            hendrerit tellus elementum at. Suspendisse facilisis pharetra nulla
            sagittis luctus. Vivamus non felis semper, bibendum justo at, cursus
            velit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Phasellus ullamcorper iaculis massa,
            eget luctus nisl iaculis non. Praesent varius, sapien sed egestas
            lacinia, turpis diam facilisis erat, id bibendum sapien magna at
            arcu. Pellentesque in pretium odio. Sed dignissim arcu vitae dolor
            posuere, in accumsan purus eleifend. Duis risus enim, lacinia in
            tellus lobortis, commodo porta dui. In sagittis sed mauris id
            aliquam. Vivamus augue quam, sollicitudin vitae velit vitae,
            hendrerit sodales augue. Fusce a neque ac turpis mattis tincidunt.
            Phasellus quis nulla ut nisi egestas auctor. Morbi consequat augue
            non ante porta porttitor. Ut scelerisque sodales nibh a molestie.
            Integer quis scelerisque justo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
