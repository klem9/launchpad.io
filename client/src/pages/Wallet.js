import CoinKey from 'coinkey';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import "./pages.css"
import Table from '../components/Table/Table';

function Wallet(){
    const [ethDetails, setEthDetails]= useState([])
    const [btcPrivate, setBtcPrivate]= useState([])
    const [btcPublic, setBtcPublic]= useState([])
    

    function generateBtcAddress(){ 
        const wallet = new CoinKey.createRandom();
        const private_key = wallet.privateKey.toString('hex');
        const public_key = wallet.publicAddress

        setBtcPrivate(private_key)
        setBtcPublic(public_key)

        }

    function generateEthAddress(){
        fetch(`https://api.blockcypher.com/v1/eth/main/addrs?token=e9022ea01faa43a0b030a79534ca06fe`,{
            method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"  ,
            }
        })
        .then(res =>res.json())
        .then(data => setEthDetails(data))
    }


    return(
        <>
        {/* 4d275ab9-284b-4a9a-ad18-f049f44e65e3 */}
        <h1 className="header"> Generate wallet addresses</h1>
        <hr/>
        <div className="wallet_section"> 
            <h2>Bitcoin </h2>
            <Button className="generate_button" onClick={generateBtcAddress}> Click to generate bitcoin address</Button>
            <p className="wallet_generate_text"> Public bitcoin address key, you can deposit your bitcoin using this wallet address: {btcPublic}</p>
            <p className="wallet_generate_text"> Private bitcoin key, do not share this with anyone: {btcPrivate}</p>
        </div>
        <hr/>
        <div className="wallet_section"> 
            <h2>Ethereum </h2>
            <Button className="generate_button" onClick={generateEthAddress}> Click to generate bitcoin address</Button>
            <p className="wallet_generate_text">Public ethereum key: {ethDetails.public}</p>
            <p className="wallet_generate_text">Private ethereum key, do not share this with anyone: {ethDetails.private}</p>
            <p className="wallet_generate_text">Ethereum address for deposits: {ethDetails.address}</p>
        </div>
        </>
    )
}

export default Wallet