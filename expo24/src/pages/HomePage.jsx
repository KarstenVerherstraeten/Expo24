import Timer from "../components/Timer";


function HomePage() {
  return (
    <div className="container">
      <div className="glass-panel">
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
        <div className="glass"></div>
      </div>
      <div className="content">
        <h2>Navigation</h2>
        <p>Home</p>
        <Timer></Timer>
      </div>
    </div>
  );
}

export default HomePage;
