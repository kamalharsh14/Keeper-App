import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Notes from './Components/Notes';
import NotesContent from './Components/NotesContent';

function notesContent(NotesContent){
  return (
    <Notes 
    key = {NotesContent.id}
    title = {NotesContent.title}
    content = {NotesContent.content}
    />
  );
}

function App() {
  return (
    <>
    <div className="container-fluid">
      <Header />
      {NotesContent.map(notesContent)}
    </div>
    <div>
      <Footer />
    </div></>
  );
}

export default App;
