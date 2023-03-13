import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  value: {
    type: Number,
    required: false
  },
  type: {
    type: String,
    required: false
  }
})

export default mongoose.model('product', productSchema)