import React from 'react';
import landingImage from './assets/landing-image.jpg';
import './Home.css';
function Home() {
    return (
        <div>
           
            <main>
                {/* Your main content */}
                <div>
                    {/* Your landing image */}
                    <p className="caption">Where Every Bite Takes You on a Culinary Journey through China!</p>
                    <img className= "opacity" src={landingImage} alt="Landing" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div>
                    {/* Additional content or sections */}
                </div>
            </main>
            
        </div>
    );
}

export default Home;
