import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <h3 className="book-hint">Hint: turn the page over</h3>
      <Page 
        title="That was fun 🎉"
        theme="rat"
        gif="gify-rat"
      />
      <Page
        title="How happy I'm for you 😻"
        theme="lizard"
        gif="gify-lizard"
      />
      <Page
        title="Give all you got 💪"
        theme="rooster"
        gif="gify-rooster"
      />
      <Page
        title="Enjoy the ride 🕹️"
        theme="penguin"
        gif="gify-penguin"
      />
      <Page
        title="For reals 🧚"
        theme="frog"
        gif="gify-frog"
      />
      <Page
        title="You got this ⚡"
        theme="whale"
        gif="gify-whale"
      />
      <Page
        title="Always 👑"
        theme="lady"
        gif="gify-lady"
      />
      <Footer />
    </div>
  )
}

export default App;
