import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="grid gap-y-8 place-content-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Raport Pendidikan
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">
            Data per Tanggal{" "}
            <span className="font-bold text-red-500">12 Oktober</span>
          </p>
          <Link
            to="/raport"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 "
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
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Progress Akun Belajar.id
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">
            Data per Tanggal{" "}
            <span className="font-bold text-red-500">12 Oktober</span>
          </p>
          <Link
            to="/school"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 "
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
      </div>
    </>
  );
};

export default Home;
