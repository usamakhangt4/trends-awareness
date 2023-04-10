import Home from "./pages/Home";

interface AuthenticatedAppTypes {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthenticatedApp = (props: AuthenticatedAppTypes) => {
  const {setIsLoggedIn} = props;
  return <Home setIsLoggedIn={setIsLoggedIn} />;
};
export default AuthenticatedApp;
