import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "../components/Table/Table";
import PortfolioRemoval from "../components/PortfolioRemoval/PortfolioRemoval";

function YourPortfolio({prices}){
    const [portfolio, setPortfolio] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [defiName, setDefiName] = useState([])
    const [cryptoName, setCryptoName] = useState([])
    const [defiValue, setDefiValue] = useState(0)
    const [targetItem, setTargetItem] = useState([])

    let defi_arr = []
    let crypto_arr = []
    let counter = 0

    fetch("/me")
    .then((r)=> r.json())
    .then((data) => setCurrentUser(data.id))

    useEffect(() => {
        fetch("/portfolios/users/me")
            .then(res => res.json())
            .then(data => {
                setPortfolio(data)
                data.map((item)=> {
                if (item.investment_type === "defi"){
                    counter += item.amount
                    setDefiValue(counter)
                } else {
                    prices.map((price)=>{
                        if(price.id == item.token_id){
                            counter += price.data.usd*item.amount
                            setDefiValue(counter)
                        }
                    })
                }
                })
            })
            .catch(err => console.log(err))
    }, [prices]);

    const crypto_portfolio = portfolio.filter((item)=> item.investment_type == "token"
    )

    const defi_portfolio = portfolio.filter((item)=> item.investment_type == "defi"
    )
    
    useEffect(()=> 
    portfolio.map((item)=>{
        if (item.investment_type === "defi") { 
            fetch(`/defis/${item.defi_id}`)
            .then(res=>res.json())
            .then(data=> {
                let defi_full = {
                    ...item,
                    data: data
                  }
                  defi_arr.push(defi_full)
                  if (defi_arr.length === defi_portfolio.length) {
                    setDefiName(defi_arr)
                  }
            })
        } else {
            fetch(`/tokens/${item.token_id}`)
            .then(res=>res.json())
            .then(data=> {
                console.log(prices)
                prices.map((token)=>{
                    if(token.id == item.token_id) {
                        let crypto_full = {
                            ...item ,
                            data: data, 
                            prices: token.data
                        }
                        crypto_arr.push(crypto_full)
                    }
                })
                console.log(crypto_arr.length)
                if (crypto_arr.length === crypto_portfolio.length) {
                    setCryptoName(crypto_arr)
                }
            })
        }
    })
    ,[prices, portfolio])


    function render_defi(defi,index){
        function handleRemoveDefi(){
            fetch(`/portfolios/${defi.id}`,{
              method:"DELETE",
            }).then (()=>{
              setPortfolio(portfolio.filter(el=> {
                console.log("after delete", portfolio)
                return (el.id !==defi.id)
              }))       
            })
          }
        function handleText(e){
            setTargetItem(e.target.value)
            }

        function handleDefiSubmit(item){
            item.preventDefault()
            const selected = defi
            fetch(`/portfolios/${selected.id}`,{
                method:"PATCH", headers: {
                "Content-Type": "application/json",
                },body: JSON.stringify({
                    amount: targetItem
                }),
                })
                item.target.reset()
            
            }

        return(
            <tr key={index}>
                <td>{defi.data.name}</td>
                <td>{defi.amount}</td>
                <td> 
                <PortfolioRemoval handleRemove={handleRemoveDefi} handleChange={handleText} handleSubmit={handleDefiSubmit}/>
                </td>
            </tr>
        )
    }

    function render_crypto(crypto,index){
        function handleRemoveCrypto(){
            fetch(`/portfolios/${crypto.id}`,{
              method:"DELETE",
            }).then (()=>{
              setPortfolio(portfolio.filter(el=> {
                console.log("after delete", portfolio)
                return (el.id !== crypto.id)
              }))       
            })
          }
        function handleText(e){
            setTargetItem(e.target.value)
            }

        function handleCryptoSubmit(item){
            item.preventDefault()
            const selected = crypto
            fetch(`/portfolios/${selected.id}`,{
                method:"PATCH", headers: {
                "Content-Type": "application/json",
                },body: JSON.stringify({
                    amount: targetItem
                }),
                })
                item.target.reset()
            
            }

        const market_price = crypto.prices.usd * crypto.amount
        return(
            <tr key={index}>
                <td>{crypto.data.name}</td>
                <td>{crypto.amount}</td>
                <td>{"$"+market_price.toFixed(2)}</td>
                <td> 
                    <PortfolioRemoval handleRemove={handleRemoveCrypto} handleChange={handleText} handleSubmit={handleCryptoSubmit} />
                </td>
            </tr>
        )
    }

    const defi_headings = ["Investment Name", "Amount"]

    const crypto_headings = ["Investment Name", "Amount", "Current Value"]


    return(
        <>
            <h1 className="header">Your DeFi Portfolio</h1>
            <Table size="sm" data={defiName} render={render_defi} headings= {defi_headings}/>
            <h1 className="header">Your Crypto Portfolio</h1>
            <Table size= "sm" data={cryptoName} render={render_crypto} headings= {crypto_headings}/>
            <hr/>
            <h2 id="current_value"> Total current portfolio value: ${defiValue.toLocaleString("en-US")}</h2>
        </>
    )
}

export default YourPortfolio;