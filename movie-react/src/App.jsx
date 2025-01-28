import "./App.css";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};
function App() {
  return (
    <>
      <div className="card-container">
        <Card title="Movie 1" />
        <Card title="Movie 2" />
        <Card title="Movie 3" />
      </div>
    </>
  );
}

export default App;
