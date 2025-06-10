import axios, { AxiosInstance } from "axios";

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.ipapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor
// api.interceptors.request.use(
//   (config) => {
//     // You can add auth tokens here
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);

export interface IpApiResponse {
  ip: string;
  type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  msa: string;
  dma: string;
  radius: string;
  ip_routing_type: string;
  connection_type: string;
  location: {
    geoname_id: number;
    capital: string;
    languages: {
      code: string;
      name: string;
      native: string;
    }[];
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    calling_code: string;
    is_eu: boolean;
  };
}

export const ipApiGet = async (ip: string): Promise<IpApiResponse> => {
  try {
    const response = await api.get(
      `/${ip}?access_key=${process.env.NEXT_PUBLIC_IPAPI_API_KEY}` // Ensure this environment variable is set
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching IP data:", error);
    throw error;
  }
};

export default api;
