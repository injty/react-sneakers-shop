import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

const arr = [
  { name: 'Nike Blazer Mid Suede Green', price: '12999', imageUrl: '/img/sneakers/1.jpg' },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: '16999', imageUrl: '/img/sneakers/2.jpg' },
  { name: 'Nike Blazer Mid Suede White', price: '13999', imageUrl: '/img/sneakers/3.jpg' },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '11999', imageUrl: '/img/sneakers/4.jpg' },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block">
            <img src="/img/icons/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
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
