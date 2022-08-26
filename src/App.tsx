import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
  SideBar, Aside, Navbar, Layout,
} from './components';
import {
  Dashboard, Skills, References, Projects, ContactForm,
} from './pages';
import { AuthProvider, ThemeProvider, TodosProvider } from './contexts';


export const App: FC = () => {
  return (
    <AuthProvider>
      <TodosProvider>
        <ThemeProvider>
          <BrowserRouter>

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

          </BrowserRouter>
        </ThemeProvider>
      </TodosProvider>
    </AuthProvider>
  );
};
