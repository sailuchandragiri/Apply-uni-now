import { Country } from "./components/Country";
import { Header } from "./components/Header";
import { UniversityLogos } from "./components/UniversityLogos";

function App() {
  return (
    <div>
      <Header />
      <UniversityLogos/>
      <Country />
      <UniversityLogos/>
    </div>
  );
}

export default App;
