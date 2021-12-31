import { useParams } from "react-router-dom";

const Post = () => {
  const { ca } = useParams();
//   console.log(id);
  return <span>Url id is = {ca} </span>;
};
export default Post;
