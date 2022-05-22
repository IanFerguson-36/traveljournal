import "./App.css";
import Nav from "./Components/Nav";
import MainCard from "./Components/MainCard";
import Data from "./Data";

function App() {
  const card = Data.map((item) => {
    return <MainCard key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Nav />
      {card}
    </div>
  );
}

export default App;
