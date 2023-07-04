import './App.css';

function App(props) {
  return (
      <div className="App">
      <h1>Student Information:</h1>
      {props.studentinfo()}
    </div>
  );
}

export default App;
