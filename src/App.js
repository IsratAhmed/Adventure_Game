import Title from './Title';
import NavBar from './NavBar';
import GameContainer from './containers/GameContainer';

import './App.css';
import Instructions from './Instructions';

function App() {
  return (
    <div className="App" 
    style={{ backgroundImage: "url(/3_stormlord.jpeg)", 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <header>
        <NavBar />
        <Title />
        <Instructions />
      </header>
      <main>
        <section>
          <GameContainer />
        </section>
      </main>
    </div>
  )
}

export default App;
