import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const myFn = async function () {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDVPuT3KXYIa-o5a565_WGyiMVt5kR9_bc",
        {
          method: "post",
          header: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ idToken: document.cookie.split("=")[1] }),
        }
      );

      setIsLoggedin(res.ok);

      const data = await res.json();

      if (
        String(data.error?.code).startsWith("4") ||
        String(data.error?.code).startsWith("5")
      ) {
        setIsLoading(false);
        return;
      }

      setUser(data?.users[0]?.email);
      setIsLoading(false);
    };
    myFn();
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <>
      <Router>
        <Header
          getData={setIsLoggedin}
          user={user}
          isLoggedin={isLoggedin}
        ></Header>
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              {isLoggedin ? (
                <Redirect to="/"></Redirect>
              ) : (
                <Login getData={setIsLoggedin} getUser={setUser} />
              )}
            </Route>
            <Route path="/signup">
              {isLoggedin ? (
                <Redirect to="/"></Redirect>
              ) : (
                <Signup getData={setIsLoggedin} getUser={setUser} />
              )}
            </Route>
            <Route path="*">
              <p>404, no page found with the given URL</p>
            </Route>
          </Switch>
        </main>
        <Footer></Footer>
      </Router>
    </>
  );
}
