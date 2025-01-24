import style from "./header.module.css";
import AuthUI from "./pieces/AuthUI";

const Header = () => {
  return (
    <header class={style.header}>
      <div class={style.logo}>😂</div>
      <div class={style.actions}>
        <button type="button" class="btn-1">
          Post a Joke
        </button>
        <AuthUI />
      </div>
    </header>
  );
};

export default Header;
