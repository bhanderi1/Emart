// AuthButtons.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './AuthActions';

const AuthButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.currentUser);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/'); // Redirect to home after logging out
  };

  return (
    <div className="max-xl:pr-0 ml-2 pr-2 flex gap-2 items-center">
      {currentUser && (
        <span className="text-sm text-gray-700 hidden md:inline">
          Hello, {currentUser.name}
        </span>
      )}
      {currentUser ? (
        <button
          onClick={handleLogout}
          className="text-sm px-3 py-1 border rounded-md hover:bg-gray-200"
        >
          Logout
        </button>
      ) : (
        <>
          <button
            onClick={() => navigate('/login')}
            className="text-sm px-3 py-1 border rounded-md hover:bg-gray-200"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="text-sm px-3 py-1 border rounded-md hover:bg-gray-200"
          >
            Register
          </button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
