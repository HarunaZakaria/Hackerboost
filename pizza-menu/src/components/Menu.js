import Pizza from "./Pizzas";
function Menu() {
  return (
    <div>
      <section className="menu">
        <h2>Our Menu</h2>
        <p>Check our delicious pizzas below</p>
        <div>
          <Pizza
            name="Focaccia"
            description="Delicious Italian flatbread topped wiith olive oil and herbs."
            price="$10"
            image="/pizzas/focaccia.jpg"
          />
          <Pizza
            name="Pizza Spinaci"
            description="Fresh Spinach, garlic, and mozzarella on a cripspy crust."
            price="13"
            image="pizzas/spinaci.jpg"
          />
          <Pizza
            name="Pizza Salamino"
            description="Spicy salami, tomato sauce, and mozzarella cheese."
            price="$9"
            image="pizzas/focaccia.jpg"
          />
        </div>
      </section>
    </div>
  );
}

export default Menu;
