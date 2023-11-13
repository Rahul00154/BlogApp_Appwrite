import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div className="App">
      <h1>Blog App with appwrite</h1>
    </div>
  );
}

export default App;
