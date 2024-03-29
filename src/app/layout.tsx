import Navigation from "../components/navigation";
import global from "./globals.scss";
import { Providers } from "./providers";
import type { NextWebVitalsMetric } from "next/app";
import React from "react";
import Footer from "../components/footer";

import SplashScreen from "../components/splash-screen";
export const metadata = {
  title: "HyCoDeV",
  description: "Research Dissemination Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <div className={global.container}>
            {/*<SplashScreen />*/}
            <Navigation />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.label === "web-vital") {
    console.log(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}
