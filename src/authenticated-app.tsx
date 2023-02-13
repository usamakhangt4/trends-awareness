// import React from "react";
import Home from "./pages/Home";

interface AuthenticatedAppProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthenticatedApp = (props: AuthenticatedAppProps) => {
  const {isLoggedIn, setIsLoggedIn} = props;
  return <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
};
export default AuthenticatedApp;
