import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import People from "./components/Api/people";
import './App.css';

function App() {
  return (
   <div className="App">
     <Header />
     <Search />
     <People />
   </div>
  );
}

export default App;
