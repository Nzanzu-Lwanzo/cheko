import style from "./hero.module.css";

const Hero = () => {
  return (
    <section class={`center ${style.hero}`}>
      <h1>
        Hey yo ! Somebody told me you can like laughing 😃 ! Check these jokes
        out 😂 !{" "}
      </h1>
    </section>
  );
};

export default Hero;
