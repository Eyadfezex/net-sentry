import { Search, AlertTriangle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

import { FormEvent } from "react";

interface SearchFormProps {
  ipAddress: string;
  setIpAddress: (value: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleClear: () => void;
  isLoading: boolean;
  error: string | null;
}

/**
 * A form component for IP address searching and tracking functionality.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string} props.ipAddress - The current IP address value
 * @param {(value: string) => void} props.setIpAddress - Function to update the IP address value
 * @param {(e: React.FormEvent) => void} props.handleSubmit - Form submission handler
 * @param {() => void} props.handleClear - Function to clear the form
 * @param {boolean} props.isLoading - Loading state indicator
 * @param {string | null} props.error - Error message to display, if any
 *
 * @returns {JSX.Element} A styled form with IP address input, submit and clear buttons,
 * and error display functionality
 */
function SearchForm({
  ipAddress,
  setIpAddress,
  handleSubmit,
  handleClear,
  isLoading,
  error,
}: SearchFormProps) {
  return (
    <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Enter IP address, e.g., 8.8.8.8"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              className="pl-10 h-12 text-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              {error}
            </p>
          )}
          <div className="flex gap-3 justify-center">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 px-8 h-12 text-lg font-medium transition-all duration-200"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Tracking...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Track IP
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClear}
              className="px-6 h-12 text-lg border-slate-200 hover:bg-slate-50"
            >
              Clear
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default SearchForm;
