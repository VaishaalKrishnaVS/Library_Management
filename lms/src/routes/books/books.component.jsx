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
        };
    }


    onSearchChange = (event) => {
        const searchFeild = event.target.value.toLowerCase();

        this.setState(() => {
            return { searchFeild };
        });
    };
    render() {
        const { products, searchFeild } = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = products.filter((product) => {
            return product.author.toLowerCase().includes(searchFeild);
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
                    onChange={onSearchChange}
                    placeholder="search basead on author"
                   />  
                </div>
                
                <CardList products={filteredMonsters}/>
            </div>

        );
    }

};

export default Shop;