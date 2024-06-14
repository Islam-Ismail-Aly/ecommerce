
import Carousel from 'react-bootstrap/Carousel';


export function MySlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/01/sell/images/posters/types-of-ecommerce-poster-01.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.licdn.com/dms/image/D4D12AQFUVy1wsgmhUA/article-cover_image-shrink_600_2000/0/1679654801464?e=1723680000&v=beta&t=aQCPjRTUj4u9jRvVmgJkVVgJYjs-50mKAGu6JAW-6NA"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/01/sell/images/posters/types-of-ecommerce-poster-01.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
