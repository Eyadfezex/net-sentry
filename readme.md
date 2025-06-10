# 🛰️ NetSentry

**NetSentry** is a sleek and modern web application that helps you **track and analyze IP addresses** with ease. Built using **Next.js**, **React**, **Shadcn UI**, and **Tailwind CSS**, it delivers geolocation, ISP, and security details in a clean, responsive interface—perfect for developers, network admins, and curious internet explorers alike.

---

## 🚀 Features

- 🔍 **IP Address Lookup** – Enter any valid IPv4 or IPv6 to retrieve insightful data.
- 🌍 **Geolocation Data** – Get the country, city, region, coordinates, and timezone.
- 🏢 **ISP Info** – See the ISP name, organization, and connection type.
- 🛡️ **Security Analysis** – Detect VPN/proxy usage and check threat level (Safe/Unsafe).
- 📱 **Responsive UI** – Optimized for mobile, tablet, and desktop.
- 🎨 **Modern Design** – Powered by Shadcn UI + Tailwind for an elegant and accessible UX.
- 🗺️ **Map Ready** – Includes a map placeholder for integrating Leaflet, Mapbox, etc.

---

## 🛠 Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Shadcn UI
- **Icons**: Lucide React
- **Data Sources (planned)**: [ipapi.co](https://ipapi.co), [ipinfo.io](https://ipinfo.io)

> 💡 Currently uses sample data for demo purposes.

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: v18+
- **npm**: v8+
- A Next.js project with Tailwind CSS already configured (or start fresh)

---

### 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-repo/netsentry.git
   cd netsentry
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install and set up Shadcn UI**

   ```bash
   npm install lucide-react
   npx shadcn-ui@latest init
   npx shadcn-ui@latest add button input card badge
   ```

4. **Configure Tailwind CSS** (if not already)

   Update `tailwind.config.js`:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
       "./app/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   Create or update `app/globals.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧪 Usage

1. Enter a valid IP (e.g., `8.8.8.8`) into the input field.
2. Click **Track IP** to display all available info.
3. Click **Clear** to reset.
4. View geolocation data and a placeholder map (awaiting integration).

---

## 🖼 Example Output

> Querying IP: `8.8.8.8`

- **Geolocation**: Mountain View, California, USA
  → (Lat: 37.4056, Lon: -122.0775)
- **ISP**: Google LLC – Corporate Network
- **Security**: ✅ Safe | ❌ No VPN | ❌ No Proxy

---

## 🔮 Planned Enhancements

- 🔗 Real API integration with `ipapi.co` or `ipinfo.io`
- 🗺️ Interactive map using Leaflet or Mapbox
- 📊 Visual analytics (e.g., top countries, usage trends)
- 🗃️ Backend (Node.js/Express) for caching and history

---

## 🤝 Contributing

All contributions are welcome!

1. Fork the repo
2. Create a feature branch
3. Submit a pull request
   Make sure your code follows project style and includes tests if needed.

---

## 📄 License

MIT © \[Your Name]
See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

Got questions or suggestions?

- GitHub Issues: [your-repo/netsentry](https://github.com/your-repo/netsentry)
- Email: [your-email@example.com](mailto:your-email@example.com)

---

✨ Powered by **NetSentry** – track smart, analyze smarter.
