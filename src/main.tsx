import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import BTDemo from './pages/BehaviorTreeDemo.tsx'
import SchoolAndJams from './pages/SchoolAndJams.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/btdemo" element={<BTDemo />} />
      <Route path="/schooljams" element={<SchoolAndJams />} />
    </Routes>
  </BrowserRouter>
)
