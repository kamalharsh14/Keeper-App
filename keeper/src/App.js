import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Notes from './Components/Notes';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
