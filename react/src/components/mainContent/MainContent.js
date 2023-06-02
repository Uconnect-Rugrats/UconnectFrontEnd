import React, { useEffect, useState } from "react";
import WritePostContainer from "./WritePostContainer";
import Post from "./Post";
import ucoLogo from "../../images/uco_logo.png";
import userLogo from "../../images/user-uconnect.webp";

const MainContent = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchComments = () => {
      fetch("http://localhost:8080/uconnect/api/v1/comentario")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPostList(data);
        })

        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchComments();
  }, []);

  return (
    <div className="posts-container">
      {postList &&
        postList.map((post) => {
          console.log(postList)
          return (
            <Post
              user={post.autor}
              imgUser={ucoLogo}
              group={post.autor.grupo}
              date={post.fechaPublicacion}
              content={post.contenido}
              numReactions={10}
              numComments={10}
            />
          );
        })}
    </div>
  );
};

export default MainContent;
