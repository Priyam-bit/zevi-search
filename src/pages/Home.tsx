import React from 'react'
import { SearchBar } from '../components/SearchBar';
import './home.css'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = () => {
        return (
            <div className="HomePage">
                <SearchBar />
                <img className='BgImage' src= "./ZeviBackground.jpg" alt='Background'/>
            </div>
        );
}