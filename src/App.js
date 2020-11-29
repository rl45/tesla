
import './App.css';
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';
import SecondaryBar from './Components/SecondaryBar';
import Playbar from './Components/Playbar';

function App() {
  return (

    <div>
      <div className="bg container-grid">
        <TopBar></TopBar>
        <SecondaryBar></SecondaryBar>
        <Playbar></Playbar>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
