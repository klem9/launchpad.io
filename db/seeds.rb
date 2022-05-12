puts "Clearing db..."
User.destroy_all
Token.destroy_all
Defi.destroy_all
puts "📃 Seeding data..."

klem = User.create!(
    username: "klem",
    password_digest:"123"
)

bitcoin = Token.create(name:"Bitcoin", symbol:"BTC",api_identifier:"bitcoin")
ethereum = Token.create(name:"Ethereum", symbol:"ETH", api_identifier:"ethereum")
binance = Token.create(name:"Binance Coin", symbol:"BNB", api_identifier:"binancecoin")
solana = Token.create(name:"Solana", symbol:"SOL", api_identifier:"solana")
ripple = Token.create(name:"Ripple", symbol:"XRP", api_identifier:"ripple")
cardano = Token.create(name:"Cardano", symbol:"ADA", api_identifier:"cardano")
dogecoin = Token.create(name:"Dogecoin", symbol:"DOGE", api_identifier:"dogecoin")
avalanche = Token.create(name:"Avalanche", symbol:"AVAX", api_identifier:"avalanche-2")
polkadot = Token.create(name:"Polkadot", symbol:"DOT", api_identifier:"polkadot")
shibainu = Token.create(name:"Shiba Inu", symbol:"SHIB", api_identifier:"shiba-inu")
cronos = Token.create(name:"Cronos", symbol:"CRO", api_identifier:"crypto-com-chain")
polygon = Token.create(name:"Polygon", symbol:"MATIC", api_identifier:"matic-network")
near = Token.create(name:"Near Protocol", symbol:"NEAR", api_identifier:"near")
litecoin = Token.create(name:"Litecoin", symbol:"LTC", api_identifier:"litecoin")
tron = Token.create(name:"Tron", symbol:"TRX", api_identifier:"tron")
apecoin = Token.create(name:"ApeCoin", symbol:"APE", api_identifier:"apecoin")
cosmos = Token.create(name:"Cosmos Hub", symbol:"ATOM", api_identifier:"cosmos")
chainlink = Token.create(name:"Chainlink", symbol:"LINK", api_identifier:"chainlink")
bitcoin_cash = Token.create(name:"Bitcoin Cash", symbol:"BCH", api_identifier:"bitcoin-cash")
uniswap = Token.create(name:"Uniswap", symbol:"UNI", api_identifier:"uniswap")
ftx = Token.create(name:"FTX Token", symbol:"FTT", api_identifier:"ftx-wormhole")
# stellar = Token.create(name:"Stellar", symbol:"XLM", api_identifier:"stellar")
# algorand = Token.create(name:"Algorand", symbol:"ALGO", api_identifier:"algorand")
# monero = Token.create(name:"Monero", symbol:"XMR", api_identifier:"monero")
# filecoin = Token.create(name:"Filecoin", symbol:"FIL", api_identifier:"filecoin")
# hedera = Token.create(name:"Hedera", symbol:"HBAR", api_identifier:"hedera-hashgraph")
# internetcomputer = Token.create(name:"Internet Computer", symbol:"ICP", api_identifier:"internet-computer")
# vechain = Token.create(name:"VeChain", symbol:"VET", api_identifier:"vechain")
# decentraland = Token.create(name:"Decentraland", symbol:"MANA", api_identifier:"decentraland")
# sandbox = Token.create(name:"The Sandbox", symbol:"SAND", api_identifier:"the-sandbox")
# fantom = Token.create(name:"Fantom", symbol:"FTM", api_identifier:"fantom")
# curve = Token.create(name:"Curve Token", symbol:"CRV", api_identifier:"curve-dao-token")
# helium = Token.create(name:"Helium", symbol:"HNT", api_identifier:"helium")
# aave = Token.create(name:"Aave", symbol:"AAVE", api_identifier:"aave")
# compound = Token.create(name:"Compound", symbol:"COMP", api_identifier:"compound-coin")
# yearn = Token.create(name:"yearn.finance", symbol:"YFI", api_identifier:"yearn-finance")
# uniswap = Token.create(name:"Uniswap", symbol:"UNI", api_identifier:"uniswap")

gemini_gusd = Defi.create(name:"Gemini GUSD", provider:"Gemini",token:"GUSD",apy:"6.9%")
gemini_dai = Defi.create(name:"Gemini DAI", provider:"Gemini",token:"DAI",apy:"6.43%")
gemini_usdc = Defi.create(name:"Gemini USDC", provider:"Gemini",token:"USDC",apy:"6.36%")
compound_dai = Defi.create(name:"Compound DAI", provider:"Compound",token:"DAI",apy:"3.26%")
compound_tether = Defi.create(name:"Compound Tether", provider:"Compound",token:"USDT",apy:"4.06%")
compound_usdc = Defi.create(name:"Compound USDC", provider:"Compound",token:"USDC",apy:"5.21%")
cryptocom_usdc = Defi.create(name:"Crypto.com USDC", provider:"Crypto.com",token:"USDC",apy:"8.0%")
cryptocom_tether = Defi.create(name:"Crypto.com Tether", provider:"Crypto.com",token:"USDT",apy:"8.0%")
cryptocom_dai = Defi.create(name:"Crypto.com DAI", provider:"Crypto.com",token:"DAI",apy:"8.0%")
binance_usdc = Defi.create(name:"Binance USDC", provider:"Binance",token:"USDC",apy:"2.79%")
binance_usdt = Defi.create(name:"Binance Tether", provider:"Binance",token:"USDT",apy:"3.12%")
binance_dai = Defi.create(name:"Binance Dai", provider:"Binance",token:"DAI",apy:"3.78%")

puts "✅ Done seeding"