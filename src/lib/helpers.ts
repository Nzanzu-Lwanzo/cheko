import type { User } from "firebase/auth";
import { AuthUser } from "./context";

export function getRelevantUserInfo(user: User) {
  const relevantData: AuthUser = {
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
    uid: user.uid,
    reload: user.reload,
  };

  return relevantData;
}

export function temp_store_write(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function temp_store_read<T>(key: string): T | undefined {
  const jsonData = localStorage.getItem(key);
  if (!jsonData) return;
  const data = JSON.parse(jsonData || "{}");
  return data;
}

export function temp_store_delete(key?: string) {
  if (!key) {
    localStorage.clear();
    return;
  }

  localStorage.removeItem(key);
}
