import HeadLine from "../HeadLine/HeadLine";
import { blogs } from "../../data/app-data";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-screen-xl mx-auto">
        <HeadLine
          subheading="Our Blogs"
          heading="Latest Articles And Insights"
        />

        <div className="mx-4 xl:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {blogs.map((blog) => (
            <BlogCard key={blog.b_id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
