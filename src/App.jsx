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
        <div className="bg-gray-100 min-h-screen ">
          <div className="p-5 bg-white">
            <div className="  mx-auto flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">News App</h2>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-sm font-semibold text-white rounded hover:bg-red-700 focus:outline-none "
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
