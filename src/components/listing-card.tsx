import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BedDouble, MapPin } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

type Props = {
  image?: string;
  title: string;
  location: string;
  price: number;
  rooms: number;
};

const ListingCard = ({ image, title, location, price, rooms }: Props) => {
  return (
    <Link href={"/"} className="w-full h-full relative">
      <Card className="overflow-hidden w-full h-full transition-all ease-in-out hover:border-primary">
        {/* <Carousel className="relative"> */}
        {/* <CarouselContent>
            <CarouselItem> */}
        <Image
          src={image || "/listings/placeholder.webp"}
          width={100}
          height={100}
          alt="Listing photo"
          objectFit="cover"
          className="w-full object-cover h-[150px]"
        />
        {/* </CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className="absolute left-0 text-white"
            variant="ghost"
          />
          <CarouselNext
            className="absolute right-0 text-white"
            variant="ghost"
          />
        </Carousel> */}
        {/* Card Content */}
        <CardContent className="p-4 pt-2">
          <h3 className="text-md leading-[1.25] font-semibold line-clamp-2 mb-1">
            {title}
          </h3>
          <div className="flex justify-between">
            <div className="flex items-center">
              <MapPin size={12} className="mr-1" />
              <p className="text-gray-500 line-clamp-1 text-sm">{location}</p>
            </div>
            <div className="flex items-center">
              <BedDouble size={12} className="mr-1" />
              <p className="text-gray-500 line-clamp-1 text-sm">{rooms}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-semibold text-end text-primary line-clamp-1">
              {formatPrice(price)}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
export default ListingCard;
