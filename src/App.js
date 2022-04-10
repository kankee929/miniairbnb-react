import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Card from "./Components/Card";
import Data from "./Components/Data";

function App() {
  const cardElements = Data.map((data) => {
    return (
      <Card
        key={data.id}
        coverImg={data.coverImg}
        title={data.title}
        stats={data.stats}
        location={data.location}
        price={data.price}
      />
    );
  });
  return (
    <div className="App">
      <NavBar />
      <Main />
      <section className="cards-list">{cardElements}</section>
    </div>
  );
}

export default App;
