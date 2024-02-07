import Presentation from "@/components/Presentation";
import SearchCourts from "@/components/SearchCourt";

const Home = () => {
  return (
    <main className="px-2 py-4">
      <section className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-1">
          <Presentation class="md:col-span-4" />
          <SearchCourts class="md:col-span-6" />
      </section>
    </main>
  );
};

export default Home;
