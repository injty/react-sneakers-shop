import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {

  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://61ba468748df2f0017e5aa2b.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      })
  }, []);



  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block">
            <img src="/img/icons/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavoriteBtn={() => console.log('Add in favorite')}
              onPlusBtn={() => console.log('Add in basket')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
