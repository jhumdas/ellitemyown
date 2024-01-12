import React from 'react';
import { useNavigate } from 'react-router-dom';
import successGif from '../../assets/success.gif';
import crossGif from '../../assets/cross.gif';

const AlertScreen = ({ confirmationText, btnText, navigateLink, error = false }) => {
  const navigate = useNavigate();
  return (
    <div
      className="text-focus-in"
      style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <img src={error ? crossGif : successGif} alt="" />
      <h3 className="mt-3">{confirmationText || (error ? 'Action Unsuccessfull' : 'Action Successfull')}</h3>
      <button
        type="button"
        className="btn btn-warning btn-lg mt-2"
        style={{ fontSize: '20px', color: '#495057' }}
        onClick={e => {
          e.preventDefault();
          navigate(navigateLink || '/login');
        }}
      >
        {btnText || 'Okay'}
      </button>
    </div>
  );
};

export default AlertScreen;
