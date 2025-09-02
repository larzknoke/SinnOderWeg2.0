import Slider from "react-slick";

const PartnerCarousel = ({ partners }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots slick-dots-white",
  };
  return (
    <Slider {...settings}>
      {partners.map((partner) => (
        <img
          src={partner.image}
          alt={partner.id}
          className=" object-cover m-auto "
        />
      ))}
    </Slider>
  );
};

export default PartnerCarousel;
