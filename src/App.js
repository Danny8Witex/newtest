
import Header from './components/header';
import Hero from './components/hero';
import Movies1 from './components/movies1';
import Movies2 from './components/movies2';
import Search from './components/search ';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Search />
     <Movies2 />
     <Movies1 />
    </div>
  );
}

export default App;
