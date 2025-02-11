import { createEffect, createResource } from "solid-js";
import style from "./hero.module.css";
import { getAllJokes } from "../../firebase/queries";
import { JokeType } from "../../lib/types";

const Hero = () => {
  const [jokes,fns] = createResource<JokeType[]>(getAllJokes);

  createEffect(()=>{
    console.log(jokes())
  })

  return (
    <section class={`center ${style.hero}`}>
      <h1>
        Hey yo ! Somebody told me you like laughing 😃 ! Check these jokes out
        😂 !{" "}
      </h1>
    </section>
  );
};

export default Hero;
