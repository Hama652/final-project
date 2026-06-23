//product photo
function Img({ product, className }) {
  return <img src={product.image} alt={product.name} className={className} loading="lazy" />
}

export default Img
