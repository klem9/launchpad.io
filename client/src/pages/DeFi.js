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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Table className="data_table" data={dataTable} render={renderDeFi} headings={headings} />
    </div>
    )
}

export default DeFi;