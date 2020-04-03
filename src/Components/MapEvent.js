// Demo page. Here OpenStreetMap is used which will give latitude and longitude of the location by user click
// It will display weather of that place which will be fetched from openweathermap api.

import React, { createRef, Component } from "react";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import axios from "axios";

export default class EventsExample extends Component {
  // state of the component which will store weather, latitude and logitude information
  state = {
    hasLocation: false,
    weather: null,
    zoom: 10,
    latlng: {
      lat: 42.301063,
      lng: -83.020527,
    },
  };

  mapRef = createRef();

  handleClick = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    });
    // Fetch weather information from openweathermap API.
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          e.latlng.lat +
          "&lon=" +
          e.latlng.lng +
          "&appid=[INSERT_API]&units=Metric"
      )
      .then((res) => {
        this.setState({
          weather: res.data,
        });
      });
  };

  // Display map from OpenStreetMap.org api by using LeafLet JavaScript library
  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Tooltip permanent>
          It's{" "}
          <b>
            {this.state.weather
              ? this.state.weather.name + ", " + this.state.weather.sys.country
              : ""}
          </b>{" "}
          <br></br> <b>Weather:</b>{" "}
          {this.state.weather ? this.state.weather.weather[0].main : ""}
          <br></br> <b>Temperature:</b>{" "}
          {this.state.weather ? this.state.weather.main.temp + " Celsius" : ""}
          <br></br> <b>Temperature feels like:</b>{" "}
          {this.state.weather
            ? this.state.weather.main.feels_like + " Celsius"
            : ""}
          <br></br> <b>Wind speed:</b>{" "}
          {this.state.weather
            ? this.state.weather.wind.speed + " meter/sec"
            : ""}
          <br></br>
          <b>Latitude</b> {this.state.latlng.lat},<br></br> <b>Longitude</b>{" "}
          {this.state.latlng.lng}
        </Tooltip>
      </Marker>
    ) : null;

    return (
      <Map
        center={this.state.latlng}
        length={4}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
        zoom={13}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
    );
  }
}
