import { Component, useContext } from 'react';
import BOOK from '../../books-data.json'
import ProductCard from '../../components/product-card/product-card.component';
import SearchBox from '../../components/search-box/search-box.component';
import { ProductsContext } from '../../context/products.context';
import CardList from '../../components/card-list/card-list.component';

import './books.styles.scss';

class Shop extends Component {
    constructor() {
        super();

        this.state = {
            products: BOOK,
            searchFeild: "",
            searchFeild2: "",
        };
    }


    onSearchChange = (event) => {
        const searchFeild = event.target.value.toLowerCase();

        this.setState(() => {
            return { searchFeild };
        });
    };

    onSearchAuther = (event) => {
        const searchFeild2 = event.target.value.toLowerCase();
        this.setState(() => {
            return { searchFeild2 };
        });
    };

    render() {
        const { products, searchFeild, searchFeild2 } = this.state;
        const { onSearchChange, onSearchAuther } = this;

        const filteredCards = products.filter((product) => {
            return product.name.toLowerCase().includes(searchFeild) && product.author.toLowerCase().includes(searchFeild2);
        });


        return (
            <div>
                <div className='searchbox'>
                    <SearchBox
                        className="search-box"
                        onChange={onSearchChange}
                        placeholder="search based on Title"
                    />
                    <SearchBox
                        className="search-box"
                        onChange={onSearchAuther}
                        placeholder="search basead on author"
                    />
                </div>

                <CardList products={filteredCards} />
            </div>

        );
    }

};

export default Shop;