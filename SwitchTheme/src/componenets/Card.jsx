// Card.jsx
const Card = ({
  image = "https://images.pexels.com/photos/10825663/pexels-photo-10825663.jpeg",
  category = "Skincare",
  name = "Monarch | Cannabari Serum",
  rating = 4,
  reviews = 128,
  price = 599,
  href = "/",
}) => {
  return (
    <article className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <a href={href} className="block">
          <img
            className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={image}
            alt={name}
          />
        </a>

        {/* Wishlist button */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur transition hover:scale-110 hover:text-red-500 dark:bg-gray-900/90 dark:text-gray-200"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M12 21s-6.5-4.35-9.2-8.05C1.1 10.9 1 8.6 2.6 6.9 4.2 5.2 6.9 5.1 8.6 6.7L12 9.9l3.4-3.2c1.7-1.6 4.4-1.5 6 .2 1.6 1.7 1.5 4-.2 6.05C18.5 16.65 12 21 12 21Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {category}
        </span>

        {/* Product Name */}
        <a href={href}>
          <h2 className="mt-2 text-xl font-bold leading-snug tracking-tight text-gray-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
            {name}
          </h2>
        </a>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1.5">
          <div className="flex text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= rating ? "" : "text-gray-300 dark:text-gray-700"
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {rating.toFixed(1)}
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500">
            ({reviews})
          </span>
        </div>

        {/* Price + Action */}
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-gray-100 pt-4 dark:border-gray-800">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Price</p>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg active:scale-95">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
