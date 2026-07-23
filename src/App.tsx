import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import OurBeliefs from "./pages/OurBeliefs";
import Events from "./pages/Events";
import CoffeeWithPastors from "./pages/CoffeeWithPastors";
import Membership from "./pages/Membership";
import MinistryOfMen from "./pages/MinistryOfMen";
import MinistryOfWomen from "./pages/MinistryOfWomen";
import Sermons from "./pages/Sermons";
import TheApp from "./pages/TheApp";
import Articles from "./pages/Articles";
import BookList from "./pages/BookList";
import Give from "./pages/Give";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/beliefs" element={<OurBeliefs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/coffee" element={<CoffeeWithPastors />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/men" element={<MinistryOfMen />} />
        <Route path="/women" element={<MinistryOfWomen />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/app" element={<TheApp />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/give" element={<Give />} />
      </Route>
    </Routes>
  );
}
