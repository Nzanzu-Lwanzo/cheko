import style from "../filterandsearch.module.css";

const Filter = () => {
  return <div class={style.filter}>
    <button type="button" class={style.tag}>#Policier</button>
    <button type="button" class={style.tag}>#BlackJokes</button>
    <button type="button" class={style.tag}>#Church</button>
    <button type="button" class={style.tag}>#Cigarette</button>
    <button type="button" class={style.tag}>#Vieilles</button>
    <button type="button" class={style.tag}>#Asalfo</button>
  </div>;
};

export default Filter;
