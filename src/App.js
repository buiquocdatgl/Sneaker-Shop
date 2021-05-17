
import './App.css';
import Header from './components/Header/index';
import Menu from './components/Header/Menu/index';
import Home from './components/homePage/index'

function App() {
  return (
    <>
      <Header />
      <Menu />
      <div className="ground-container">
        <div className="main-container">
            <Home />
        </div>
      </div>
    </>
  );
}

export default App;
