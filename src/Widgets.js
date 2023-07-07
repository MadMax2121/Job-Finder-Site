import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

   
    const newsArticle = (heading, subtitle, link) => (
        <div className="widgets_article">
            <div className="widgets_article_left">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets_article_right">
                <a href= {link} target="_blank" rel="noopener noreferrer">{heading}</a>
                <p> {subtitle} </p>
            </div>
        </div>
    )
  return (
    <div className = "widgets">
        <div className="widgets_header">
            <h2>Job Finder News</h2>
            <InfoIcon />
        </div>
        {newsArticle( "FreeCodeCamp", "Learn how to code here", "https://www.freecodecamp.org/")}
        

    </div>
  );
}

export default Widgets
