import React, { useState, useEffect, useRef } from 'react';
import InputComponent from './components/InputComponent'
import Button from './components/Button'
import Profile from './components/Profile'
import HistoryTab from './components/HistoryTab'
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const inputRef = useRef(null);

  const fetchData = async () => {
    if (!username) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('User not found');
      const data = await response.json();
      setUserData(data);
      setSearchHistory([...new Set([username, ...searchHistory])]); 
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    setUsername(e.target.value);  
  };

  const handleSearch = () => {
    fetchData();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (username) fetchData();
    }, 500);
    return () => clearTimeout(timer);
  }, [username]);

  useEffect(() => {
    inputRef.current.focus();  // Set focus on the input
  }, []);

  return (
    <main className="app-container">
      <div className="upper-section">
        <div className="search-container">
          <InputComponent  
            inputRef={inputRef}
            handleInputChange={handleInputChange}
            username={username}
          />
          <Button handleSearch={handleSearch}/>
        </div>
        {error && <p className="error">{error}</p>}
        {searchHistory.length > 0 && <HistoryTab searchHistory={searchHistory} setUsername={setUsername}/>}
      </div>
      {userData && <Profile userData={userData} loading={loading} username={username}/>}
    </main>
  );
}

export default App;
