import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedDetail, Form, ListFeeds, Navbar, Footer } from './components';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<ListFeeds />} />
          <Route path="/detail/:id" element={<FeedDetail />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
