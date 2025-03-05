import Greeting from "./components/Greeting";
import ThemeToggle from "./components/ThemeToggle";
import LoginMessage from "./components/LoginMessage";
import TodoList from "./components/TodoList";

function App(){

  const isLoggedIn = true;
  const todos = ["Study", "Eat", "Sleep" , "Walk" , "Read" , "Relax"];
  return (
    <div>

    <Greeting name="Juho" />
    <ThemeToggle />
    <LoginMessage isLoggedIn={isLoggedIn} />
    <TodoList todos={todos} />

    </div>
  );
}


export default App;
