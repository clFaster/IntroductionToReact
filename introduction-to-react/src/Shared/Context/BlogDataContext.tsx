import React from "react";
import { BlogPost } from "../Models/BlogPost";

// Define the shape of the context
export interface BlogDataContextProps {
  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
}

// Create the initial context state
const initialBlogContext: BlogDataContextProps = {
  blogPosts: [],
  addBlogPost: () => {},
};

// Create the context
export const BlogContext =
  React.createContext<BlogDataContextProps>(initialBlogContext);

// Create the context provider component
export const BlogDataProvider = (props: React.PropsWithChildren) => {
  const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);

  React.useEffect(() => {
    // Simulated API call to fetch blog posts
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    fetch("posts.json").then(response => response.json()).then(data => {
        console.log(data.blogPosts);
        setBlogPosts(data.blogPosts);
    });
  };

  const addBlogPost = React.useCallback((newPost: BlogPost) => {
    setBlogPosts((prevPosts) => [...prevPosts, newPost]);
  }, []);

  // Memoize the provider value so that a new object is only created when the value changes
  const providerValue = React.useMemo(
    () => ({ blogPosts, addBlogPost }),
    [blogPosts, addBlogPost]
  );

  return (
    <BlogContext.Provider value={providerValue}>
      {props.children}
    </BlogContext.Provider>
  );
};

const useBlogData = () => React.useContext(BlogContext);
export default useBlogData;