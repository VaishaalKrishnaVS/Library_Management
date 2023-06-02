import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, author, pages, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{pages}</span>
            </div>
            <Button buttonType='inverted'>{author}</Button>
        </div>
    );
};

export default ProductCard;