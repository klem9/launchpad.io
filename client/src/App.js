import React, { useEffect, useState } from "react";
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home';
import Coins from "./pages/Coins";
import Login from "./components/UserHandling/Login"; 
import YourPortfolio from "./pages/YourPortfolio";
import DeFi from "./pages/DeFi";
import Wallet from "./pages/Wallet";
import { Switch, Route, BrowserRouter } from "react-router-dom";


function App () {

  const [tokenData, setTokenData] = useState([]);
  const [tokenPriceData, setTokenPriceData] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  let arr = [];

  useEffect(()=>{
    fetch('/me')
    .then(r => {
      if(r.ok){
        r.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  useEffect(() => {
    fetch('/tokens')
      .then(res => res.json())
      .then(res => setTokenData(res))
      .catch(err => console.log(err))
  }, []);
  
  useEffect(()=> {
    // console.log("Mapping", dataTable)
    tokenData.map((token)=>{
      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token.api_identifier}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`)
      .then(res=> res.json())
      .then(data=>{
        let name = token.api_identifier
        let x = {
          ...token,
          data: data[name]
        }
        arr.push(x)
        if (arr.length === tokenData.length) {
          setTokenPriceData(arr)
        }
      })
  })
  },[tokenData])

  if(!currentUser) return <Login onLogin={setCurrentUser}/>

  return (
    <BrowserRouter>
    <NavBar user={currentUser} setUser={setCurrentUser} />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/coins">
        <Coins data = {tokenPriceData}/>
      </Route>
      <Route exact path="/defi">
        <DeFi />
      </Route>
      <Route exact path="/yourportfolio">
        <YourPortfolio prices = {tokenPriceData}/>
      </Route>
      <Route exact path="/yourwallet">
        <Wallet/>
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;