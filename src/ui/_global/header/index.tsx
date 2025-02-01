import { useAppContext } from "../../../lib/context";
import style from "./header.module.css";
import AuthUI from "./pieces/AuthUI";
import { A } from "@solidjs/router";

const Header = () => {
  const { authUser } = useAppContext();

  return (
    <header class={style.header}>
      <A href="/" class={style.logo}>
        😂
      </A>
      <div class={style.actions}>
        {authUser() && (
          <A href="/post-a-joke" class="btn-1">
            Post a Joke
          </A>
        )}
        <AuthUI />
      </div>
    </header>
  );
};

export default Header;
