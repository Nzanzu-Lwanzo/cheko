import Header from "../ui/_global/header";
import Hero from "../ui/home/Hero";
import JokesList from "../ui/_global/JokesList";
import FilterAndSearch from "../ui/_global/FilterAndSearch";
import Footer from "../ui/_global/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <FilterAndSearch /> */}
      <JokesList />
      <Footer />
    </>
  );
};

export default HomePage;
