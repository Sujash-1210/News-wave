import def_img from "../assets/default-image.jpg";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg overflow-hidden shadow-lg my-4 mx-auto w-full px-2 py-2 max-w-sm">
      <img
        src={src ? src : def_img}
        alt="News"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-2">
          {title.length > 50 ? `${title.slice(0, 50)}...` : title}
        </h5>
        <p className="text-gray-400 mb-4">
          {description
            ? `${description.slice(0, 90)}...`
            : "Breaking updates from across the globe, covering trends in all major sectors today"}
        </p>
        <a
          href={url}
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
