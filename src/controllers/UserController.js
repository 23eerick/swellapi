import User from '../models/userModel.js'

export const createUser = async (req, res) => {
  const { email, password } = req.body

  try {
    if (await User.findOneAndDelete({ email, password }))
      return res.status(400).send({ error: 'User already exists' })

    const newUser = await User.create(req.body)

    return res.send({ newUser })

  } catch (error) {
    return res.status(400).send({ error: 'Registration failed' })
  }
}

export const authenticateUser = async (req, res) => {
  const { email, password, confirmPassword } = req.body

  const user = await User.findOne({ email, password, confirmPassword })

  if (!user)
    return res.status(400).send({ error: 'User not found' })


  res.send({ user })
}

export const getUser = async (req, res) => {
  const users = await User.find({})

  return res.status(200).json(users)
}
