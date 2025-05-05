import type {
  LatLngExpression,
  Map as LeafletMap,
  Marker,
  LayerGroup,
  MarkerOptions,
} from 'leaflet';

export interface MarkerData extends MarkerOptions {
  id: string | number;
  position: LatLngExpression;
  title?: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

export interface MapOptions {
  center?: LatLngExpression;
  zoom?: number;
  mapOptions?: L.MapOptions;
  tileLayerOptions?: L.TileLayerOptions;
}

export interface LeafletMarker extends MarkerData {
  leafletMarker: Marker;
}

export interface MapState {
  map: LeafletMap | null;
  markersLayer: LayerGroup | null;
  isInitialized: boolean;
}
