import { useState } from "react";
import Login from "./components/LogIn";
import NewsList from "./components/NewsList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLogin = localStorage.getItem('currentLogin');
    return savedLogin !== null;
  });

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentLogin');
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <div className="p-4 bg-white shadow-xl">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">News App</h2>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
          <NewsList />
        </div>
      )}
    </>
  );
}

export default App;
