import Slider from "react-slick";

const TestiCarousel = ({ testimonials }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots slick-dots-white",
  };
  return (
    <Slider {...settings}>
      {testimonials.map((product) => (
        <div
          key={product.id}
          className="w-full flex-shrink-0"
          style={{ width: `${100 / testimonials.length}%` }} // <- jeder Slide = voller Viewport
        >
          <div className="relative h-[50vh] ">
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white p-4 md:p-8 max-w-4xl">
                <p className="text-base mb-6">{product.description}</p>
                <h2 className="text-xl font-bold mb-4">{product.name}</h2>
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-full w-16 h-16 object-cover m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestiCarousel;
