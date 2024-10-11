import express from "express"
const router = express.Router()
import { getData, getDeviation } from "../controller/coin.controller.js"


router.get('/stats',getData)
router.get('/deviation',getDeviation)

export default router