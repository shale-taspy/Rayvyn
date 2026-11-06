# ✦ RAYVYN — Haute Joaillerie & Modern Luxe E-Commerce

> *A Parisian atelier-inspired digital storefront built for high-end artisan jewelry, featuring dynamic MongoDB data layer integration, Next.js dynamic routing, and an architectural luxury aesthetic.*

## 🏛️ Project Vision

**Rayvyn** is a modern e-commerce platform designed with a high-fashion, minimalist Parisian aesthetic (Beige/Dark Green palette, elegant serif typography, and structured grid displays). The platform dynamically serves curated collections—ranging from sculpted titanium steel collars to minimalist signet rings—backed by a robust Node.js/Express API and a MongoDB Atlas infrastructure.

## 🛠️ Tech Stack & Architecture

### **Frontend**

* **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)

* **Styling**: Tailwind CSS

* **Icons**: `react-icons` (Feather collection)

* **Data Fetching**: Suspense-driven server components with `"use cache"` optimization

### **Backend**

* **Runtime**: Node.js & Express.js

* **Database**: MongoDB (Native MongoDB Node.js Driver)

* **CORS & Environment**: Configured via `dotenv` and `cors`

## 🚀 Getting Started

### 1. Prerequisites

* **Node.js**: `v18.x` or later

* **MongoDB Atlas** or a local MongoDB instance

### 2. Backend Setup (`rayvyn-server`)

1. **Navigate to the server directory**:

   ```
   cd rayvyn-server
   
   ```

2. **Install dependencies**:

   ```
   npm install express mongodb dotenv cors
   
   ```

3. **Configure Environment Variables (`.env`)**:

   ```
   PORT=7000
   MONGODB_URI=your_mongodb_connection_string
   CLIENT_URL=http://localhost:3000
   
   ```

4. **Start the Express server**:

   ```
   node index.js
   # or with nodemon
   npm run dev
   
   ```

### 3. Frontend Setup (`rayvyn-client`)

1. **Navigate to the client directory**:

   ```
   cd rayvyn-client
   
   ```

2. **Install dependencies**:

   ```
   npm install
   
   ```

3. **Run the Next.js development server**:

   ```
   npm run dev
   
   ```

4. Open <http://localhost:3000/necklace> to view the live dynamic collection!

## 💎 Features Implemented

* 🎨 **Atelier Visual System**: Designed with `#0E261D` deep emerald typography, `#FAFAF7` bone ivory surfaces, and serif headers.

* 🔄 **Conditional Stock States**: Automatic rendering of `SEE DETAILS` (active) vs `OUT OF STOCK` (disabled) triggers based on `inStock` MongoDB boolean properties.

* ⚡ **Optimized Data Fetching**: Utilizes Next.js `<Suspense>` boundaries paired with `"use cache"` directives to guarantee dynamic data rendering without blocking pre-renders.

* 🖼️ **Image Fallbacks**: Custom high-end "No Image Provided" placeholders rendered cleanly whenever image URLs are absent.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
