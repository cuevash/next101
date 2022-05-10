import * as React from "react";
import Script from "next/script";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";

export default function PlasmicHost() {
  return (
    <div>
      <Script
        src="https://static1.plasmic.app/preamble.js"
        strategy="beforeInteractive"
      />
      <PlasmicCanvasHost />
    </div>
  );
}
