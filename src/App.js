import './App.css';
import { Header } from "./components/header";
import { Main } from "./components/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main2 } from './components/Main2';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Test } from './components/Test';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={(
          <div>
            <Main></Main>
            <Main2></Main2>
          </div>
        )} />
        <Route path="/about" element={<About />} />
        <Route path="/test/:testparam" element={<Test />} />

      </Routes>
    </Router>

  );
}

export default App;
