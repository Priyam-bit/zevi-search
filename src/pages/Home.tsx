import React from 'react'
import { RecommendationBox } from '../components/RecommendationBox';
import { SearchBar } from '../components/SearchBar';
import './home.css'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = () => {
        return (
            <div className="HomePage">
                <div className="HomeElements">
                    <SearchBar />
                    <RecommendationBox />
                </div>
                <img className='BgImage' src= "./ZeviBackground.jpg" alt='Background'/>
            </div>
        );
}