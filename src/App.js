import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './user/Layout';
import { Home } from './user/Home';
import { Blogs } from './user/Blogs';
import { Contact } from './user/Contact';
import { Dashboard } from './admin/Dashboard';
import { Settings } from './admin/Settings';
import { NoPage } from './user/NoPage';
import { About } from './user/About';
import { Projects } from './user/Projects';




export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
