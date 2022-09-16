import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ loggedIn, children }) {
  if (!loggedIn) {
    return <Navigate to="/sign-in" replace={true} />
  }

  return children;
}

export default ProtectedRoute;