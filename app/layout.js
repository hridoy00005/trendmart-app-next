"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import store from "./store";
import Script from "next/script";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "TrendMart App",
//   description: "Generated by TrendMart shop",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></Script>
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <div className="text-right text-sm bg-gray-100 text-slate-500 pr-8 pt-1">
              Hotline:111000
            </div>
            <Navbar />
            <div className="bg-white min-h-screen relative sm:px-20">
              <div className=" mx-auto">{children}</div>
            </div>
            <Footer />
          {/* </PersistGate> */}
        </Provider>
       
      </body>
    </html>
  );
}
