import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Button,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const items = [
  {
    caption:
      "Our mission is to deliver premium-grade API impurities and Reference standards, setting the benchmark for quality and reliability in the industry.",
    header: "API Impurities/Reference Standards",
    className: "slide1",
    id: "APIImpurities",
  },
  {
    caption:
      "Our experienced team of Ph.D. chemists specializes in meticulously crafting optimal synthetic pathways for both novel and established compounds.",
    header: "CUSTOM SYNTHESIS",
    className: "slide2",
    id: "CustomSynthesis",
  },
  {
    caption:
      "We offer an extensive array of services encompassing drug discovery, development, and manufacturing. Our commitment is to deliver innovative solutions tailored to meet the diverse needs of our clients",
    header: "CRO/CDMO services",
    className: "slide3",
    id: "CROCDMOservices",
  },
  {
    caption:
      "The HASCHEM sourcing team has diligently cultivated relationships over several years with numerous partner organizations renowned for their specialized skills and technical prowess across India and China",
    header: "Chemical Sourcing",
    className: "slide4",
    id: "ChemicalSourcing",
  },
];

const CustomCarousel = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => setAnimating(true);
  const onExited = () => setAnimating(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={onExiting}
        onExited={onExited}
        key={item.className}
      >
        <a href="#" className="carousel-caption">
          <h3>{item.header}</h3>
          <p>{item.caption}</p>
          <Button onClick={() => handleNavigation(item.id)}>
            Know More
          </Button>
        </a>
      </CarouselItem>
    );
  });

  const handleNavigation = (section) => {
    navigate("/services");
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 500); // Delay to ensure the page has loaded
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={4999}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CustomCarousel;
