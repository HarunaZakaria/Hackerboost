import Square from "./components/Square";
export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square title="1" />
        <Square title="2" />
        <Square title="3" />
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </div>
  );
}
