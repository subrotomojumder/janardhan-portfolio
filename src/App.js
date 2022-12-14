import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ParticlesBackground from './component/ParticlesBackground';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, [])
  return (
    <>
      <ParticlesBackground/>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
