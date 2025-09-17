const BlogCard = ({ blog }) => {
  return (
    <div className="card bg-white shadow-sm overflow-hidden  hover:-translate-y-1 transition duration-300 group cursor-pointer">
      <figure>
        <img
          src={blog?.thumbnail}
          alt={blog?.type}
          className="group-hover:scale-110 transition duration-150"
        />
      </figure>
      <div className="card-body">
        <span className="text-base uppercase font-medium text-blue-600">
          {blog?.type}
        </span>
        <h2 className="card-title text-lg font-bold text-gray-800 leading-normal">
          {blog?.title}
        </h2>
        <p className="text-base text-gray-600 leading-normal">{blog?.desc}</p>
        <div className="flex items-center gap-3 mt-2">
          <img src={blog.profile?.u_image} alt={blog.profile?.u_name} />
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-gray-800">
              {blog.profile?.u_name}
            </h3>
            <p className="text-xs italic text-gray-600">{blog.profile?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
