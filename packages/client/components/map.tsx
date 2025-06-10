"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import type { IpApiResponse } from "@/lib/api";

/**
 * A component that renders an interactive map using Leaflet.js with location data.
 *
 * @component
 * @param {Object} props - The component props
 * @param {Object} props.data - Location data object containing geographical information
 * @param {number} props.data.latitude - The latitude coordinate for the map marker
 * @param {number} props.data.longitude - The longitude coordinate for the map marker
 * @param {string} [props.data.city] - The city name to display in marker popup
 * @param {string} [props.data.region_name] - The region name to display in marker popup
 * @param {string} [props.data.country_name] - The country name to display in marker popup
 * @param {Object} [props.data.location] - Additional location information
 * @param {string} [props.data.location.country_flag] - URL of the country flag image
 *
 * @returns {JSX.Element} A card component containing an interactive map with location marker
 *
 * @example
 * ```tsx
 * <Map data={{
 *   latitude: 51.505,
 *   longitude: -0.09,
 *   city: "London",
 *   region_name: "England",
 *   country_name: "United Kingdom"
 * }} />
 * ```
 */
function Map({ data }: { data: IpApiResponse }) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Check if we have valid coordinates
    if (!data?.latitude || !data?.longitude) return;

    // Initialize map only if it doesn't exist yet
    if (!mapRef.current) {
      // Create map instance
      mapRef.current = L.map("map").setView(
        [data.latitude, data.longitude],
        13
      );

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    } else {
      // If map exists, just update the view
      mapRef.current.setView([data.latitude, data.longitude], 13);
    }

    // Clear any existing markers
    if (mapRef.current) {
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapRef.current?.removeLayer(layer);
        }
      });

      // Add new marker
      L.marker([data.latitude, data.longitude])
        .addTo(mapRef.current)
        .bindPopup(`${data.city || ""}, ${data.country_name || ""}`)
        .openPopup();
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [data]);

  // Handle country flag display safely
  const countryFlag = data?.location?.country_flag || null;

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <MapPin className="w-5 h-5 text-red-600" />
          Location Map
          {countryFlag && (
            <Image
              width={100}
              height={100}
              src={countryFlag || "/placeholder.svg"}
              alt={`${data.country_name || "Country"} flag`}
              className="w-6 h-4 object-cover ml-2 rounded-sm shadow-sm"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          id="map"
          className="rounded-lg h-64 w-full overflow-hidden"
          style={{ border: "1px solid rgba(203, 213, 225, 0.5)" }}
        ></div>
      </CardContent>
    </Card>
  );
}

export default Map;
