import React, { useState } from 'react'
import './searchResults.css'
import { SearchBar } from '../components/SearchBar';
import { GetRatingsUI } from '../components/GetRatingsUI';
import { Product } from '../Models/Product';

interface SearchResultsProps {

}

export const SearchResults: React.FC<SearchResultsProps> = ({}) => {
        const [products, setproducts] = useState<[Product]>();
        
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
                                    <input className='FilterCheckbox' id = "Mango" type='radio' name='brand' value='Mango'/> 
                                    <label htmlFor="Mango">Mango</label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' id = "H&M" type='radio' name='brand' value= 'H&M' />
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
                                    <input className='FilterCheckbox' id = "price500" type='radio' name='price' value='500'/> 
                                    <label htmlFor="price500">Under 500</label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' id = "price1000" type='radio' name='price' value= '1000' />
                                    <label htmlFor="price1000">500 to 1000</label>
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
                                    <input className='FilterCheckbox' type='radio' name='rating' id = "5*" value='5'/> 
                                    <label htmlFor="5*">
                                        <GetRatingsUI Rating={5}/>
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='radio' name='rating' id = "4*" value='4'/> 
                                    <label htmlFor="4*">
                                        <GetRatingsUI Rating={4}/>
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='radio' name='rating' id = "3*" value='3'/> 
                                    <label htmlFor="3*">
                                        <GetRatingsUI Rating={3}/> 
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='radio' name='rating' id = "2*" value='2'/> 
                                    <label htmlFor="2*">
                                        <GetRatingsUI Rating={2}/> 
                                    </label>
                                </div>
                                <div className="FilterOption">
                                    <input className='FilterCheckbox' type='radio' name='rating' id = "1*" value='1'/> 
                                    <label htmlFor="1*">
                                        <GetRatingsUI Rating={1}/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Products">
                        <div className="Product">
                            <div className="ProductImgWrapper">
                                <img className='ProductImg' src="./Background.jpg" alt="" />
                            </div>
                            <div className="ProductName">Name</div>
                            <div className="ProductPrice">
                                <span className='OriginalPrice'>Rs. 999</span>
                                <span className='DiscountedPrice'> Rs.899</span>
                            </div>
                            <div className="ProductRating">
                                <span className='RatingImg'>
                                    <GetRatingsUI Rating={5}/>                                    
                                </span>
                                <span className='Reviews'>(20)</span>
                            </div>
                        </div>
                        <div className="Product">
                            <div className="ProductImgWrapper">
                                <img className='ProductImg' src="" alt="" />
                            </div>
                            <div className="ProductName">Name</div>
                            <div className="ProductPrice">
                                <span className='OriginalPrice'>Rs. 999</span>
                                <span className='DiscountedPrice'> Rs.899</span>
                            </div>
                            <div className="ProductRating">
                                <span className='RatingImg'>
                                    <GetRatingsUI Rating={5}/>                                    
                                </span>
                                <span className='Reviews'>(20)</span>
                            </div>
                        </div>
                        <div className="Product">
                            <div className="ProductImgWrapper">
                                <img className='ProductImg' src="" alt="" />
                            </div>  
                            <div className="ProductName">Name</div>
                            <div className="ProductPrice">
                                <span className='OriginalPrice'>Rs. 999</span>
                                <span className='DiscountedPrice'> Rs.899</span>
                            </div>
                            <div className="ProductRating">
                                <span className='RatingImg'>
                                    <GetRatingsUI Rating={5}/>                                    
                                </span>
                                <span className='Reviews'>(20)</span>
                            </div>
                        </div>
                        <div className="Product">
                            <div className="ProductImgWrapper">
                                <img className='ProductImg' src="" alt="" />
                            </div>  
                            <div className="ProductName">Name</div>
                            <div className="ProductPrice">
                                <span className='OriginalPrice'>Rs. 999</span>
                                <span className='DiscountedPrice'> Rs.899</span>
                            </div>
                            <div className="ProductRating">
                                <span className='RatingImg'>
                                    <GetRatingsUI Rating={5}/>                                    
                                </span>
                                <span className='Reviews'>(20)</span>
                            </div>
                        </div>
                        <div className="Product">
                            <div className="ProductImgWrapper">
                                <img className='ProductImg' src="" alt="" />
                            </div>
                            <div className="ProductName">Name</div>
                            <div className="ProductPrice">
                                <span className='OriginalPrice'>Rs. 999</span>
                                <span className='DiscountedPrice'> Rs.899</span>
                            </div>
                            <div className="ProductRating">
                                <span className='RatingImg'>
                                    <GetRatingsUI Rating={5}/>                                    
                                </span>
                                <span className='Reviews'>(20)</span>
                            </div>
                        </div>
                        <div className="Product">
                            <div className="ProductImgWrapper">
                                <img className='ProductImg' src="" alt="" />
                            </div>
                            <div className="ProductName">Name</div>
                            <div className="ProductPrice">
                                <span className='OriginalPrice'>Rs. 999</span>
                                <span className='DiscountedPrice'> Rs.899</span>
                            </div>
                            <div className="ProductRating">
                                <span className='RatingImg'>
                                    <GetRatingsUI Rating={5}/>                                    
                                </span>
                                <span className='Reviews'>(20)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}