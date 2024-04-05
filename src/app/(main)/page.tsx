import ListingCard from "@/components/listing-card";
import ListingViewMoreCard from "@/components/listing-view-more-card";
import SearchForm from "@/components/search-form";
import { db } from "@/db";
import { users, usersInsert } from "@/db/schema";
import { listings } from "@/lib/constants";
import { currentUser } from "@clerk/nextjs";
import { Flame, Heart } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <div className="">
      <section className="h-[300px] flex flex-col justify-end items-center pb-10 bg-hero">
        <h1 className="relative z-10 text-3xl font-semibold text-white mb-10">
          Find Your Dream <span className=" text-primary">Home</span>
        </h1>
        <SearchForm />
      </section>
      <section className="container">
        <div className="flex items-center mb-5">
          <Flame size={24} className="text-primary mr-2" />
          <h3 className="text-xl font-semibold">Hottest Today</h3>
        </div>
        <div className="grid grid-cols-6 grid-rows-2 gap-4">
          {listings.slice(0, 12).map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
          <ListingViewMoreCard />
        </div>
      </section>
      <section
        id="you-might-like"
        className="bg-gradient-to-l from-primary/75 to-primary"
      >
        <div className="container">
          <div className="flex items-center mb-5">
            <Heart size={24} className="text-white mr-2" />
            <h3 className="text-xl font-semibold text-white">You Might Like</h3>
          </div>
          <div className="grid grid-cols-6 grid-rows-auto gap-4">
            {listings.slice(0, 6).map((listing, index) => (
              <ListingCard key={index} {...listing} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
