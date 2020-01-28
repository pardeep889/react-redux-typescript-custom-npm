import React from 'react';

interface ArrowProps {
}

const Guest = (props: ArrowProps) => {

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.95909 11.9716C0.975373 6.47141 5.3147 0 11.9865 0C18.6583 0 22.9976 6.47141 20.0139 11.9716L11.9865 24L3.95909 11.9716Z" 
      fill="#F89ABA"/>
    <path d="M12.0135 0C18.6853 0 23.0246 6.47141 20.0409 11.9716L12.0135 24C12.0137 11.9716 12.0133 11.9716 12.0135 0Z" 
      fill="#8E1537"/>
    <circle cx="12" cy="9" r="4" fill="#EA0029"/>
    </svg>
  )
}

export default Guest;

