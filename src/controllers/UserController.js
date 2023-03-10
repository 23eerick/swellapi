import User from '../models/userModel.js'

export const createUser = async (req, res) => {
  const { email, password, confirmPassword } = req.body

  try {
    if (await User.findOne({ email, password, confirmPassword }))
      return res.status(400).send({ error: 'User already exists, use another email' })

    if (!email) {
      return res.status(422).json({ error: 'Email is required' })
    }

    if (!password) {
      return res.status(422).json({ error: 'Password is required' })
    }

    if (!confirmPassword) {
      return res.status(422).json({ error: 'ConfirmPassword is required' })
    }

    if (password !== confirmPassword) {
      return res.status(422).json({ error: 'Passwords do not match' })
    }

    const newUser = await User.create(req.body)

    return res.send({ newUser })

  } catch (error) {
    return res.status(400).send({ error: 'Registration failed' })
  }
}

export const getUser = async (req, res) => {
  const users = await User.find({})

  return res.status(200).json(users)
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email, password })

  if (!user) {
    return res.status(400).json({ error: 'User not found' })
  }

  if (!email) {
    return res.status(422).json({ error: 'Email is required' })
  }

  if (!password) {
    return res.status(422).json({ error: 'Password is required' })
  }

  res.send({ user })
}