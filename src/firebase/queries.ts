import { getDocs, collection, addDoc } from "firebase/firestore";
import { dastabase } from "./config";
import { JokeType } from "../lib/types";

const jokesCollection = collection(dastabase, "jokes");

export const getAllJokes = async () => {
  const jokes = await getDocs(jokesCollection);
  return jokes.docs.map((joke) => {
    return {
      ...joke.data(),
      id: joke.id,
      get: (field: string) => {
        return joke.get(field, {});
      },
    } as unknown as JokeType;
  });
};

export const createJoke = async (data: JokeType) => {
  const createdJoke = await addDoc(jokesCollection, data);
  return createdJoke.id;
};
