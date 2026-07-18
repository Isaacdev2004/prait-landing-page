import { useEffect } from "react";

/** Loads HubSpot tracking.js so Original Source + UTMs are recorded when portal ID is set. */
export function useHubSpotTracking() {
  useEffect(() => {
    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID as string | undefined;
    if (!portalId || document.getElementById("hs-script-loader")) return;

    const script = document.createElement("script");
    script.id = "hs-script-loader";
    script.async = true;
    script.defer = true;
    script.src = `//js.hs-scripts.com/${portalId}.js`;
    document.head.appendChild(script);
  }, []);
}
