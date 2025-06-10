"use client";
import Footer from "@/components/footer";
import GeolocationCard from "@/components/geolocation-card";
import Header from "@/components/header";
import SearchForm from "@/components/search-form";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});
import { useState } from "react";
import { ipApiGet, IpApiResponse } from "@/lib/api";

export default function Home() {
  const [ipAddress, setIpAddress] = useState("");
  const [results, setResults] = useState<IpApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // IP address validation regex (supports both IPv4 and IPv6)
  const ipv4Regex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

  const validateIP = (ip: string) => {
    return ipv4Regex.test(ip) || ipv6Regex.test(ip);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    if (!ipAddress.trim()) {
      setError("Please enter an IP address");
      return;
    }

    if (!validateIP(ipAddress.trim())) {
      setError("Please enter a valid IP address");
      return;
    }

    setIsLoading(true);
    try {
      const data = await ipApiGet(ipAddress.trim());
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch IP data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setIpAddress("");
    setResults(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <SearchForm
          ipAddress={ipAddress}
          setIpAddress={setIpAddress}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
          isLoading={isLoading}
          error={error}
        />
        {results ? (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GeolocationCard results={results} />
            </div>
            <Map data={results} />
          </div>
        ) : (
          !isLoading && (
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <Search className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                <h3 className="text-xl font-medium text-slate-600 mb-2">
                  Ready to Track
                </h3>
                <p className="text-slate-500">
                  Enter an IP address above to start tracking and analysis
                </p>
              </CardContent>
            </Card>
          )
        )}
        <Footer />
      </div>
    </div>
  );
}
