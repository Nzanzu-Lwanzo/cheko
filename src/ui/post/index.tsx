import style from "./postajoke.module.css";
import { A } from "@solidjs/router";

const PostAJokeForm = () => {
  return (
    <form class={style.postAJokeCard}>
      <div class={style.top}>
        <h1>Post A Joke</h1>
        <A href="/" class="btn-1">
          Home
        </A>
      </div>
      <div class="input">
        <label for="title">Joke title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="A label for the joke"
        />
      </div>

      <div class="input">
        <label for="tags">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          placeholder="tags-separated-by-dashed"
        />
      </div>

      <div class="input">
        <label for="">Content of the joke</label>
        <div contentEditable={true} class={style.textarea}></div>
      </div>

      <button type="submit" class={`${style.postBtn} btn-1`}>
        Post The Joke
      </button>
    </form>
  );
};

export default PostAJokeForm;
