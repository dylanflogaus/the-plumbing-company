"use client";

import { useEffect } from "react";
import L from "leaflet";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { ADDRESS, PHONE, PHONE_HREF } from "@/lib/constants";

/** Downtown Wilmington — 123 Market St area */
const OFFICE: [number, number] = [39.7427, -75.5486];
/** Approximate same-day coverage from the office (~14 mi) */
const SERVICE_RADIUS_M = 22_500;

export function ServiceAreaLeafletMapInner() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string })
      ._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200 shadow-card"
      aria-label="Interactive map showing our Wilmington office and approximate same-day service area"
    >
      <MapContainer
        center={OFFICE}
        zoom={10}
        scrollWheelZoom
        className="z-0 h-[320px] w-full md:h-[420px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={OFFICE}
          radius={SERVICE_RADIUS_M}
          pathOptions={{
            color: "#1e6ba8",
            fillColor: "#1e6ba8",
            fillOpacity: 0.12,
            weight: 2,
          }}
        />
        <Marker position={OFFICE}>
          <Popup>
            <div className="min-w-[200px] text-sm text-navy">
              <p className="font-display font-bold">The Plumbing Company</p>
              <p className="mt-1 text-slate-600">{ADDRESS}</p>
              <a
                href={PHONE_HREF}
                className="mt-2 inline-block font-semibold text-brand-dark underline"
              >
                {PHONE}
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
