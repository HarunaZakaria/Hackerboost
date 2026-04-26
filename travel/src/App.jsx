import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import ParkingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <div>
        <Logo />
        <Form />
        <ParkingList />
        <Stats />
      </div>
    </>
  );
}

export default App;
