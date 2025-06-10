import { MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { IpApiResponse } from "@/lib/api";

/**
 * A card component that displays geolocation information based on IP address data.
 *
 * @component
 * @param {Object} props - The component props
 * @param {IpApiResponse} props.results - The IP API response data containing geolocation information
 *
 * @returns {JSX.Element} A card displaying:
 * - IP address
 * - City and region location
 * - Country name
 * - Geographic coordinates (latitude/longitude)
 *
 * @example
 * ```tsx
 * <GeolocationCard results={ipApiData} />
 * ```
 */
function GeolocationCard({ results }: { results: IpApiResponse }) {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-slate-800 text-3xl">
          <MapPin size={30} className=" text-blue-600" />
          Geolocation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm text-slate-500">IP Address</p>
          <p className="font-mono text-lg font-semibold text-slate-900">
            {results.ip}
          </p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Location</p>
          <p className="font-medium text-slate-800">{results.city}</p>
          <p className="text-slate-600">{results.country_name}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Coordinates</p>
          <p className="font-mono text-sm text-slate-700">
            {results.latitude}, {results.longitude}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default GeolocationCard;
