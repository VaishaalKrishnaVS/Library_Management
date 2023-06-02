import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    const { title, author, category, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${title}`} />
            <div className='footer'>
                <span className='name'>{title}</span>
            </div>
            <Button buttonType='inverted'>{author}</Button>
        </div>
    );
};

export default ProductCard;