import Header from "./components/Header";
import TasksList from "./components/TasksList";

function App() {
  const styleContainer = {
    width: "700px",
    margin: "auto",
    border: "4px solid #ccc",

    textAlign: "center",
  };
  return (
    <>
      <div className="container" style={styleContainer}>
        <Header />
        <TasksList />
      </div>
    </>
  );
}

export default App;
