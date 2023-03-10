import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true
  },
  confirmPassword: {
    type: Number,
    required: true
  }
})


export default mongoose.model('User', userSchema)