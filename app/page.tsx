import Presentation from "@/components/Presentation";
import SearchCourts from "@/components/SearchCourt";

const Home = () => {
  return (
    <main className="px-2 py-4">
      <section className="relative">
          <Presentation/>
          <SearchCourts />
      </section>
    </main>
  );
};

export default Home;
