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
                description={item.description}
                price={item.price}
                image={item.photoName}
              />
            </div>
          ))}
          <Pizza
            name={pizzaData[0].name}
            description={pizzaData[0].description}
            price={pizzaData[0].price}
            image={pizzaData[0].photoName}
          />
          {/* <Pizza
            name="Focaccia"
            description="Delicious Italian flatbread topped wiith olive oil and herbs."
            price="$10"
            image="/pizzas/focaccia.jpg"
          /> */}
        </div>
      </section>
    </div>
  );
}

export default Menu;
