import "./App.css";
import ProfileCard from "./Components/ProfileCard";
import profile from "./Api/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditForm from "./Components/EditForm";

function App() {
  return (
    <div className="App">
      <section className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProfileCard profile={profile} />} />
            <Route path="/edit" element={<EditForm />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
