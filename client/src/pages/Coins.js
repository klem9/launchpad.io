import Table from "../components/Table/Table";
import React, {useState,useEffect} from "react";
import { Accordion } from "react-bootstrap";
import PortfolioForm from "../components/PortfolioForm/PortfolioForm";
import "./pages.css"


function Coins({data}){
    const [currentUser, setCurrentUser] = useState(null)
    const [formAmount, setFormAmount] = useState([])
    let arr = []

    fetch("/me")
    .then((r)=> r.json())
    .then((data) => setCurrentUser(data.id))

    function handleInput(entry){
      setFormAmount(entry.target.value)
  }

    function renderCoins(coin,index){
      function handlePortfolioAdd(e){
        e.preventDefault()
        fetch("/portfolios",{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"  ,
        },
        body: JSON.stringify({
            "user_id": currentUser,
            "defi_id": null,
            "token_id": coin.id,
            "investment_type": "token",
            "amount": formAmount
        })
        })
        .then((r) => r.json())
        e.target.reset()
    }
    const market_cap = parseInt(coin.data.usd_market_cap)
      return(
        <tr key={index}>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{"$"+(coin.data.usd).toFixed(2)}</td>
            <td>{"$"+ market_cap.toLocaleString("en-US")}</td>
            <td>{(coin.data.usd_24h_change).toFixed(2)+"%"}</td>
            <td> 
            <PortfolioForm handleSubmit={handlePortfolioAdd} handleChange={handleInput}/>
            </td>
        </tr>
    ) 

    }

    const headings = 
    ['Coin', 'Ticker','Current Price (USD)', 'Market Cap (USD)', '24 Hour Change (%)']

    return(
      <div className="Home">
        <h1 className="header">Cryptos </h1>
        <Accordion className="description" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                Cryptocurrencies are digital currencies secured by cryptography, and issued by specific groups, but usually issued to fund a project or to reward project users. Cryptocurrencies are also secured by blockchain technology, a decentralized network that validates transactions via specific proof protocols. The most popular of such protocol is called proof-of-work, where network participants utilize computing power to process transactions on a peer-to-peer level. In addition to aspects of traditional currency, cryptocurrencies may also entitle users to special rights from the issuing project.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Table className="data_table" data={data} render={renderCoins} headings= {headings} />
      </div>
    )
    // https://api.coingecko.com/api/v3/coins/bitcoin/history?date=22-04-2022
}

export default Coins;