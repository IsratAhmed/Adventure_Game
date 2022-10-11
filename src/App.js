import {BrowserRouter} from "react-router-dom";

import Title from './Title';
import Instructions from './Instructions';
import GameContainer from './containers/GameContainer';
import Footer from './Footer';
import './App.css';

import NavbarComponent from './components/NavbarComponent';
import './NavbarComponent.css';

import './components/Game.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App" 
    style={{ backgroundImage: "url(/3_stormlord.jpeg)", 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      
      <header>
        {/* <NavBar /> */}
        <NavbarComponent/>
        <Title />
        <Instructions />
      </header>

      <main>
        <section>
          <GameContainer />
        </section>
      </main>

      <footer>
      <Footer/>
      </footer>
    </div>
    </BrowserRouter>
  )
  
}

export default App;
