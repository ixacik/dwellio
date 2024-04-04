import SearchForm from "@/components/search-form";

export default function Home() {
  return (
    <div className="">
      <section className="h-[300px] flex flex-col justify-end items-center pb-10 bg-hero">
        <h1 className="relative z-10 text-3xl font-semibold text-white mb-10">
          Find Your Dream <span className=" text-primary">Home</span>
        </h1>
        <SearchForm />
      </section>
      <section className="container">
        <h3 className="text-xl font-semibold">Hottest Today</h3>
      </section>
    </div>
  );
}
