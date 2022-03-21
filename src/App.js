import "./App.css";
import ProfileCard from "./ProfileCard";
import profile from "./ProfileData/profile";

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
