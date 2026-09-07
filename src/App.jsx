import ProfileCard from "./components/ProfileCard";
import ClickTracker from "./components/ClickTracker";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">React + Vite Assignment</p>
        <h1>Components, Props & State</h1>
        <p className="intro">
          A small React application demonstrating reusable components,
          props, state and event handling.
        </p>
      </header>

      <section>
        <div className="section-heading">
          <span>01</span>
          <div>
            <p className="eyebrow">Components + Props</p>
            <h2>Profile Cards</h2>
          </div>
        </div>

        <div className="card-grid">
          <ProfileCard name="Stephanie" role="Web Developer" email="stephanie@gmail.com" />
          <ProfileCard name="Paw" role="UX Designer" email="paw@gmail.com" />
        </div>
      </section>

      <section>
        <div className="section-heading">
          <span>02</span>
          <div>
            <p className="eyebrow">State + Events</p>
            <h2>Click Tracker</h2>
          </div>
        </div>
        <ClickTracker />
      </section>

      <section>
        <div className="section-heading">
          <span>03</span>
          <div>
            <p className="eyebrow">State + User Input</p>
            <h2>Shopping List</h2>
          </div>
        </div>
        <ShoppingList />
      </section>
    </main>
  );
}
