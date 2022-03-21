import "./App.css";
import ProfileCard from "./Components/ProfileCard";
import profile from "./Api/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormSection from "./Components/FormSection";

function App() {
  return (
    <div className="App">
      <section className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProfileCard profile={profile} />} />
            <Route path="/edit" element={<FormSection />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
