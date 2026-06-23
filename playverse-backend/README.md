# PlayVerse Backend

Node + Express + MongoDB backend.

## Run it

1. Make sure MongoDB is running.
2. Install: `npm install`
3. Seed products (once): `npm run seed`
4. Start: `npm run dev`  -> http://localhost:5000

## API

Products:
- GET    /api/products       list (?category= &search= &sort=)
- GET    /api/products/:id   one
- POST   /api/products       add
- PUT    /api/products/:id   update
- DELETE /api/products/:id   delete

Auth:
- POST /api/auth/register    { name, email, password }
- POST /api/auth/login       { email, password }
- GET  /api/auth/me          (needs token)

Cart (needs token):
- GET /api/cart              get my cart
- PUT /api/cart              save my cart  { cart: [...] }

## Deployment notes
- Set MONGO_URI to your MongoDB Atlas connection string
- Set JWT_SECRET to a long random string
- Set CLIENT_URL to your deployed frontend URL
