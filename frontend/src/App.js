import React, { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import Friend from './routes/Friend';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Friend.getFriends();
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const updateFriend = async (updatedFriend) => {
    try {
      await Friend.updateFriend(updatedFriend);
      setData((prevData) =>
        prevData.map((friend) =>
          friend.id === updatedFriend.id ? updatedFriend : friend
        )
      );
    } catch (e) {
      console.log(e);
    }
  };

  const addFriend = async (newFriend) => {
    try {
      const response = await Friend.addFriend(newFriend);
      setData((prevData) => [...prevData, response.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteFriend = async (id) => {
    try {
      await Friend.deleteFriend(id);
      setData((prevData) => prevData.filter((friend) => friend.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}>
      <NavBar darkMode={darkMode} setDark={setDarkMode} />
      <div className="content-container">
        <Home
          darkMode={darkMode}
          data={data}
          updateFriend={updateFriend}
          addFriend={addFriend}
          deleteFriend={deleteFriend}
        />
      </div>
    </div>
  );
};

export default App;
