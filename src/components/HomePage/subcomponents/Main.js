import React, { useEffect } from "react";
import "./Style.css";
import two from "./profile.png";
import one from "./signup.png";
import three from "./edit.png";

const Main = () => {
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let slideIndex = n; // Declare slideIndex here
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
      dots[i].className = dots[i].className.replace("sq", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("sq");
  }

  function currentSlide(n) {
    showSlides(n);
  }

  useEffect(() => {
    let slideIndex = 1;
    showSlides(slideIndex);
  }, []);

  return (
    <div>
      <div className="space"></div>
      <div className="slideshow-container responsive-image-container responsive-image-wrapper">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src={one}
            alt="Slide 1"
            className="responsive-image responsive-image-wrapper"
          />
          <div className="text">Easy Sign-up</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img
            src={two}
            alt="Slide 2"
            className="responsive-image responsive-image-wrapper"
          />
          <div className="text">Create your tasks</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={three} alt="Slide 3" className="responsive-image" />
        </div>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default Main;
