import './searchBar.css'
import React from 'react'

interface SearchBarProps {
    setShowRecommendation? : React.Dispatch<React.SetStateAction<boolean>>,
    isHomePage? : boolean
}

export const SearchBar: React.FC<SearchBarProps> = ({setShowRecommendation, isHomePage}) => {
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
                    className={isHomePage !== undefined ? 'searchHome' : 'search'} 
                    placeholder='Search'
                    onChange={() => {}}/>
                    {isHomePage  !== undefined && <button className='searchButton'>
                        <img className='searchIcon' src='./searchIcon.png' alt='Search'/>
                    </button>}
            </div>
        );
}