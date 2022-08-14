import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  SideBar, Aside, Navbar, Layout,
} from './components';
import {
  Dashboard, Skills, References, Projects, ContactForm,
} from './pages';


export const App: FC = () => {
  return (
    <Layout>
      <SideBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/my-skills" element={<Skills />} />
        <Route path="/references" element={<References />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      <Aside />
    </Layout>
  );
};
