import style from "./authcard.module.css";
import OAuth from "./pieces/OAuth";
import NameAndPassword from "./pieces/NameAndPassword";
import type { DOMElement } from "solid-js/jsx-runtime";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { FirebaseError } from "firebase/app";
import { getRelevantUserInfo, temp_store_write } from "../../lib/helpers";
import { useAppContext } from "../../lib/context";
import { useNavigate } from "@solidjs/router";

const AuthCard = () => {
  const { setAuthUser } = useAppContext();

  const navigateTo = useNavigate();

  const handleResponse = (user: User) => {
    console.log(user)
    const relevantData = getRelevantUserInfo(user);
    setAuthUser(relevantData);
    temp_store_write("checko-auth", relevantData);
    navigateTo("/");
  };

  const handleSubmit = (
    event: SubmitEvent & {
      currentTarget: HTMLFormElement;
      target: DOMElement;
    }
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as {
      email: string;
      password: string;
    };

    // Try to sign in
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => handleResponse(user))
      .catch((error: FirebaseError) => {
        // Then try to create the account
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then(({ user }) => handleResponse(user))
          .catch((error) => {});
      });
  };

  return (
    <section class={`center ${style.authCardSection}`}>
      <form class={style.card} onsubmit={handleSubmit}>
        <h2>Log In to Post Jokes</h2>
        <NameAndPassword />
        <OAuth />
      </form>
    </section>
  );
};

export default AuthCard;
