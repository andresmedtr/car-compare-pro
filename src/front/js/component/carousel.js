import React from 'react';
import "../../styles/carousel.css"; // Make sure to adjust the path to your CSS file
import { Link } from 'react-router-dom';






const Carousel = () => {
  return (
    <div>

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Sign Up Today!</h1>
                <p>Join Compare Car Pro today to compare your favorite cars.</p>
                <p>
                  <Link to="/signup">
                    <a className="btn btn-lg btn-primary" href="#">Sign up</a>
                  </Link></p>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>User Interface and Experience</h1>
                <p>A user-friendly interface with intuitive navigation enhances the overall experience.</p>
              </div>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Search and Filtering Options</h1>
                <p>Effective search functionality and advanced filtering options help users narrow down their choices based on preferences such as make, model, price range, mileage, and more.</p>
              </div>
            </div>
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
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Time-Saving <span className="text-muted">It’ll blow your mind.</span></h2>
          <p className="lead">Instead of visiting multiple dealerships or manufacturer websites, users can quickly compare various car options on a single platform, saving them time and effort.</p>
        </div>
        <div className="col-md-5">
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="900" height="900" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Image</title>
            <image href="https://assets.volkswagen.com/is/image/volkswagenag/volkswagen-taigun-homepage-thumb-banner?Zml0PWNyb3AlMkMxJndpZD01MDAmaGVpPTUwMCZmbXQ9anBlZyZxbHQ9NzkmYmZjPW9mZiY4Y2Uy" width="100%" height="100%" />
          </svg>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
          <p className="lead">Transparent pricing and feature comparisons help users avoid hidden costs and make more accurate cost estimates for their desired features.</p>
        </div>
        <div className="col-md-5">
          <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="900" height="900" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Image</title>
            <image href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBATEhMVFhUVEBgSFRcXFRgYFRcVFRUWFhUVFhcYHSggGBolHRYVITEhJiktLi4wGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAIgBcQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAEIQAAEDAgMFBQUFBgYBBQAAAAEAAgMEEQUSIQYTMUFRImFxgZEHFDJSoSNCYnKxM4KSwdHwFSRDorLhNCVjc5PS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EADERAAEDAgMFBwQDAQEAAAAAAAEAAgMEESExQRITUWGRBRQycYGh0SKx4fAjQsEzYv/aAAwDAQACEQMRAD8A9xQoDahw7/FOtq+oWdtSw8kwxuClITTZmnmnAU8OByVCLZrqEIUqEIQhCEIQhCEIQhCElzQeKZfStPDRSEKjo2uzCkEjJQXU7h3pkgjirRIc0HiFndSA+EpglOqrlxTn0rTw0TDqZw71ndTvbpfyTBI0plCCLcUJKYhC4uqELiXHIW8EhONiceSu3av9OfJQbWxUqKoB46FPqjmr4GcX5j0YM3kTwHmqrE9qnxAbuIWP3nuvbuLRw9VpFY2PCUi/U9AqMpnykCMf4OpstihYnC9tdbTsAHzMB08Wkn6ei1tJVxytDo3BzTzB+h6FaIp45Rdh+VWemlgNpBb7dVJXCLrqE5IUOal5t9FHVompYQ7x6rJLTA4s6JrZTqq9PQTZePBJkiLeKQsgLo3cCnYOCsmm6Uq+GYt8FNa4EXC6EUweOazOYWpajVEN9Rx/VSUJj2B4sVAJBuFWLilVMF9Rx5qIuXJGWGxWprg5dQhCWrIQhCEIQhCEIQhCEIQhCEIQ1xHAoQpyQnW1Lh3p0VY5hRUJrZ5G6qhjadFYNmaeaXdVi61xHAlObVn+wVDDwKs0KC2pcO9OiqHMJ7amM8ksxuCkoTbZmnmlpwIOIVCLZrqEIUoQhCEIQhCalmawEuIaBzJAHqUISyL8Uy+laeGigT4/C34czz+EafxGwPldVlRjszvhDWeHaPqdPosNRV0zcHkE8sf3qtEVPM7wj/FdyU5brcW6k2AUCbEoGfeLz0YLj+I9n6qimeXm73Fx/Eb+gOg8lxrSeAJ/74LkyV7L/wAbOuPsMPdbmUbv7u6fJ+FZS428/s2NZ3ntO/kAfVV9RM+T9o5zu4ns/wAI0+iqMZ2nw6jLm1FUzO0kGOL7WQEcWuDOyw/mITWzG11JiTp4qMyMqBA90TaiNmVzg3suGVxDrEi7TyJIvYqxgrZ/HgOnsFG8possT19yr2GBzvhaT4DT15JieEOBa4cdD3LxvA6rEMbrmU9RXyRu1e0EHKHxdvKyBmVucWJ5fCvb65pzkkEE66i1zwcbAm2t9OSXV0IpmAh1z5WCbTVZleRa3D9+AsfPEWOLTxB/spyhrpYHZonlp7uB8RwPmrDG6e4DxxGh8P7/AFVMs7HHMLusLZY/qF+IW6wfbJjrNqBkPzjVp8Rxb9fJauKVr2hzSCDqCDcHwIXjam4Zi09MbseQObTq0+I/nxXUh7Sc3CTHnr+fZcmp7HafqhNuRy6/vmvXELM4PtbDLZsn2b+89g+B5ea0gN11o5WSC7DdcKWJ8Ttl4sea6ostLzb6KWhS+NrxYqjXFuSrCEqKUtP6qZJEHf1UOWEt8OqwPifEdofvmtDXh2BU5jgRcJarY3lpuFOikDhotcMwfhqkvYWpxRKmDmPP+qloTHsDxYqrXWN1VoUipg5jzUdct7Cw2K1NcHC6EIQqKyEIQhCEIQhCEKWaQdSkGkPVPNPINEsSNUdCdNM5IMThyKWY3jMK20OKShdsuKqshCEKEIQhCEIXWvI4FcRoAXEgNaLkngArNuTgoNrYp5tU4d6eZUg8j+qpJcYiHwMc89Xdgf8A6+ihTYtO7QODB0YLfU3PpZSa5seb78h9X490Cmc/JtvPBamapYwXe4NH4jb9VWVG0MQ+AOf5ZW+rtfQFZwi5udT1JuT4k6lOQwPf8LSfAX9Vnf2tI42ibb3PQflaGUDWi8jv8HUqZU41O/gQwfhFz/E7+QCr3kuOZxLj1cST6ngkYrPHSQyzVJdHHHlzHI5zu27K2zRx1IF+GqzuA7e0tdJUwU0T2ytpJJaZ05blllYwndmNvDkfiNwHcLaqbBWVWLjhzNh0CYZKeDADHlj7rTxxud8IJ8BdVuL7QUFGbVNVEx3yNvLJfvZHfL+9ZeYbLe0mvdiVK+qnc6Ay7t8QsyEMluwksaA05c17nXTioNRhkGGY+YKqNjqZlXlc1/w7ib4Hn8rXh3i1bYuyI2+Mk+w+fdZpK958It7r1Oq2mifhtbW4e5k7qcNu2Rjxku9ocXxkgnsFzgbkdk9CF5rgvtIr21lPPVTPfT53RyRtAZFu3WEmVjAAXNDmuGl9Brqpvs2ib/iWJ4fC7ewVNNU04eNQWsDt1LfwuL9XLL4QyGXD6+GWRkcsTo6qAPIaXubmjniF+Li1zDlGpMY710YaeOFuywYLJJK6Q3cVofa5h/ueLMqWBro5xHVs0Bje8EbwW4ODi3Me56awfF6EbRMqoJBTU3vAkBe1wAD2BskYawHKC5zwL2AHGyRPXf4hgQjdrPhkgLTzdSTEMNvyP3YPQBqjSxNq8Bjka1u9w+qMUhFsxp6k5mOd1tJdoTglpftSw11Di8zoyWNmtVRuY43AmB3mUg8M28Gh4L2PZ7ATRUMELZHTsZmkbKWBjSyW0lmC5u27ib3+8V59W4NUY3gmFywML6ile6keCQ3NEAMry59gQ0NZz+85XOxGxVXR1EVRVVYcWROiEDC+UGNzCwRmRxDWAaEBt/hCyVgY6Ete/ZHppiM+dssU+nLg/aa262D2BwIPAixWXmjLHFp5G3/a1RBGh0KpMchs5ruosfEf9fovLRnGy9PTPs7Z4qsWgosCAiZLK2d2fVkcDMzsvJznHst81QKwwzDcXrcxZXsZG05WsD3h4aPhuxoA4c78l06KNj3naF+ASu1JpY2N2DYXxP2UvGsB3MbZmZ92TYtkblkYeWYcCO8Kw2GxR4l3DiSxzSW3+6QL6dxF9FQY3RV9KAx9Y2fN8Ud33sNbuBNunEqTsdiEbaj7W8byxzW31aCdM3eOKaWiOpBZgLi+Iw4+hH7qsRnMtGWygk/1Ns/Xj916kxwIuEpUuGMkhYGONyNL8ndCFZx1APHQrqsnaTY4FcYsIxCfXCELqeqKLNT/AC+ijtcWnvVkm5Ig7isslOCbtwKa2TQrkUwcnVAfE5huPX+qkwy5vFXjlJOy/Aqrm6jJPKFUQW1HD9FNXCryRh4sVDXFpVYhPVEOXUcP0TK5j2FhsVqBBFwhCEKilCEIQhWiEIXaWJCEIQhcISHRNPIJxCggHNCY92akGkHUqUhLMMZ0Cttu4qEaQ9Qkmnd0U9CoaWPn1Vt65VpjcORUHGgdx4StLvA6D/cWrQKLXQbyKRnzNIB6HkfI2Sn0n0uAOYI6qwmsQbahY0KDjWM0tDEJaqXI1xIjaBmkkLfiDGd1xckgC411Uxp0H9+S8t9uNM/e0E1/s3UzoQOTZI5HOf3aiRh8u5cPs6nZNLsyaC9unyutVzOZHtM1Wv2f2+w2uqGQM30T5DljMzWZHuPBt2OOVx5X0PC6x2N1s+LYzJh0lQ6CATzU0TG/sw6IPDM7bjM57mC5Nz2rBW2LbEyYvPR4jRPhhZNTRSSG5uyeM5H7uNgJJBYByF2nVUvteoZKHFoqxh1lEdQ1wFgJ4SGyWF9O0xrrX++vQwwQxPO7FjquRJLJIBtG4SvZliEsr6vBqpzt3UwSwsa/Xc1EYJGW98o7J06tasbgjKimnfLHds9G4TFhvf7OQNkBtxtcXHy5ui0e3svuuK0+I0wsypbDiMVtBmdYyMJ652uuPxKftw2Ogx2GsDQ6lq2sqi3Ldr4ahuSpYRzLgZD++FoSli3UbJaWomjYW7mqbcXvaKcODLnnldGB++tZ7SP87QYTiY1c+E0dQf8A3ob5Se9wEh8AFY7PbFzQ1+KYeWvdBNRyMjmykxX7E9LK94GUG7BzGtwrzZnYeVuF1VDXSMa2aaOeIRHeyQyN/aZuDNQ1rdHHiVR8jIxd5A81ZrHONmi6tfZx7tHh1JNTRMjc9mWdwF5HSRPs8OeSTlJAcG3t2uCwEWxr5NoJoXU0stM2udvSwODGxSHO0ukFstmvaeN9F6bg+EUmGUZjjfu4d9vHS1MrGgvLQ020AGgaLC50Cix7fYbLUQ0oqpJXSPEQc1pELHHRt3PIJBNhcDmsEc0hle6Npc11rHIYcL6eS1PjZsNa8hpF76nPkqHCvZoKasqJPemCmfvYmxMa58j6eUFuR7iQGOAIsbnVoNlpMF2fw/DIJTG1jI3gMmlqpWkPyHM0FrrR3B1sG3WP9pe2uJUFZJSwiOBmUPjkazNK+Nw4l7ycpuHNNgLFpUfa+v8A8U2dpqs2M1NUiKoPO7mbsv4fftA7xLuidu55Lbb7Dg35Nyl7cTfC25/9fAwWyxfbalbRz1UJNYIJWQva0mKNhkvlddzbllwB2RzC80q/aNjFc/c0o3Wa4EdLGTKR+ftSEgcwQpPsahbVDFcPdYCqobtJ1AkidaN1u4yX/dWS2XxV+HYhBO5pvBMRI37xbqyVnjlLgnRU8cZu0Y8cz1zS3yveLE4cMh0yXv8AgwqPc6T3prmVG4DJWucHPzR3YHuIJ1c0NJvrcm6Ri0eaJ3dZ3px+l1U7IbbQYnLUxRwGIxxiWMukzukYHZZMwAAaRmYbC/PVaCVt2kdRb1Xm61j2TkuFr44G67VHINgbJywWUSgbIIXEtd8hOQROke1jRdznBo8StNVU8U4loom/aUsYfHKOc4uZWeB0HjfoFX4S/wB1glqyLuH2NOD96Vw4+Qv5B3RafYjCdzFndq9/aJPEk6knvXa7PpRuy548X2/PwvM9q1W3KI2HBv3/ABkubK15qKVvzMIHflPD0Nx5K1c0jistswd3U4hEODTK4DuZJdv/ACW4icHNB6hMig3keJxFx0PwsD37LvfqokU5b3hS45Q7+iS+mae5MPpnDhqmNE0XMKp2HclOQoTJ3N0d/wBqUx4PAp7JWvyz4JbmEJajSU/NuhUlCu9geLFQCRkmYpb6HQp5NvYD/eq6y/P1UNuMD1+UG2iUVBqIcuo4fop644KssQkFlLXbJuqxCcnhy+CbXMc0tNitQNxcIQhCqhWiEIXaWNCEIQhCEIQhCEIQhCEIQhCEIQhYzE4d3PK3kXZh4P1/5Zh5LKe0XC/e8LqGtF3wEVTPBgImH/1uJt+ELebUQaxv8Yz/AMm/o71Vbh/7Vnj66cPA8F5x4NPXXGp9nZ/6uuz+WlsdB9l4hg20v/oNXSGodFLDUMmgDXlhljkOWWIZdXAXc8g9QrHB8IZW4DDHPI2GRtbM6jkkByFmWPesc4XLWF5Pat8TQlyNwzOXHDmZ81yN5MIM3dEDo38Oay2OI4jTVeEk/ZMlga1jWMY1hb27fZgf6eR3DgC1dh1Wy30Zp0fYVQyRveG2aXBtwQTjgDrhe2flqsdhuwdXVOpaarracQQl7YmRSxyy5XnePbGGjnY2LzpyHJemV1DSzbneU0cggaWQCQFwjZZgy5ScrtI28QefVeb7OSPbV05bq4TR28c7bL1WpIEr7cBIbeAcbLmVdZKWhzTs4nLy58rrTVdjxUbw2+1cXx8+Xosxtp7QYMPduHB1ROACYmvyRRAgWa8gHtWscrRp1CyFF7YXGUCeji3RcAd06QStF9SC9xa4gciBfqFlPaLSvp8Yrb63qTUMLhcObKd6zxFnW8rLa1U2z2MVYqp6h9PI+JgfTlu6YZGAguM+VzcpGUcj2eOunVFLA1uLQeZxJ9c158zyE4G3IYBS/bdRNdQ0kzTmEdQWNcODoqiMSMd4Hd/VeQe5vEAn+5vTETza8NDhfxBNvyle+7bYayTBKmOEN3UdNHJAWP3rMkDwTlkuc3YL+a8v9nVA2uhxOhNg6SmFVCSQAJ6Z3ZFzwzNle0noSppSN0AMgSMc8Convt3Otjhll8rV49bHcCjqxrV0VxN1c1oBl8btDZR3iQDmsXsFX3FZQP8AgraZ0bQeAqYwZKZ3m8ZfFw6KX7ItphQ14ZIQIam0Ml/hDr/ZPPcCS0/he5RPaJs+/CsSc2O7Yy4T05+Vua+W/VjgW/ug804YGyWu+yiu3OL0ethI50B798xzGj+It9E/7X8J93xOR7RZlS0VLbcA59xKPHeNefMLKU1e6OoZO0AOZMJgBwBa/OAO64Xt3tkwY1dIyaFhe+GcOAaC5xhqgD2QNTZ+7/iKo51pG87j1zH2Ks0XaeVvj/Qj2c1FCzCoZx7tTuGeColcWNeXtNxd7u0czHMOUdStWbWBBDmua17XDVrmuAc1wPQgheKYN7K8SmyumDKVhsbzG0lj0ibd9+4gL2HCaH3alpqcymYwsMe8LMmZuZxYA25sGght762C5HakUVi/a+q4wvpyGmOK6FE9/h2cONtfNUVY20jx+M/qijpnSyMjbxc4NHnzS8TH2r/zfyCVUbOMqaVrpKkU7nzBsBd8L3MBJzHi0XGjr6Ec9AsdNEZXho9fLX4XeqqncQbeuQ87K9kojPWx04a4Q0rQ1twRnebF8mvG50B7j1W+iYGgAchZeRwbR4rhLmx18RqIeDJb3db8E3Bx7ndo9QtthW2dBOzO2oDbC7o5OzIO4A/F+7dejEgGFsPsvIlpzVLhEn+fxQ8hHUfRzB/IrcYWbwx/lC8/2ZiLpa4Fzc9Qx+6Govmc97hqLjS39hbvDJmiJg4dkJNPLGWXBGJP3VpWu2stArBCS1wPBdWsJSCLpl0A4jQ9yfQquY12YUgkZJpuYcde/n6J1CFIFlCEIQpQhCEIQklt1BmiynuVgkPYCLFJmhEg5q7XbJVcuKZ7mOpQsXdpOCdvWpoVTu5KFUegUdCqJpBqp2G8FJFZ3fVKFYOhURCt3mTio3bVMFU3vShUN/sKChWFU/ko3TVPE7eq7vG9R6qvQrd7dwUbkcVZZh1C7dVaUrd75e/4UbnmrK6FWh56n1XRK7qVbvY4KNyeKXjUO8gkA4gZh4t7QHna3msnFIQQ4ciCPLULWMqHXFzosrUQbuSRnyvIH5eLf9pC5fadnhsrdMP9C3URLS5h1x+VhtsdnHMe6eEZoXOLuyLmJztSxwHDW9jwtZZNembXYg+mpOwbOmc6Mkcd2wAuAPIuLm+QPVed4fTGeaOMWBe8NHQEuDR+qi5eA45nH988+V17rsmeR1OXS5NwB1IGd/LLna9kvCa91PNFMA0mNwcARcEjXVelx4/RuhNTm0HGAuG83hF2sv8AebxOfoDzCw+1GzMlG6988RJDJANLi92uH3X/AIfRUKHNGTxe2I80TUkHaDWysd6jUajly1HsvQqvA6bH6WKadrmzRl8RliAblaLPY1zXaOjyv0uRYg66led4r7M3D3g0VZBWe7s3kscZtM1uv3Rma4jK7QOvpw1W9wTCYK7CaqkjdeWVpc/MbFsjCHQFo+TMLF3HtG9hZeVbLbQVWCV0j90N4GOhkikBbxIdY21FnNae/wA12KdznMuTfp+/BuNF4LtSJkVU9jBYXNv3hw4ix1Vp7JcZLKp1DI7/AC9dG+me0nsiSRhZG8D5iTk783cFimQES7t5DO3u3E8G9qxLu4fyW49m+yNTUVcFW+MxU0UzZy8jKHljg9scIPxXIAuNAL68AdvL7NMPfV1FRNJLKJZ3zNiaBExoe4uyOdq51r8RlVpamKI2e4BZGQvf4RdeZbcbFzYXUxwF2+3kYcxzWEZnXLXMDbkkhw+oPNenYngNRjOD0gqW+71sRsx04czO0ZWuc7QuAezK7h8UZ6rZuqn3FuzYWbbVzRYAgPPaF8ovrrZMuNzc6lcqXtcAfQ31OH7hxstsfZ5/seiwmEeyihisamaSod8sf2UfgSbvcPDKt5E7IGiO7GsjbE0BzjZjGhrRmJJOgGpJK5E0vNmguPRoJt424eaXVRthF6iaKDuc4OkPhG03d5FZHSVdXpgOAsB6/lPa2ng1x6nokLjdTYAk9ACT6DVV8u0VKDaCGapd1ed1H5ADMR3EJUb8WqRlZlp4z92FmT/dq6/gQnw9kOP/AEcB5Y/j2SpO0BkwdV2qwMtcZKmSOCMuv23DOR+Fo4nuS8PjbiNUwtaRTQs3cII4jm8jq7TyA71IoNgATnmcXOPEuJJPiTqVssMw2OnblYLLrwUscA+nXisdRVST22zlkOCr5sIfG0iFwLCLGJ4zRkdMp4eSw+1OyjmxtqKOnbG9ucztDyQ1oFw+Np7gdG9dAvVUhzBcHonPYHixSGuLTcLxPYuskfVMFIQ6VwIMsh7Abo59m+A5XPevYaV8MwJZYi9rjgfBeH4Jiu5rW1Fuy6qkfccLOkc/KPFhPovbcJpGR58nwucXt6Wf2hbu1WanY2zmnHFOmJuCpJphyJCN28cHeqkITtyzQdErbKZDn8wD4H+qWHdxCWhXDSNVF1wFdQhWUIQhCEIQhCEIQhCEIQhCEKrQpHuZ6rvunf8ARczu8nBad43ioq6pXuneuikHUqe7ScEbxqiIUz3Vveu+7N/sqe6v5KN61QkKfuG9F3ct6K3dH8QjfBV64rHdN6D0Xcg6BT3Q8VG+HBVy7ZWOUdEpT3Tmo33JVmU9CqjaCEh8b/nZlP5mH+YP+1apVW0UOaAu5sIf5DR3+0u9EuopP4XgHS/TFXhmtI081g9rqEz0TsjczoHmW3MscMr7eBDD4ErzRri1wN7EG4I4g8iF7FG8tIINiFVV2zdDO4vLXxE8RFlMZPUMPw+ANu5ciGdrmhrja2HK3yMui9h2d2iKZpjkBLb3FsbcrfuKxuMbU1VZG2N+UAHM8NaBnePvPt8Tvp3KbDsLVOijddjXHV0b3Bj2NPwuObrrpxGmmumqwzBaSlIfGwveODpSHZe9rAA2/ebkKe597knXiSf6q0lSxuX1dQB66/ZD+0gyzKRoa0Y4jP0GQ55+WtFgWyzKR7ZHVDjIDcCDQX5gvkGoPC2VaKaqc52Yhp1u27WuLR0BcLiyRBBJJ8DHO7wLN/iNh9UxWVVNBpNUxhw4sivLJ4G2jT4qWCrm/wCYIHK4HXMri1VWyR+1O4OOWQy8gnpZXON3OJ8TdcgifJ8DS78ouPN3AeZVWdoQ7Sloy88n1Bv57pun1Ce/w3Faz9rM5jPkZ9m23SzbXHjdaY+yCTeV3TH3KxPr9GN6/hTat8MH/kVEUR+QHeS+GRnD6qsftHCTanppJj80xys8o2cR42KusL2AgjsX6laakwmGIdlg9F0YqGCLwtx4nFY5KiV+ZWDbBi9WLOkMLPkiG7aB4jtepVhh3s+iac0hzE6m+pJ7+q3IACUtaSqyiwSCIdlg9FYNYBwCWhCEIQhCEKo2rxD3ahq5ubIHlv58pDB5uICt1gfbLVFtBHEP9aqjYfytvIfqwKrjYEqWi5AVBszs7HPhG6cQ2WWcvpnHhvIGZRfuP2jT3OPcrnYbaoRj3SrvHJEd20v0y2/03nlbkeBFu68vDaK0mHwcoaRrz/8AJKbuPqL+an7UYHTzduaNxIFhLFYSgdHA6PHjdJ3ZDQW5gdVfaBJByWnY8EAg3B6JawOzc9LRvcGzySl9m5TEWZbHi6+hPgt3G64B6pzC4j6hYqhsDgloQk5h1VlCUhCEIQhCEIQhCEIQhCQ94HEqCbIS0Jn3hvX6FCpvWcQp2TwTyEITFCEIQhCEIQhCEIQhCEIQhCEIQhCE3KwOaQdQQQfAixTiEIWDnaYXFj9CNNdLgfeHUHinYaSV4u1jrfMey23W7rXHhdaDGoqrLenkynva136grIv2SrKp16qd7xfgT2fJo7I9FyB2RHtXLjbhl7rd39+zYAJVXiNHDcS1Ic75Kcbx3hnPZHnZQxj8jzakowOkkxMjvEN4NPgVp8N2KporXFyr+noo4xZrQFvipIYvC0fc9TdZXzSP8RWA/wAAxGs/8md5afug5WW/K2wPmrnC9haeK2YXK1y6tCWolLh0UY7LAPJSgEXSN63qPVQSBmhOITW/b1SDVN71QysGoVtl3BSEKIavoPqkmqd0CoamMaqd25TUKAah3VIMrupVDVt4FW3RVjdJMgHMeqrrpTYnHkVTvTj4Wqd1bMqaZ29V5z7Ze1FQkcPeHjz3TrfoVvm0p52Cpds9nTWUgjY5okZM2Zhfo27bhwJANgWucL96uDK8EEWwUfQ0ixTlM4Cre617wRkeGVW+/c77qqcBmjzRxZ2yPip2xve3UEt4AHnb+a0NlfYecdq3oq3aNFVHCmucHFrQfAKe2E83Hy0T6FYRDUk+ZUbR0TIhHS/jqnQF1CuGgZBQTdCFwlMvqGjv8EOcG5lABOSfXLqI+rPIJl0hPEpDqpgyx9lcRHVTnTNHNMPq+g9VGQs7ql5ywTBEBmlumceaQhCzkk5pgFskIQhQpVohCF2liQhCEIQhCEIQhCEIQhCEIQhCEIXCUjet6hCEmSQtyVmtukmob1STVt6FCFidVyaWThE1INX3fVJNU7uQhQZ5DqrbtoSDUO6pJkd1KEKm245kqQAuFcQhVKshcQhAQugJwQOPJCE+GIPzSpHluScbSHmU6ymaO9CFsbBG3RKL3HVOtYBwC7ZCE4YKi6kPaCCChCEKFR4THE9z2jUqwQhCEJLnAcShCq42F1IxKZdUtHDVMvqXHhohC5z6h5WkRtAumnOJ4lcQhIurIQhCFKEIQhCEIQhCEIQhC//Z" width="100%" height="100%" />
          </svg>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
          <p className="lead">And yes, user reviews and ratings! Users can benefit from reading reviews and ratings from other car owners, giving them insights into real-world experiences with different vehicles.</p>
        </div>
        <div className="col-md-5">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="900" height="900" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Image" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Image</title>
            <image href="https://www.salesleadsinc.com/media/1419/customer-reviews.png" width="100%" height="100%" />
          </svg>
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>





  );
};

export default Carousel;
