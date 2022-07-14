import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");
      const { events } = await res.json();

      setEventData(events);
      setIsLoading(false);
    };

    fetchEvent();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
};

export default App;
