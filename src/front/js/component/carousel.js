import React from 'react';
import "../../styles/carousel.css"; // Make sure to adjust the path to your CSS file


// Assuming the Featurette component is defined and imported here

const Carousel = () => {
  return (
    <div>
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Carousel Slides */}
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              <h2>Find a car with ease.</h2>
              <h3>Sign up and start comparing cars today!</h3>

            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              {/* Slide content */}
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              {/* Slide content */}
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>

      <hr className="featurette-divider" />

<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
  </div>
  <div className="col-md-5 order-md-1">
    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
  </div>
</div>

<hr className="featurette-divider" />

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
  </div>
  <div className="col-md-5">
    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
  </div>
  
</div>

<hr className="featurette-divider" />
{/* End of featurette sections */}


      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2>Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2>Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2>Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
        </div>
       </div>
      </div>



  );
};

export default Carousel;
