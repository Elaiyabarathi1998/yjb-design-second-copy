import './App.css';
import { useState, useEffect } from 'react';
import YJBsite from './Components/YJBsite'; // Import your YJBsite component
import { Loading } from './Components/Loader';  // Import the Loader component
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import image11 from './images/11.jpg';
import image12 from './images/12.jpg';
import image13 from './images/13.jpg';
import image14 from './images/14.jpg';
import image15 from './images/15.jpg';
import image16 from './images/16.jpg';
import image17 from './images/17.jpg';
import image18 from './images/18.jpg';
import image19 from './images/19.jpg';
import image20 from './images/logo.png';

// Define the type for a gallery image
interface GalleryImage {
  img: string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(true); // State to track loading
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]); // State with the correct type

  useEffect(() => {
    // Simulate a data fetch (e.g., from an API or a static source)
    setTimeout(() => {
      setGalleryImages([
        { img: image1 },
        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image5 },
        { img: image6 },
        { img: image7 },
        { img: image8 },
        { img: image9 },
        { img: image10 },
        { img: image11 },
        { img: image12 },
        { img: image13 },
        { img: image14 },
        { img: image15 },
        { img: image16 },
        { img: image17 },
        { img: image18 },
        { img: image19 },
        { img: image20 }
      ]);
      setLoading(false); // Set loading to false once images are loaded
    }, 5000); // Simulating a 2-second load time
  }, []);

  useEffect(() => {
    // Initial auto-scroll to the bottom of the page when the component is loaded
    window.scrollTo(0, document.body.scrollHeight);  // Scroll to the bottom

    // Optional: If you want to use smooth scrolling to a specific element, you can do so like this:
    // document.getElementById('target-element')?.scrollIntoView({ behavior: 'smooth' });

    // Continuous scroll effect (optional)
    const intervalId = setInterval(() => {
      window.scrollBy(0, 1);  // Scroll down by 1px every 10ms
    }, 10);

    // Stop the scroll after a set period (e.g., 3 seconds)
    setTimeout(() => clearInterval(intervalId), 10000);

    // Cleanup on unmount
    return () => {
      clearInterval(intervalId); // Clear interval on unmount
    };
  }, []);

  return (
    <div className="App">
      {/* Conditionally render the loader */}
      {loading ? (
        <Loading />  // Show the loader while images are loading
      ) : (
        <YJBsite
          galleryImages={galleryImages}
        />
      )}
    </div>
  );
}

export default App;
