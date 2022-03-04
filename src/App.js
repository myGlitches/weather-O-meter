import Navbar from "./components/Navbar";
import Cards from "./components/cards/Cards";
import Map from "./components/Map";
import SearchContainer from "./components/search/SearchContainer";

function App() {
  return (
      <div className="container">
      <div className="navbarDiv">
      <Navbar/>
      </div>
      <div className="subContainer">
      <div className="leftcontentsubContainer">
        <SearchContainer/>
        <div className="cards">
          <Cards/>
        </div>
      </div>
      <div className="rightcontentsubContainer">
        <div className="mapContainer">
          <Map/>
        </div>
        <div className="underMapContainer">
          <div className="underMapContainerText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla rhoncus lacinia vulputate. 
          Nulla vel sagittis diam. Sed at viverra sem. 
          Curabitur lobortis ornare justo, et pharetra lacus facilisis eget.
          Sed mollis massa ac sagittis tempor.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
