import React from 'react';

export const UserContext = React.createContext(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { auth: false })
export const HotelContext = React.createContext(localStorage.getItem('hotel') ? JSON.parse(localStorage.getItem('hotel')) : { hotel: null })
