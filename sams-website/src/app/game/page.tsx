"use client"

import { CssBaseline } from '@mui/material';
import Header from '../../components/Header';
import { useEffect } from 'react';

function UnityViewerComponent() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/WebGame/Build/WebGame.loader.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script)
    }
  }, []);

  return (
    <div style={{ width: '90%', height: '90%', margin: '0 auto' }}>
      <canvas id="unity-canvas" width="90%" height="90%" />
    </div>
  );
}

export default function UnityPage() {
  return (
    <>
      <CssBaseline />
      <Header />
      <div style={{ paddingTop: '2rem' }}>
        <iframe src="/WebGame/index.html" width={"90%"} height={"90%"} style={{border: "none", position: "absolute"}} allowFullScreen>

        </iframe>
        <UnityViewerComponent />
      </div>
    </>
  );
}
