import images from '../data/images'
import API_URL from './config'

const API = `${API_URL}/api/products`

//swap the image name from the db for the real local image
function withImage(p) {
  return { ...p, id: p._id, image: images[p.image] || images.dualshock }
}

export async function fetchProducts(params = '') {
  const res = await fetch(API + params)
  const data = await res.json()
  return data.map(withImage)
}

export async function fetchProduct(id) {
  const res = await fetch(`${API}/${id}`)
  const data = await res.json()
  return withImage(data)
}
