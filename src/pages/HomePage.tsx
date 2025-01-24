import Header from "../ui/_global/header";
import Hero from "../ui/home/Hero";
import JokesList from "../ui/_global/JokesList";
import FilterAndSearch from "../ui/_global/FilterAndSearch";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <FilterAndSearch /> */}
      <JokesList />
    </>
  );
};

export default HomePage;
