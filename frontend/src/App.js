import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar";
import ExerciseList from "./components/exercise-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path='/Exercise-tracker' exact Component={ExerciseList} />
        <Route path='/edit/:id' Component={EditExercise} />
        <Route path='/create/' Component={CreateExercise} />
        <Route path='/user' Component={CreateUser} />
        <Route path="*" element="Not Found" />
      </Routes>
    </Router>
  );
}

export default App;
