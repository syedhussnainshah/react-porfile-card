import "./App.css";
import ProfileCard from "./Components/ProfileCard";
import profile from "./Api/profile";

function App() {
  return (
    <div className="App">
      <section className="container">
        <ProfileCard profile={profile} />
      </section>
    </div>
  );
}

export default App;
