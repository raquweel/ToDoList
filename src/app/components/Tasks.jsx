export default function Tasks({ tasks, onTaskClick }) {
  return (
    <ul className="gap-5 p-6 flex flex-col w-100 bg-[#f8cece] rounded-md shadow">
      
      <li className="flex flex-row gap-1.5">
        <button 
        onClick={() => onTaskClick(tasks.id)}
        className="flex-col gap-2 px-14 py-2 w-80 bg-[#cb8281] hover:bg-[#92cf50] rounded-md text-white">
          Title
        </button>
        <button className="flex-col gap-2 px-2 py-2 bg-[#cb8281] hover:bg-[#d06361] rounded-md text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="flex-col gap-2 px-2 py-2 bg-[#cb8281] hover:bg-red-500 rounded-md text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M2.515 10.674a1.875 1.875 0 0 0 0 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374ZM12.53 9.22a.75.75 0 1 0-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L15.31 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>

    </ul>
  );
}
