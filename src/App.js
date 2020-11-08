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

function App() {
  return (
    ReactDOM.render((
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
      </Router>),
      document.getElementById('root')
    )
  )
}
export default App;
