import React, { useState, useEffect } from 'react';
import classes from "./map.module.css";
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { useSelector } from "react-redux";

function Map() {
    const currentLocation = useSelector( state => state.location);
    const language = useSelector( (state) => state.control.language);
    const [map, setMap] = useState(null);
    const mapLabels = [
        'country-label',
        'state-label',
        'settlement-label',
        'settlement-subdivision-label',
        'airport-label',
        'poi-label',
        'water-point-label',
        'water-line-label',
        'natural-point-label',
        'natural-line-label',
        'waterway-label',
        'road-label'
    ];

    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 9,
        width: "375px",
        height: "375px",
    });

    useEffect( () => {
        setViewport({
            ...viewport,
            latitude: currentLocation.lat,
            longitude: currentLocation.lon,
        })
        }
    , [currentLocation]);

    useEffect(() => {
        if(map) {
            const lang = `name_${language}`;
            mapLabels.forEach((label) => map.setLayoutProperty(label, 'text-field', ['get', lang]) );
        }
    }, [map, language]);

    return (
            <ReactMapGL
                mapboxApiAccessToken = {'pk.eyJ1IjoiYW5hc3Rhc2l5YWNoZSIsImEiOiJja3Zqbml4ZGQwaTh0MnhuMWtieTl0c2VsIn0.Yyp5pw0RtGvHLlxaUXtWdg'}
                mapStyle = "mapbox://styles/mapbox/streets-v11"
                {...viewport}
                onViewportChange={ (viewport) => setViewport(viewport) }
                onLoad={ el => setMap(el.target) }
            >
            </ReactMapGL>
    );
}

export default Map;