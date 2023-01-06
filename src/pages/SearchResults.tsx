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
            </div>
        );
}