import { useStore } from "zustand";
import { postListState } from "../atoms/postListState";

export function handleSubmit(e: any) {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  console.log(target["post"].value);
}

export const PostCreator = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="post" />
      <button type="submit">Postear</button>
    </form>
  );
};
