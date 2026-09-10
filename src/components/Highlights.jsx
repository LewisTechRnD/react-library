import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
    return (
      <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                 But like, why rock wit <span className="orange">Da Library</span>   
                </h2>
                <div className="highlight__wrapper">
                    <Highlight icon={<FontAwesomeIcon icon="bolt" />} 
                    title = "Nice N Easyyy"
                    para="Get access to books online, mad quick folk" 
                    />
                    <Highlight icon={<FontAwesomeIcon icon="book-open" />} 
                    title = "Da Freshest Reads"
                    para="Get access to 10 racks worth of books online, yeah, we finna mog" 
                    />
                    <Highlight icon={<FontAwesomeIcon icon="tags" />} 
                    title = "Shweet Deals"
                    para="Get your grubby lil mits on your favorite books for the price of a burga" 
                    />
                    
            </div>
        </div>
        </div>
      </section>  
    );
}

export default Highlights;