import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
