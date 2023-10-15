const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const range = (from, to) => {
    const range = [];
    for (let i = from; i <= to; i++) {
      range.push(i);
    }
    return range;
  };

  const maxDisplayedPages = 3;

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > maxDisplayedPages) {
    const halfMaxPages = Math.floor(maxDisplayedPages / 2);
    if (currentPage <= halfMaxPages) {
      startPage = 1;
      endPage = maxDisplayedPages;
    } else if (currentPage >= totalPages - halfMaxPages) {
      startPage = totalPages - maxDisplayedPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfMaxPages;
      endPage = currentPage + halfMaxPages;
    }
  }

  const showPrev = currentPage > 1;
  const showNext = currentPage < totalPages;

  return (
    <div className="flex items-center justify-center mt-4 space-x-4">
      {showPrev && (
        <button
          className="bg-white text-[#C81E1E] px-4 py-2 rounded-full cursor-pointer"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      {range(startPage, endPage).map((page) => (
        <button
          key={page}
          className={`${
            page === currentPage
              ? "bg-[#C81E1E] text-white"
              : "bg-white text-[#C81E1E]"
          } px-4 py-2 rounded-full cursor-pointer`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {showNext && (
        <button
          className="bg-white text-[#C81E1E] px-4 py-2 rounded-full cursor-pointer"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
