import API_URL from './config'

const API = `${API_URL}/api/cart`

export async function getCart(token) {
  const res = await fetch(API, { headers: { Authorization: `Bearer ${token}` } })
  return res.json()
}

export async function saveCart(token, cart) {
  await fetch(API, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ cart }),
  })
}
