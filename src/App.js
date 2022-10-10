import Title from './Title';
import NavBar from './NavBar';
import Instructions from './Instructions';
import GameContainer from './containers/GameContainer';
import './App.css';

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
