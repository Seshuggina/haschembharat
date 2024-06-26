import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const items = [
  {
    caption:
      "Our mission is to deliver premium-grade API impurities and Reference standards, setting the benchmark for quality and reliability in the industry.",
    header: "API Impurities/Reference Standards",
    className: "slide1",
  },
  {
    caption:
      "Our experienced team of Ph.D. chemists specializes in meticulously crafting optimal synthetic pathways for both novel and established compounds.",
    header: "CUSTOM SYNTHESIS",
    className: "slide2",
  },
  {
    caption:
      "We offer an extensive array of services encompassing drug discovery, development, and manufacturing. Our commitment is to deliver innovative solutions tailored to meet the diverse needs of our clients",
    header: "CRO/CDMO services",
    className: "slide3",
  },
  {
    caption: "Slider 4 Caption 4",
    header: "Slider 4 Header 4",
    className: "slide4",
  },
  {
    caption: "Slider 5 Caption 5",
    header: "Slider 5 Header 5",
    className: "slide5",
  },
];

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <a href="#" className="carousel-caption">
            <h3>{item.header}</h3>
            <p>{item.caption}</p>
            <Link to="/services#">
              <Button>Know More</Button>
            </Link>
          </a>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={4999}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default CustomCarousel;
