import Table from "../components/Table/Table";
import React, {useState,useEffect} from "react";
import PortfolioForm from "../components/PortfolioForm/PortfolioForm";
import { Accordion } from "react-bootstrap";
import "./pages.css"

function DeFi(){
    const [dataTable, setDataTable] = useState([]);
    const [currentUser, setCurrentUser] = useState(null)
    const [formAmount, setFormAmount] = useState([])

    fetch("/me")
    .then((r)=> r.json())
    .then((data) => setCurrentUser(data.id))

    useEffect(() => {
      fetch('/defis')
        .then(res => res.json())
        .then(res => setDataTable(res))
        .catch(err => console.log(err))
    }, []);
    

    const headings = 
    ['Protocol Name', 'Provider','Token', 'APY']

    
    function handleInput(entry){
        setFormAmount(entry.target.value)

    }

    function renderDeFi(defi,index) {
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
                "defi_id": defi.id,
                "token_id": null,
                "investment_type": "defi",
                "amount": formAmount
            })
            })
            .then((r) => r.json())
            e.target.reset()
        }
        const apy = parseFloat(defi.apy)
        return(
            <tr key={index}>
                <td>{defi.name}</td>
                <td>{defi.provider}</td>
                <td>{defi.token}</td>
                <td>{apy.toFixed(2)+"%"}</td>
                <td> 
                <PortfolioForm handleSubmit={handlePortfolioAdd} handleChange={handleInput}/>
                </td>
            </tr>
        ) 
    }

    return(
    <div className="Defi">
        <h1 className="header">DeFi Protocols </h1>
        <Accordion className="description" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>
                DeFi is short for Decentralized Finance, which is a broad term referring to any blockchain-based project that seeks to fill regular financial activites in a decentralized manner. On Launchpad, DeFi protocols specifically encompass liquidity pools involving stablecoins.
                </Accordion.Body>
                <Accordion.Body> 
                Stablecoins are cryptocurrencies that are pegged to the US dollar, meaning that 1 stablecoin should always be exchangeable for 1 USD. 
                </Accordion.Body>
                <Accordion.Body>
                Liquidity pools are used to facilitate borrowing and transactions of stablecoins, and involves holders of stablecoins locking in their tokens into the pool, and taking ownership of a specific % of the pool, with the fees paid by users of the pools (borrowers and exchangers) being returned to the user in the form of interest. 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <hr/>
        <Table className="data_table" data={dataTable} render={renderDeFi} headings={headings} />
    </div>
    )
}

export default DeFi;