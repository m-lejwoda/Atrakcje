import { Map, TileLayer, FeatureGroup, Circle } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"

const ComponentDraw = () => (
  <FeatureGroup>
    <EditControl
      position='topleft'
      onEdited={this._onEditPath}
      onCreated={this._onCreate}
      onDeleted={this._onDeleted}
      draw={{
        rectangle: false
      }}
    />
    <Circle center={[51.51, -0.06]} radius={200} />
  </FeatureGroup>
);