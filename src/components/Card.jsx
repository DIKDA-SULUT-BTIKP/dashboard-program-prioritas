import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ title, date, linkTo }) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow w-[350px]">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700">
        Data per Tanggal <span className="font-bold text-red-500">{date}</span>
      </p>
      <Link
        to={linkTo}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
      >
        Detail
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default Card;
