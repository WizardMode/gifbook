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
    <div>
      <Header />
      {pageElements}
      <Footer />
    </div>
  )
}

export default App;
