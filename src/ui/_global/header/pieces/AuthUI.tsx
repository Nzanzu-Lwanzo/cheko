import { useAppContext } from "../../../../lib/context";
import { temp_store_delete } from "../../../../lib/helpers";
import style from "../header.module.css";
import { A } from "@solidjs/router";

const AuthUI = () => {
  const { authUser, setAuthUser } = useAppContext();

  return (
    <>
      {authUser() ? (
        <button class={`center ${style["auth-ui"]}`} onClick={()=>{
          setAuthUser(undefined);
          temp_store_delete('checko-auth')
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-log-out"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
        </button>
      ) : (
        <A href="/auth" class={`center ${style["auth-ui"]}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-user-round"
          >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </A>
      )}
    </>
  );
};

export default AuthUI;
