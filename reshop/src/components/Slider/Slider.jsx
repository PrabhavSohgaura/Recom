import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap/lib/InputGroup";

const Slider = () => {
  const sliderItem = [
    {
      id: 1,
      caption: "All the Lastest Product In One Place",
      img: img1,
    },
    {
      id: 2,
      caption: "Grab the Lastest Product",
      img: img2,
    },
    {
      id: 3,
      caption: "Find All Your Needs In One Place",
      img: img3,
    },
  ];
  return (
    <div>
      <Carousel>
        {sliderItem.map((item) => {
          return (
            <Carousel.item key={item.id}>
              <img className="d-block w-100" src={item.img} alt="First slide" />
              <Carousel.caption>
                <h1
                  style={{
                    color: "aliceblue",
                    fontSize: "48px",
                    lineHeight: "48px",
                  }}
                >
                  {item.caption}
                </h1>
                <p>
                  A single place for all your products. Discover more products
                  on our products secion
                </p>
                <Button>
                  <a href="#product-item">Discover slider</a>
                </Button>
              </Carousel.caption>
            </Carousel.item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
