import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Coordinators from './pages/Coordinators';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coordinators" element={<Coordinators />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;