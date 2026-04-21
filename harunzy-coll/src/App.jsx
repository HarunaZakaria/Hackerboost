import products from "./product";
import Product from "./components/Product";
import "./App.css";
function App() {
  console.log(products);

  return (
    <>
      <h1>Harunzy Collection</h1>
      {products.map((product, index) => (
        <div key={index}>
          <Product
            name={product.name}
            img={product.imgUrl}
            price={product.price}
          />
        </div>
      ))}
    </>
  );
}

//product function

// function  CreateProduct(product){
//   return(
//     {products.map((product) =>(
//       <div>

//       </div>
//     ))}
//   )
// }

export default App;
