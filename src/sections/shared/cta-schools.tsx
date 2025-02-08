"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ctaSchoolsCarouselItems } from "@/data";
import { Button, Link } from "@nextui-org/react";

const CTASchools = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="relative w-full padding-y lg:py-36 bg-[url('/images/home/_DSC0188-Enhanced-NR.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-jaris-blue opacity-75" />
      <div className="relative z-20 w-full flex flex-col items-center justify-center gap-44">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          speed={1500}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          spaceBetween={70}
          loop={true}
          pagination={pagination}
          modules={[Autoplay, Pagination]}
          className="mySwiper cta-swiper w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
        >
          {ctaSchoolsCarouselItems.map((item: any, index: number) => (
            <SwiperSlide
              key={index}
              className="!w-[90%] md:!w-[55%] !h-[85%] md:!h-[90%]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <div
                  className="absolute inset-0 bg-cover rounded-xl scale-110"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(177, 114, 31, 0.1) 0%, #1C406F 100%), url(${item.imgUrl})`,
                  }}
                />
                <div className="relative z-20 h-full padding flex flex-col items-center justify-end gap-5">
                  <h1 className="title font-bold text-bg-text">{item.title}</h1>
                  <p className="subtitle text-bg-primary text-center">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col items-start justify-center gap-12">
          <div className="heading-md">
            <p className="text-jaris-gold">Unleash Your Full</p>
            <p className="text-jaris-gold">Potential With Us</p>
            <p className="text-bg-text">Start Your Journey Today!</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Link href="/schools">
              <Button
                size="lg"
                variant="bordered"
                className="border-jaris-gold border-3 rounded-md lg:px-8"
              >
                <span className="subtitle text-jaris-gold font-semibold">
                  Explore our Schools
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="solid"
                className="bg-jaris-gold rounded-md lg:px-8"
              >
                <span className="subtitle text-jaris-blue font-semibold">
                  Contact Us
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASchools;
