import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, default: '' },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    image: { type: String, default: '' },
    badge: { type: String, default: '' },
    inStock: { type: Boolean, default: true },
    description: { type: String, default: '' },
    features: [{ type: String }],
  },
  { timestamps: true }
)

export default mongoose.model('Product', productSchema)
