import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Navigation from './components/navigation/Index'
import About from './components/about/Index'
import Resume from './components/resume/Index'
import Projects from './components/projects/Index'
import Contact from './components/contact/Index'
import Details from './components/details/Index'
// Bootstrap
import Container from 'react-bootstrap/Container'
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

function App() {
  return (
    ReactDOM.render((
      <I18nextProvider i18n={i18n}>
      <Router>
        <>
          <Container>
            <Navigation />
          </Container>
          <Route exact path="/" component={About} />
          <Route path="/about" component={Details} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </>
      </Router>
      </I18nextProvider>),
      document.getElementById('root')
    )
  )
}
export default App;
