import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Newsletter from './pages/Newsletter';
import Team from './pages/Team';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetail />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

