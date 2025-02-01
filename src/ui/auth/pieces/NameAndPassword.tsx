import style from "../authcard.module.css";

const NameAndPassword = () => {
  return (
    <>
      <div class={style.inputs}>
        <label for="email">Email adress</label>
        <input
          type="email"
          name="email"
          placeholder="person@gmail.com"
          id="email"
          autocomplete="email"
        />
      </div>
      <div class={style.inputs}>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="secret password"
          id="password"
          autocomplete="current-password"
        />
      </div>
      <button type="submit" class={`btn-1 ${style.submit}`}>
        Log in
      </button>
    </>
  );
};

export default NameAndPassword;
