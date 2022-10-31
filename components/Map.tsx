import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function MapBox({ searchResult }: any) {
  // Transform the search result to get the center
  const [selectedLocation, setSelectedLocation] = useState<any>({});
  const coordinates = searchResult.map((item: any) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const center: any = getCenter(coordinates);

  const [viewport, setViewport] = useState<any>({
    width: "100%",
    heigth: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/vivekdogra02/cl9vsddy000ej15mgemltvsln"
      mapboxAccessToken={process.env.MAPBOX_KEY}
      {...viewport}
      onMove={(evt: any) => setViewport(evt.viewState)}
    >
      {searchResult?.map((item: any) => (
        <div key={item.long} className="">
          {/* <Marker
            offset={[-20, -10]}
            key={item.long}
            longitude={item.long}
            latitude={item.lat}
          >
            <p
              onClick={() => setSelectedLocation(item)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              🚩
            </p>
          </Marker> */}
          {/* {selectedLocation?.long === item.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              latitude={item.lat}
              longitude={item.long}
              closeOnClick={true}
            >
              {item.title}{" "}
            </Popup>
          ) : (
            false
          )} */}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default MapBox;
