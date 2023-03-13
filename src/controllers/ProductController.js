import Product from '../models/productModel.js'

export const createProducts = async (req, res) => {
  const { name, description, value, type } = req.body

  try {
    if (await Product.findOne({ name, description, value, type }))
      return res.status(400).send({ error: 'Product already exists, use another name' })

    if (!name) {
      return res.status(422).send({ error: 'Name is required' })
    }

    const newProduct = await Product.create(req.body)

    return res.send({ newProduct })

  } catch (error) {
    return res.status(422).send({ error: 'Registration failed' })
  }

}

export const getProducts = async (req, res) => {
  const products = await Product.find({})

  return res.status(200).json(products)
}

export const updateProducts = async (req, res) => {
  const { id } = req.body
  const { name } = req.body

  try {
    await Product.updateOne(id, req.body)

    if (!name) {
      return res.status(422).json({ message: 'Name is required' })
    }

    return res.status(200).json({ message: 'Product is updated' })

  } catch (error) {
    return res.status(422).send({ error: 'Atualization failed' })
  }
}

export const deleteProducts = async (req, res) => {
  const { id } = req.params

  try {
    const productDeleted = await Product.findByIdAndRemove(id)

    if (!productDeleted) {
      return res.status(422).json({ error: 'Product does not exists' })
    }
    return res.status(200).json({ message: 'Product deleted' })

  } catch (error) {
    return res.status(422).send({ error: 'Deleted failed' })
  }
}