import React from 'react'
import './searchResults.css'
import { SearchBar } from '../components/SearchBar';

interface SearchResultsProps {

}

export const SearchResults: React.FC<SearchResultsProps> = ({}) => {
        return (
            <div className="SearchResults">
                <div className="SearchBar">
                    <SearchBar />
                </div>
                <div className="Header">
                    Search Results
                </div>
                <div className="Container">
                    <div className="Filters">
                        <div className="Filter">
                            <div className="FilterHeader">
                                <span className="FilterName">BRAND</span>
                                <img src="./expandIcon.png" alt="Expand" className='ExpandIcon'/>
                            </div>
                            <div className="FilterOptions">
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='checkbox' name='Mango' value='Mango'/> 
                                    <label htmlFor="Mango">Mango</label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='checkbox' name='H&M' value= 'H&M' />
                                    <label htmlFor="H&M">H&M</label>
                                </div>
                            </div>
                        </div>
                        <div className="Filter">
                            <div className="FilterHeader">
                                <span className="FilterName">PRICE RANGE</span>
                                <img src="./expandIcon.png" alt="Expand" className='ExpandIcon'/>
                            </div>
                            <div className="FilterOptions">
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='checkbox' name='<500' value='500'/> 
                                    <label htmlFor="<500">Under 500</label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='checkbox' name='<1000' value= '1000' />
                                    <label htmlFor="<1000">500 to 1000</label>
                                </div>
                            </div>
                        </div>
                        <div className="Filter">
                            <div className="FilterHeader">
                                <span className="FilterName">RATINGS</span>
                                <img src="./expandIcon.png" alt="Expand" className='ExpandIcon'/>
                            </div>
                            <div className="FilterOptions">
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='checkbox' name='5*' value='5'/> 
                                    <label htmlFor="5*">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='checkbox' name='5*' value='5'/> 
                                    <label htmlFor="5*">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='checkbox' name='5*' value='5'/> 
                                    <label htmlFor="5*">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='checkbox' name='5*' value='5'/> 
                                    <label htmlFor="5*">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='checkbox' name='5*' value='5'/> 
                                    <label htmlFor="5*">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                        <span className="fa fa-star unchecked"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Products">
                        Products
                    </div>
                </div>
            </div>
        );
}