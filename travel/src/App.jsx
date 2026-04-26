import "./App.css";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Form from "./components/Form";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];
function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <PackingList initialItems={initialItems} />
        <Stats />
      </div>
    </>
  );
}

export default App;
