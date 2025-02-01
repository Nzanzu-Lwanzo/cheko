import style from "../authcard.module.css";

const OAuth = () => {
  return (
    <>
      <button type="button" class={style.google}>
        Login with your Google Account
      </button>
    </>
  );
};

export default OAuth;
