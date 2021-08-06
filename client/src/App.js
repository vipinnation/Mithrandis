import Navbar from "./Component/Utility/Navbar";
import './assets/css/tailwindcss.css'
import './assets/css/tiny-slider.css'
import './assets/css/animate.css'
import './assets/fonts/lineicons/font-css/LineIcons.css'
import './assets/css/file.css'
import '../node_modules/tailwindcss/dist/tailwind.min.css'
import './assets/css/mobile.css'
import { Switch, Route } from 'react-router-dom'

import HomeComponent from "./Component/PublicComponent/HomeComponent";
import Footer from "./Component/Utility/Footer";
import AboutComponent from "./Component/PublicComponent/AboutComponent";
import QuizInstruction from "./Component/QuizComponent/QuizInstruction";
import QuizQuestion from "./Component/QuizComponent/QuizQuestion";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeComponent} />
        <Route exact path='/about' component={AboutComponent} />

        <Route exact path='/quiz/instruction' component={QuizInstruction} />
        <Route exact path='/play' component={QuizQuestion} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
