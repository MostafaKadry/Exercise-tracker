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
        <Route path='/exercise-tracker/edit/:id' Component={EditExercise} />
        <Route path='/exercise-tracker/create/' Component={CreateExercise} />
        <Route path='/exercise-tracker/user' Component={CreateUser} />
        <Route path="*" element="404 ... Page Not Found" />
      </Routes>
    </Router>
  );
}

export default App;
