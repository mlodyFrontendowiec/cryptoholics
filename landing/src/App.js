import About from "./comopnents/About/About";
import Header from "./comopnents/Header/Header";

function App() {
  const handleBackClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Header />
      {/* <Banner /> */}
      <About />
    </div>
  );
}

export default App;
