import React from 'react'
import './recommendationBox.css'

interface RecommendationBoxProps {

}

export const RecommendationBox: React.FC<RecommendationBoxProps> = ({}) => {
    return (
        <div className="RecommendationBoxWrapper">
            <div className="RecommendationBox">
                <div className="Header">Latest Trends</div>
                <div className="Trends">
                    <div className="Trend">
                        <img className='TrendImg' src="./Background.jpg" alt="" />
                        <div className="TrendName">Desc</div>
                    </div>
                    <div className="Trend">
                        <img className='TrendImg' src="./Background.jpg" alt="" />
                        <div className="TrendName">Desc</div>
                    </div>
                    <div className="Trend">
                        <img className='TrendImg' src="./Background.jpg" alt="" />
                        <div className="TrendName">Desc</div>
                    </div>
                    <div className="Trend">
                        <img className='TrendImg' src="./Background.jpg" alt="" />
                        <div className="TrendName">Desc</div>
                    </div>
                    <div className="Trend">
                        <img className='TrendImg' src="./Background.jpg" alt="" />
                        <div className="TrendName">Desc</div>
                    </div>
                </div>
                <div className="Header">Popular Suggestions</div>
                <div className="Suggestions">
                    <div className="Suggestion">
                        <div className="SuggestionName">Suggestion</div>
                    </div>
                    <div className="Suggestion">
                        <div className="SuggestionName">Suggestion</div>
                    </div>
                    <div className="Suggestion">
                        <div className="SuggestionName">Suggestion</div>
                    </div>
                    <div className="Suggestion">
                        <div className="SuggestionName">Suggestion</div>
                    </div>
                    <div className="Suggestion">
                        <div className="SuggestionName">Suggestion</div>
                    </div>
                </div>
            </div>
        </div>
    );
}