import Title from './Title';
// import NavBar from './NavBar';
import Instructions from './Instructions';
import GameContainer from './containers/GameContainer';
import './App.css';
import Footer from './components/Footer';

import NavbarComponent from './components/NavbarComponent';
import './NavbarComponent.css';

import './components/Game.css'

function App() {
  return (
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
  )
}

export default App;
