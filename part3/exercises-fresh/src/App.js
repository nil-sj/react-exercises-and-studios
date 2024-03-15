import MyProjects from './components/Projects';
import './App.css';
import HobbyIntroduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Needlepoint</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
  );
}

export default App;
