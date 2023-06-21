import React from "react";
import { BlogEntry } from "../Components/BlogEntry";
import useBlogData from "../Shared/Context/BlogDataContext";
import { Button } from "../Style/Components/ButtonStyle";
import Modal from "../Style/Components/ModalStyle";
import { PageStyle } from "../Style/PageStyle";

function Home() {
  const blogContext = useBlogData();

  const [isOpen, setIsOpen] = React.useState(false);

  const addBlogPost = () => {
    blogContext.addBlogPost(blogContext.blogPosts[0])
  }
  

  return (
    <PageStyle.Page>
      <Button onClick={() => addBlogPost()}>Add Blog Post</Button>
      <Button onClick={() => setIsOpen(true)}>Show Modal</Button>
      <Modal.Background isOpen={isOpen} onClick={() => setIsOpen(false)} >
        <Modal.Container>
          <div>This is the modal content</div>
        </Modal.Container>
      </Modal.Background>

      {blogContext.blogPosts.map((post) => {
        return <BlogEntry key={post.id} blogPost={post} />;
      })}
    </PageStyle.Page>
  );
}

export default Home;
