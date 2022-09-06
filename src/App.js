import "./App.scss";
import Cta from "./components/cta/Cta";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Last from "./components/last/Last";
import Preguntas from "./components/preguntas/Preguntas";
import Proceso from "./components/proceso/Proceso";
import Ventajas from "./components/ventajas/Ventajas";
import Video from "./components/video/Video";

function App() {
  return (
    <>
      <Header></Header>
      <Cta></Cta>
      <Preguntas></Preguntas>
      <Ventajas></Ventajas>
      <Video></Video>
      <Proceso></Proceso>
      <FAQ></FAQ>
      <Last></Last>
      <Footer></Footer>
    </>
  );
}

export default App;
