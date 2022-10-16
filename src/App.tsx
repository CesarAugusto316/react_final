import { FC } from 'react';
import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import '@animxyz/core';
import { XyzTransition } from '@animxyz/react';
import {
  SideBar, Aside, Navbar, Layout,
} from './components';
import {
  Dashboard, Skills, References, Projects, ContactForm,
} from './pages';
import { AuthProvider, ThemeProvider, TodosProvider } from './contexts';


export const App: FC = () => {
  const location = useLocation();
  return (
    <AuthProvider>
      <TodosProvider>
        <ThemeProvider>

          <Layout>
            <SideBar />
            <Navbar />
            <XyzTransition
              appear
              xyz="fade in-down-25% out-up-25% duration-4 ease-out"
              mode="out-in"
            >
              <div key={location.key}>
                <Routes location={location}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/my-skills" element={<Skills />} />
                  <Route path="/references" element={<References />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<ContactForm />} />
                </Routes>
              </div>
            </XyzTransition>
            <Aside />
          </Layout>

        </ThemeProvider>
      </TodosProvider>
    </AuthProvider>
  );
};
