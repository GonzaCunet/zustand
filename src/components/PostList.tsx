import { useStore } from "zustand";
import { postListState } from "../atoms/postListState";

export const PostList = () => {
  const postIts = useStore(postListState);
  return (
    <ol>
      {postIts.posts.map((value, index) => (
        <li key={index}>
          <h1>{value}</h1>
        </li>
      ))}
    </ol>
  );
};
