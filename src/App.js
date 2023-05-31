import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import data from "./data";


function App() {

  const pageElements = data.map(item => (
      <Page
        key={item.id}
        title={item.title}
        theme={item.theme}
        gif={item.gif}
      />
  ))

  return (
    <div className="container">
      <Header />
      {/*<h3 className="book-hint">Hint: tap the page over</h3>*/}
      {pageElements}
      <Footer />
    </div>
  )
}

export default App;
