import dayjs from "dayjs";
import { BlogPost } from "../Shared/Models/BlogPost";
import { TextStyle } from "../Style/Components/TextStyle";
import { PageStyle } from "../Style/PageStyle";

interface BlogEntryProps {
  blogPost: BlogPost;
}

export const BlogEntry = (props: BlogEntryProps) => {
  return (
    <PageStyle.BlogPost>
      <TextStyle.Title>{props.blogPost.title}</TextStyle.Title>
      <TextStyle.Subtitle>{props.blogPost.subtitle}</TextStyle.Subtitle>
      <TextStyle.Text>{props.blogPost.content}</TextStyle.Text>
      <TextStyle.Date>
        {dayjs(props.blogPost.creationDate).format("YYYY-MM-DD HH:mm:ss")}
      </TextStyle.Date>
    </PageStyle.BlogPost>
  );
};
