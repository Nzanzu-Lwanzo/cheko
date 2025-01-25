import style from "./jokeslist.module.css";

const JokeCard = () => {
  return (
    <div class={style["grid-item"]}>
      <div class={style.image}>
        <div class={`${style.title} center`}>
          <h2>Toto et sa maîtresse au Parc</h2>
          <div class={style.btns}>
            <button type="button" class={style.icon}>
              <span class="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-eye"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <span>10k</span>
            </button>
            <button class={style.icon}>
                <span>😂</span>
                <span>1.2k</span>
            </button>
          </div>
        </div>
      </div>

      <div class={style["stats"]}>
        <div class={style.author}>
          <div class={`${style["author-image"]} center`}>
            <img
              src="https://media.gettyimages.com/id/2147595673/photo/portrait-of-two-senior-friends.jpg?s=612x612&w=0&k=20&c=eeP79LYYieUBETDHEnybkOKBmZI5h_4xkhxyvGY0Zxo="
              alt=""
            />
          </div>

          <span>
            <strong class={style.imp}>Nzanzu Lwanzo</strong> | posted on{" "}
            <strong class={style.imp}>12.12.2025</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default JokeCard;
