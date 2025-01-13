import React, { useEffect, useRef } from 'react';
import { MapRenderer } from './mapRenderer.tsx';
import { Slider } from '../components/slider.tsx';

function MapRendererPage() {
  const mapRendererRef = useRef<MapRenderer | null>(null);

  useEffect(() => {
    if (!mapRendererRef.current) {
      const mapCanvas = document.getElementById('mapCanvas') as HTMLCanvasElement;
      if (mapCanvas) {
        mapRendererRef.current = new MapRenderer('mapCanvas');
      }
    }

    const intervalId = setInterval(() => {
      if (mapRendererRef.current) {
        mapRendererRef.current.update();
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
      mapRendererRef.current = null;
    };

  }, []);

  return (
    <div>
      <canvas
        id="mapCanvas"
        width={800}
        height={600}
      />
      <div className="sliders-container">
        <Slider
          min={0}
          max={500}
          value={0}
          label="Airspeed (knots)"
          onChange={(value) => {
            if (mapRendererRef.current) {
              mapRendererRef.current.airplane.airspeed = value;
            }
          }}
        />
        <Slider
          min={-180}
          max={180}
          value={0}
          label="Yaw (degrees)"
          onChange={(value) => {
            if (mapRendererRef.current) {
              mapRendererRef.current.airplane.yawAngle = value;
            }
          }}
        />
      </div>
    </div>
  );
}

export default MapRendererPage;

