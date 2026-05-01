import Avator from "./components/Avator";
import Intro from "./components/Intro";
import SkillList from "./components/SkillList";

function App() {
  return (
    <div className="card">
      <Avator />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
