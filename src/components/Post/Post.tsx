import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Post = () => {
  let { postId } = useParams();
  const [post, setPost] = useState<any>({});

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/blog/post/${postId}`
      );
      const json = await response.json();
      const actualPost = json.post;
      setPost(actualPost);
    };
    fetchData();
  }, [postId]);


  return (
    <section className="post-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-0" />
          <div className="col-lg-10 col-md-12">
            {post && (
              <div className="main-post">
                <div className="post-top-area">
                  <h5 className="pre-title">Nest React Blog</h5>
                  <h3 className="title">
                    <span>
                      <b>{post.title}</b>
                    </span>
                  </h3>
                  <p className="para">{post?.body}</p>
                  <li className="btn btn-dark btn-sm mb-4 mt-1  btn-outline-dark" >
                     Read More
                </li>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
