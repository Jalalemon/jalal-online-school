import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Navbar/Nav';
import ListContainer from './Components/Student-list/ListContainer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <ListContainer></ListContainer>
    </div>
  );
}

export default App;
