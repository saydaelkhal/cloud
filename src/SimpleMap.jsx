import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 45.9081401,
      lng: 9.1415824
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '300px', width: '400px',borderRadius:'20px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={38.9743901}
          lng={1.4197463}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}