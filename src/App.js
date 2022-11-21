import "./App.scss";
import ListaTareas from "./components/ListaTareas";

function App() {
  return (
    <div className="App">
      <div className="aplicacion-tareas">
        <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
          <ListaTareas />
        </div>
      </div>
    </div>
  );
}

export default App;
