import Presentation from "@/components/Presentation";
import SearchCourts from "@/components/SearchCourt";
import Header from "@/components/Header";

const Home = () => {
  return (
    <main>
      <section
        className="w-full h-screen px-4 py-10 sm:py-6"
        style={{ background: "url(/basquetHero.jpg) center / cover no-repeat" }}
      >
        <Header />
        <Presentation />
        <SearchCourts />
      </section>
      <section>asasas</section>
    </main>
  );
};

export default Home;
