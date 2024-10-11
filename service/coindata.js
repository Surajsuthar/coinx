import axios from "axios";
import { Coins } from "../models/coin.model.js"
import { Data } from "../models/data.model.js"

const coinData = async (coin) => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}&price_change_percentage=1h%2C24h%2C7d`)
    return await res.data
}

const storeInDb = async (coin) => {
    const data = await coinData(coin)
    const coins = await Coins.findOne({name : coin})
    const newData = await Data.create({
        price : data[0].current_price,
        marketCap : data[0].market_cap,
        Change24H : data[0].market_cap_change_percentage_24h
    })
    if(coins){
        coins.data.push(newData._id)
        await coins.save()
    }else{
        Coins.create({
            name : coin,
            data : [newData._id]
        })
    }
}

export { coinData , storeInDb }