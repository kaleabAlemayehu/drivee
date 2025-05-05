import { ref, onBeforeUnmount, type Ref } from 'vue';
import L from 'leaflet';
import type {
  Map as LeafletMap,
  LatLngExpression,
  Marker,
  FeatureGroup,
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { MapOptions, MarkerData } from '../types/map';

export function useLeaflet(options: MapOptions = {}): {
  mapContainer: Ref<HTMLElement | null>;
  leafletMap: Ref<LeafletMap | null>;
  markersLayer: Ref<FeatureGroup | null>;
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
  const markersLayer = ref<FeatureGroup | null>(null);
  const isMapInitialized = ref<boolean>(false);

  // Fix Leaflet's default icon path issues
  const fixLeafletIcon = (): void => {
    // This line is no longer needed with modern Leaflet
    // delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  };

  const initMap = (): void => {
    if (!mapContainer.value) return;

    fixLeafletIcon();

    // Create map with default options and more aggressive type assertion
    const map = L.map(mapContainer.value, {
      center: options.center || [51.505, -0.09],
      zoom: options.zoom || 13,
      ...options.mapOptions,
    });

    // Set the ref with proper type assertion
    leafletMap.value = map as unknown as LeafletMap;

    // Add default tile layer with type assertion to avoid TypeScript errors
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ...options.tileLayerOptions,
    }).addTo(map as any);

    // Create markers layer group with 'new' keyword and type assertion
    const featureGroup = new L.FeatureGroup();
    // Add to map with type assertion
    featureGroup.addTo(map as any);
    // Set ref with proper type assertion
    markersLayer.value = featureGroup as unknown as FeatureGroup;

    isMapInitialized.value = true;
  };

  // Add markers to the map
  const addMarkers = (markers: MarkerData[] = []): Marker[] => {
    if (!leafletMap.value || !markersLayer.value) return [];

    // Use type assertion to help TypeScript
    const layer = markersLayer.value as any;
    layer.clearLayers();

    return markers.map((marker) => {
      // Extract all needed properties explicitly
      const { position, title, image, description, ...markerOptions } = marker;

      // Create marker and add it to the layer with type assertions
      const leafletMarker = L.marker(
        position,
        markerOptions as L.MarkerOptions,
      );
      leafletMarker.addTo(layer);

      // Now we have description in scope
      if (title || description || image) {
        const popupContent = `
          ${title ? `<h3>${title}</h3>` : ''}
          ${description ? `<p>${description}</p>` : ''}
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
    // Use type assertion for method call
    (leafletMap.value as any).flyTo(position, zoom, options);
  };

  // Get current map bounds
  const getBounds = (): L.LatLngBounds | null => {
    if (!leafletMap.value) return null;
    // Use type assertion for method call
    return (leafletMap.value as any).getBounds();
  };

  // Clean up when component is unmounted
  onBeforeUnmount(() => {
    if (leafletMap.value) {
      // Use type assertion for method call
      (leafletMap.value as any).remove();
      leafletMap.value = null;
      markersLayer.value = null;
      isMapInitialized.value = false;
    }
  });

  // Use type assertion for the whole return object
  return {
    mapContainer,
    leafletMap: leafletMap as Ref<LeafletMap | null>,
    markersLayer: markersLayer as Ref<FeatureGroup | null>,
    isMapInitialized,
    initMap,
    addMarkers,
    flyTo,
    getBounds,
  };
}
