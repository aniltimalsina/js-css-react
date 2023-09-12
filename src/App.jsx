import "./styles.css";

const keyWord = "website";
let highlight = "Amazing";
const myName = "Anil Timalsina";

function App() {
  return (
    <>
      <header className="header">
        <h1>Welcome to Our Website</h1>
        <p>The Amazing {keyWord} you have ever seen</p>
      </header>

      <section className="sectionOne">
        <h2>Section 1</h2>
        <p>{highlight} Content</p>
      </section>

      <section className="sectionTwo">
        <h2>Section 2</h2>
        <p>Another {highlight} Content</p>
      </section>

      <section className="sectionThree">
        <h2>Section 3</h2>
        <p>Once again {highlight} Content</p>
      </section>

      <footer className="footer">
        <p>&copy; 2023 {myName}</p>
      </footer>
    </>
  );
}

export default App;
