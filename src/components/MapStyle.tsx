import { useEffect } from "react";

// Component to inject global styles for Leaflet
const MapStyles = () => {
    useEffect(() => {
        const styleId = 'leaflet-custom-styles';
        if (document.getElementById(styleId)) return;

        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
      .leaflet-container {
        background: hsl(var(--ocean-deep)) !important;
      }
      
      .leaflet-tile-pane {
        filter: hue-rotate(10deg) contrast(1.1) brightness(0.9);
      }
      
      .custom-marker:hover {
        transform: scale(1.2);
        z-index: 1000;
      }
      
      .leaflet-popup-content-wrapper {
        background: transparent !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
      }
      
      .leaflet-popup-content {
        margin: 0 !important;
        padding: 0 !important;
      }
      
      .leaflet-popup-tip {
        background: hsl(var(--card)) !important;
        border: 1px solid hsl(var(--border)) !important;
      }
      
      .leaflet-control-zoom {
        border: none !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
      }
      
      .leaflet-control-zoom a {
        background: hsl(var(--card)) !important;
        color: hsl(var(--foreground)) !important;
        border: 1px solid hsl(var(--border)) !important;
        border-radius: 6px !important;
        margin: 2px !important;
        backdrop-filter: blur(8px);
      }
      
      .leaflet-control-zoom a:hover {
        background: hsl(var(--muted)) !important;
        color: hsl(var(--foreground)) !important;
      }
      
      .leaflet-control-attribution {
        background: hsl(var(--card) / 0.8) !important;
        color: hsl(var(--muted-foreground)) !important;
        border-radius: 6px !important;
        backdrop-filter: blur(8px);
        border: 1px solid hsl(var(--border)) !important;
      }
      
      .leaflet-control-attribution a {
        color: hsl(var(--primary)) !important;
      }
    `;
        document.head.appendChild(style);

        return () => {
            const existingStyle = document.getElementById(styleId);
            if (existingStyle) {
                document.head.removeChild(existingStyle);
            }
        };
    }, []);

    return null;
};

export default MapStyles;