import './searchBar.css'
import React from 'react'

interface SearchBarProps {
    setShowRecommendation? : React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchBar: React.FC<SearchBarProps> = ({setShowRecommendation}) => {
    const handleFocus = () => {
        if (setShowRecommendation !== undefined) {
            setShowRecommendation(true);
        } 
    }
    const handleBlur = () => {
        if (setShowRecommendation !== undefined) {
            setShowRecommendation(false);
        } 
    }
        return (
            <div className="SearchBar">
                <input 
                    onFocus={handleFocus}
                    onBlur = {handleBlur}
                    className='search'
                    placeholder='Search'
                    onChange={() => {}}/>
                    <button className='searchButton'>
                        <img className='searchIcon' src='./searchIcon.png' alt='Search'/>
                    </button>
            </div>
        );
}