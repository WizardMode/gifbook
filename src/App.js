import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

function App() {

  const cardElements = data.map(item => (
      <Card
        key={item.id}
        title={item.title}
        theme={item.theme}
        gif={item.gif}
      />
  ))

  return (
    <div>
      <Header />
      <section>
        {cardElements}
      </section>
      <Footer />
    </div>
  )
}

export default App;
