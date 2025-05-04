import { ref, onBeforeUnmount, type Ref } from 'vue';
import L from 'leaflet';
import type { Map as LeafletMap, LatLngExpression, Marker } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import type { MapOptions, MarkerData } from '../types/map';

// Fix for default marker icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export function useLeaflet(options: MapOptions = {}): {
  mapContainer: Ref<HTMLElement | null>;
  leafletMap: Ref<LeafletMap | null>;
  markersLayer: Ref<L.LayerGroup | null>;
  isMapInitialized: Ref<boolean>;
  initMap: () => void;
  addMarkers: (markers: MarkerData[]) => Marker[];
  flyTo: (
    position: LatLngExpression,
    zoom?: number,
    options?: L.ZoomPanOptions,
  ) => void;
  getBounds: () => L.LatLngBounds | null;
} {
  const mapContainer = ref<HTMLElement | null>(null);
  const leafletMap = ref<LeafletMap | null>(null);
  const markersLayer = ref<L.LayerGroup | null>(null);
  const isMapInitialized = ref<boolean>(false);

  // Fix Leaflet's default icon path issues
  const fixLeafletIcon = (): void => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  };

  const initMap = (): void => {
    if (!mapContainer.value) return;

    fixLeafletIcon();

    // Create map with default options
    leafletMap.value = L.map(mapContainer.value, {
      center: options.center || [51.505, -0.09],
      zoom: options.zoom || 13,
      ...options.mapOptions,
    });

    // Add default tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ...options.tileLayerOptions,
    }).addTo(leafletMap.value);

    // Create markers layer group
    markersLayer.value = L.layerGroup().addTo(leafletMap.value);

    isMapInitialized.value = true;
  };

  // Add markers to the map
  const addMarkers = (markers: MarkerData[] = []): Marker[] => {
    if (!leafletMap.value || !markersLayer.value) return [];

    markersLayer.value.clearLayers();

    return markers.map((marker) => {
      const { position, title, image, ...rest } = marker;

      const leafletMarker = L.marker(position, rest).addTo(markersLayer.value!);

      if (title || description) {
        const popupContent = `
          ${title ? `<h3>${title}</h3>` : ''}
          ${image ? `<img src="${image}" style="max-width:120px;"/>` : ''}
        `;
        leafletMarker.bindPopup(popupContent);
      }

      return leafletMarker;
    });
  };

  // Fly to a location with animation
  const flyTo = (
    position: LatLngExpression,
    zoom: number = 13,
    options: L.ZoomPanOptions = {},
  ): void => {
    if (!leafletMap.value) return;
    leafletMap.value.flyTo(position, zoom, options);
  };

  // Get current map bounds
  const getBounds = (): L.LatLngBounds | null => {
    if (!leafletMap.value) return null;
    return leafletMap.value.getBounds();
  };

  // Clean up when component is unmounted
  onBeforeUnmount(() => {
    if (leafletMap.value) {
      leafletMap.value.remove();
      leafletMap.value = null;
      isMapInitialized.value = false;
    }
  });

  return {
    mapContainer,
    leafletMap,
    markersLayer,
    isMapInitialized,
    initMap,
    addMarkers,
    flyTo,
    getBounds,
  };
}
