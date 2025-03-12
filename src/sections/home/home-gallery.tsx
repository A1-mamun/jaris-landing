import { Button, Image } from "@nextui-org/react";
import { Link } from "@/i18n/navigation";

const HomeGallery = ({ t }: { t: any }) => {
  return (
    <div className="relative bg-bg-primary lg:h-screen padding lg:px-24 xl:px-48 xl:p-64 lg:py-28 flex max-lg:flex-col-reverse items-center justify-center gap-24 lg:gap-8">
      <div className="flex flex-col items-start gap-12 flex-1 ">
        <div className="flex flex-col gap-1">
          <h4 className="heading-secondary font-bold text-jaris-blue">
            {t("homeGallery.title")}
          </h4>
          <p className="subtitle text-jaris-gold-dark">
            {t("homeGallery.description")}
          </p>
        </div>
        <Link href="/news-gallery">
          <Button
            size="lg"
            variant="solid"
            className="border-jaris-blue bg-transparent border-3 rounded-md lg:px-8"
          >
            <span className="subtitle text-jaris-blue font-semibold">
              {t("homeGallery.buttonText")}
            </span>
          </Button>
        </Link>
      </div>
      <div className="flex gap-4 max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <Image
          src="/images/home/gallery1.jpeg"
          alt="Gallery"
          className="w-[80%] max-lg:m-auto lg:w-[270px] xl:w-[350px] lg:h-full object-cover object-right flex-shrink-0"
        />
        <div className="h-full w-[80%] flex flex-col gap-4 ">
          <Image
            src="/images/home/gallery2.jpeg"
            alt="Gallery"
            className="max-lg:w-full lg:h-[200px] xl:h-[240px] lg:w-[270px] xl:w-[350px]"
          />
          <Image
            src="/images/home/gallery3.jpeg"
            alt="Gallery"
            className="max-lg:w-full lg:h-[200px] xl:h-[240px] lg:w-[270px] xl:w-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
