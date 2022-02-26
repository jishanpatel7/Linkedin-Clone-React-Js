
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { SideBar } from './components/SideBar';
import { selectUser, loginUser, logoutUser } from './features/userSlice';
import { Feed } from './Feed';
import { auth } from './firebase';
import { Widget } from './Widget';
import { Profile } from './components/Profile';


function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {

      if (userAuth) {
        //already logged in
        dispatch(loginUser({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        //not logged in
        dispatch(logoutUser())
      }
    })
  }, []);
  return (
    <>
      {!user ? (
        <Login />
      ) : (

        <div className="App">
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widget />
            <Profile />
          </div>
        </div>
      )}
    </>
  );

}

export default App;
