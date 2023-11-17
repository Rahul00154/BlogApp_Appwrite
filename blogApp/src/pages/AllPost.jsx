/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import appwriteService from "../../src/appwrite/appwriteServices";
import { Container, PostCard } from "../components/index";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPost([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  return (
    <div className="w-full py-7">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
