import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Offers.css';

const Offers = () => {
    return (
        <Carousel
            autoPlay={true}
            dynamicHeight={true}
            infiniteLoop={true}
            interval={5000}
            showStatus={false}
            showThumbs={false}
            stopOnHover={true}
        >
            <div id="carousel-img" className="img-1">
                <div id="content-box">
                    <div className="col-md-12 p-3">
                        <div id="content" className="container mt-3">
                            <p className="display-3">Get Summer Ready</p>
                            <div id="content-offer">
                                <p className="display-6">Upto 50% off</p>
                                <p className="display-6">Top beauty brands</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carousel-img" className="img-2">
                <div id="content-box" >
                    <div className="col-md-12 p-3">
                        <div id="content" className="container mt-3">
                            <p className="display-3">Clothing Essentials</p>
                            <div id="content-offer">
                                <p className="display-6">Upto 10% Instant Discount</p>
                                <p className="display-6">With UPI transfer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carousel-img" className="img-3">
                <div id="content-box">
                    <div className="col-md-12 p-3">
                        <div id="content" className="container mt-3">
                            <p className="display-3">Stay-at-Home-Skincare</p>
                            <div id="content-offer">
                                <p className="display-6">Upto 50% off</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carousel-img" className="img-4">
                <div id="content-box">
                    <div className="col-md-12 p-3">
                        <div id="content" className="container mt-3">
                            <p className="display-3">Complete Sports Range</p>
                            <div id="content-offer">
                                <p className="display-6">Upto 75% off</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Carousel>
    );
};

export default Offers;