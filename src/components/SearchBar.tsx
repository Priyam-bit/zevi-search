import './searchBar.css'
import React from 'react'

interface SearchBarProps {

}

export const SearchBar: React.FC<SearchBarProps> = () => {
        return (
            <div className="SearchBar">
                <input 
                    className='search'
                    placeholder='Search'
                    onChange={() => {}}/>
                    <button className='searchButton'>
                        <img className='searchIcon' src='./searchIcon.png' alt='Search'/>
                    </button>
            </div>
        );
}