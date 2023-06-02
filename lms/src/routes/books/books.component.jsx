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
            searchFeild3: "",
            searchFeild4: "",
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

    onSearchType = (event) => {
        const searchFeild3 = event.target.value.toLowerCase();
        this.setState(() => {
            return { searchFeild3 };
        });
    };

    onSearchCategory = (event) => {
        const searchFeild4 = event.target.value.toLowerCase();
        this.setState(() => {
            return { searchFeild4 };
        });
    };

    render() {
        const { products, searchFeild, searchFeild2, searchFeild3, searchFeild4 } = this.state;
        const { onSearchChange, onSearchAuther, onSearchCategory, onSearchType } = this;

        const filteredCards = products.filter((product) => {
            return product.title.toLowerCase().includes(searchFeild) &&
                product.author.toLowerCase().includes(searchFeild2) &&
                product.type.toLowerCase().includes(searchFeild3)
                && (product.category + "").includes(searchFeild4)
                ;
        });

        const bookCount = filteredCards.length;

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
                        placeholder="search based on Author"
                    />
                    <SearchBox
                        className="search-box"
                        onChange={onSearchType}
                        placeholder="search based on Type"
                    />
                    <SearchBox
                        className="search-box"
                        onChange={onSearchCategory}
                        placeholder="search based on Year"
                    />
                    <h2 className='books-count'>Total Books Count : {bookCount}</h2>
                </div>

                <CardList products={filteredCards} />
            </div>

        );
    }

};

export default Shop;