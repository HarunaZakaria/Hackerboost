import { use } from "react";
import { pizzaData } from "../data";
import Pizza from "./Pizzas";
function Menu() {
  return (
    <div>
      <section className="menu">
        <h2>Our Menu</h2>
        <p>Check our delicious pizzas below</p>
        <div>
          {pizzaData.map((item, index) => (
            <div key={index}>
              <Pizza
                name={item.name}
                description={item.ingredients}
                price={item.price}
                image={item.photoName}
                btn={<PizzaBtn />}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function PizzaBtn() {
  return (
    <div>
      <button>Click Me</button>
    </div>
  );
}
export default Menu;
