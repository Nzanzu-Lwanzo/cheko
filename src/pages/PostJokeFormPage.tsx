import PostAJokeForm from "../ui/post";
import style from '../ui/post/postajoke.module.css'

const PostJokeFormPage = () => {
  return (
    <div class={`${style.postAJokePage} center`}>
      <PostAJokeForm />
    </div>
  );
};

export default PostJokeFormPage;
