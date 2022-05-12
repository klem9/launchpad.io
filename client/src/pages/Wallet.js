import CoinKey from 'coinkey';
import { useState } from 'react';

function Wallet(){


        var wallet = new CoinKey.createRandom();
        const private_key = wallet.privateKey.toString('hex');
        const public_key = wallet.publicAddress

    // fetch(`http://localhost:3001/api/v2/create`,{
    //     method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"  ,
    //     },
    //     body: JSON.stringify({
    //         "password": "Klemloh99@test",
    //         "api-code": "4d275ab9-284b-4a9a-ad18-f049f44e65e3",
    //         "email": "klemenseloh@gmail.com",
    //         "label": "test",
    //         "priv": private_key
    //     })
    // })

    fetch(`https://api.blockcypher.com/v1/eth/main/addrs`,{
        method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"  ,
        }
    })
    .then(res =>res.json())
    .then(data => console.log(data))




    return(
        <>
        {/* 4d275ab9-284b-4a9a-ad18-f049f44e65e3 */}
        <p> hello</p>
        </>
    )
}

export default Wallet