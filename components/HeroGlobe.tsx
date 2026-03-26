"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import type { MapRef } from "react-map-gl/maplibre";
import { projects } from "@/lib/projects";

const DARK_STYLE = "https://tiles.openfreemap.org/styles/dark";

export default function HeroGlobe() {
  const mapRef = useRef<MapRef>(null);
  const animationRef = useRef<number>(0);
  const scrolledPast = useRef(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const rotate = useCallback(() => {
    if (scrolledPast.current) return;
    const map = mapRef.current?.getMap();
    if (!map) return;
    const center = map.getCenter();
    map.setCenter([center.lng + 0.03, center.lat]);
    animationRef.current = requestAnimationFrame(rotate);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      if (past && !scrolledPast.current) {
        scrolledPast.current = true;
        cancelAnimationFrame(animationRef.current);
      } else if (!past && scrolledPast.current) {
        scrolledPast.current = false;
        animationRef.current = requestAnimationFrame(rotate);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, [rotate]);

  const onMapLoad = useCallback(() => {
    setMapLoaded(true);
    animationRef.current = requestAnimationFrame(rotate);
  }, [rotate]);

  return (
    <div className="absolute inset-0" style={{ opacity: mapLoaded ? 1 : 0, transition: "opacity 1.2s ease" }}>
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 0,
          latitude: 20,
          zoom: 1.5,
        }}
        projection="globe"
        mapStyle={DARK_STYLE}
        interactive={false}
        attributionControl={false}
        onLoad={onMapLoad}
        style={{ width: "100%", height: "100%" }}
      >
        {mapLoaded &&
          projects.map((p) => (
            <Marker
              key={p.id}
              longitude={p.location[0]}
              latitude={p.location[1]}
              anchor="center"
            >
              <div className="marker-pulse" />
            </Marker>
          ))}
      </Map>
    </div>
  );
}
