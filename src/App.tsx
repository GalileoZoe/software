import React from 'react';
import './App.css';
import { FeedProvider } from './context/FeedContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Footer } from './components/Layout/Footer';
import { Layout } from './components/Layout/Layout';
import { NavBar } from './components/Layout/NavBar';
import { AuthProvider } from './context/AuthContext';
import { ServiceProvider } from './context/ServiceContext';


const Apps = () => {
  const { theme } = useTheme();

  const AppTheme = () => {
    switch (theme) {
      case 0:
        return 'AppWhite';
      case 1:
        return 'AppBlack';
      case 2:
        return 'AppRed';
      default:
        return 'App'; 
    }
  };

  return (
    <div className={AppTheme()}>
      <header className="App-header">
        <NavBar />
        <main className="main-content">
          <div className="body">
            <Layout />
          </div>
        </main>
        <Footer />
      </header>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
    <ThemeProvider>
      <FeedProvider>
        <ServiceProvider>
        <Apps />
        </ServiceProvider>
      </FeedProvider>
    </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
