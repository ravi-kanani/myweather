// User documentation component where user can find information about how to use this product

import React from "react";

export default class Documentation extends React.Component {
  render() {
    return (
      <div className="container pt-2">
        <div className="row pt-5">
          <div className="col"></div>
          <div className="card col-8">
            <div className="card-body">
              <h4>Introduction</h4>
              <p className="text-left">
                MyWeather lets you know the weather of any location across the
                globe. It not only tells you the current weather (cloudy, humid,
                rain, etc.) and temperature, but also gives you the information
                about what the temperature feels like, what the windspeed is,
                the region you are looking at and its latitude and longitude.
                All it needs to fetch this information for you is a click on the
                map.
                <br />
                <br />
              </p>
              <h4>About the APIs</h4>
              <p className="text-left">
                {" "}
                Application Programming Interface (API), allows the applications
                to communicate with each other. It is a kind of intermediate
                software. It allows the third party to use the functionality of
                a software application. Below are the 2 APIs we have used for
                this project:
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.openstreetmap.org/#map=3/71.34/-96.82"
                >
                  https://www.openstreetmap.org/#map=3/71.34/-96.82
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://openweathermap.org/api"
                >
                  https://openweathermap.org/api
                </a>{" "}
                <br />
                Using the map API, we fetch the latitude and longitude from the
                user’s click action. The latitude-longitude pair is then used to
                fetch the weather information using the weather API and that is
                displayed as a tooltip.
              </p>
              <br />
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
