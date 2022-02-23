
import './App.css';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Feed } from './Feed';
import { Widget } from './Widget';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <SideBar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
  );
}

export default App;
