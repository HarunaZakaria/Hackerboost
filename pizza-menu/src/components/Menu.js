import { use } from "react";
import { pizzaData } from "../data";
import Pizza from "./Pizzas";
function Menu() {
  return (
    <div>
      <section className="menu">
        <h2>Our Menu</h2>
        <p>Check our delicious pizzas below</p>
        <div className="grid-container">
          {pizzaData.map((item, index) => (
            <div key={index} className="grid-item">
              <Pizza
                name={item.name}
                description={item.ingredients}
                price={"$" + item.price}
                image={item.photoName}
              />
              <button className="grid-btn">Buy</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
