import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, BedDouble, MapPin, Plus } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { Props } from "next/script";
import { title } from "process";

const ListingViewMoreCard = () => {
  return (
    <Link href={"/"} className="w-full h-full">
      <Card className="w-full h-full flex flex-col items-center justify-center text-gray-500 view-more-hover hover:border-primary transition-all ease-in-out">
        <ArrowRight
          size={32}
          className="icon transition-[rotate,transform]  ease-in-out"
        />
        {/* Card Content */}
        <CardContent className="p-4 pt-2">
          <h3 className="transition-transform ease-in-out">View more</h3>
        </CardContent>
      </Card>
    </Link>
  );
};
export default ListingViewMoreCard;
