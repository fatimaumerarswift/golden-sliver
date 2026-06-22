import mongoose from 'mongoose'

const marketPriceSchema = new mongoose.Schema({
  label:
  {
    type: String, required: true
  },
  price:
  {
    type: Number, required: true

  },
  change:
  {
    type: Number, required: true

  },
  type:
  {
    type: String, enum: ["currency", "percent"], default: "currency"
  },
  status:
  {
    type: String, default: null
  },
}, { timestamps: true })

export default mongoose.model("MarketPrice", marketPriceSchema)