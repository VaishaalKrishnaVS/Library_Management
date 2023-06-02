import ProductCard from "../product-card/product-card.component";
import './card-list.styles.scss'

const CardList = ({ products }) => (
    <div className="card-list">
        {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
        })}
    </div>
);

export default CardList;

{/* <div className='products-container'>
    {products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))}
</div> */}