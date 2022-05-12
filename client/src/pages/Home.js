
import './home.css'
import { Card, CardGroup } from 'react-bootstrap';

function Home(){
    return(
        <div className="Home">
            <h1 className= "intro"> Welcome to Launchpad.Io!</h1>
            <h2 id="sub_intro">The crypto app designed to simplify crypto and DeFi investing for beginners</h2>
        
            <CardGroup className="card_group">
                <Card>
                <img variant="top" className="home_icon" src="./assets/bitcoin.png" />
                <Card.Body>
                <Card.Title className="home-title">Track Crypto Prices</Card.Title>
                <Card.Text className="home-text">
                    Use Launchpad as a one-stop app to track all of the most popular cryptocurrencies, with over 20 of the highest market cap tokens being supported on the site.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <img variant="top" className="home_icon" src="./assets/defi.png" />
                <Card.Body>
                <Card.Title className="home-title">Start Staking DeFi</Card.Title>
                <Card.Text>
                    DeFi is a dynamic and cutting edge field in the world of blockchain technology, cut down the knowledge barrier and get straight to investing in stable-coin staking pools. 
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <img variant="top" className="home_icon" src="./assets/portfolio.png" />
                <Card.Body>
                <Card.Title className="home-title">Chart Your Portfolio</Card.Title>
                <Card.Text>
                    Add any Crypto or DeFi investment to your portfolio, and see the current value of that, allowing you to keep track of what you hold in one location, as well as keep an eye on how your investments are doing.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

        </div>
    )
    // https://api.coingecko.com/api/v3/coins/bitcoin/history?date=22-04-2022
}

export default Home;