import MarketPrice from '../model/marketprice.js'

export const getPrices = async (req, res) => {
  try {
    const prices = await MarketPrice.find().sort({ createdAt: 1 })
    res.json(prices)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const addPrice = async (req, res) => {
  try {
    const { label, price, change, type, status } = req.body
    const newPrice = await MarketPrice.create({ label, price, change, type, status })
    res.status(201).json(newPrice)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const updatePrice = async (req, res) => {
  try {
    const updated = await MarketPrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updated)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const deletePrice = async (req, res) => {
  try {
    await MarketPrice.findByIdAndDelete(req.params.id)
    res.json({ message: "Deleted successfully" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}