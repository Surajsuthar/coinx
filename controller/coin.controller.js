import { Coins } from "../models/coin.model.js";
import { coinData , storeInDb} from "../service/coindata.js"

const getData = async (req,res) => {
    try {
        const { coin } = req.body;
        const data = await coinData(coin)
        await storeInDb(coin)
        res.status(200).json({
            price: data[0].current_price,
	        marketCap: data[0].market_cap,
	        "24hChange": data[0].market_cap_change_percentage_24h
        })
    } catch (error) {
        throw new error;
    }
}

const getDeviation = async (req,res) => {
    const { coin } = req.body;
    const data = await Coins.findOne({
        nama:coin
    })
    
}

export { getData, getDeviation}