import Presentation from "@/components/Presentation";
import SearchCourts from "@/components/SearchCourt";
import Header from "@/components/Header";
import SearchCourtsGrid from "@/components/SearchCourtsGrid";

const Home = () => {
  return (
    <main>
      <section
        className="w-full h-screen px-4 py-10 sm:py-6"
        style={{
          background: "url(/basquetHero.jpg) center / cover no-repeat",
        }}
      >
        <Header />
        <div className="flex flex-col sm:grid sm:grid-cols-10 grid-rows-2 lg:pt-[15%]">
          <Presentation class="lg:col-span-4 sm:col-span-10 sm:row-span-1 h-full w-full" />
          <SearchCourtsGrid class="lg:col-span-6 sm:col-span-10 sm:row-span-1 h-full w-full" />
        </div>
      </section>
      <section>asasas</section>
    </main>
  );
};

export default Home;
