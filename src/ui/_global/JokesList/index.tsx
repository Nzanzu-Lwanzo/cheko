import style from "./jokeslist.module.css";
import JokeCard from "./JokeCard";

const JokesList = () => {

  return (
    <section class={`${style["jokes-list"]} grid`}>
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
        <JokeCard />
    </section>
  );
};

export default JokesList;
