import './App.css';
import Painting from './componets/Painting';
import paintings from './paintings.json';

const painting = paintings[0];

function App() {
  return (
    <div className="App">
      <Painting
        url={painting.url}
        title={painting.title}
        author={painting.author.tag}
        profileUrl={painting.author.url}
        price={painting.proce}
      />
    </div>
  );
}

export default App;
