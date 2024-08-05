export default function Navbar() {
  return (
    <div className="flex justify-center p-4 bg-gray-100">
      <div className="flex items-center justify-between w-full max-w-6xl p-4 bg-white rounded-lg shadow-md">
        <div className=" flex items-center space-x-5">
          <span className="text-2xl font-bold">Buzz N Finds</span>
          <nav className="flex space-x-6 text-lg">
            <a href="#" className="hover:text-gray-700">
              Home
            </a>
            <a href="#" className="hover:text-gray-700">
              Technology
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* <button className="flex items-center px-3 py-1 space-x-2 text-sm font-medium bg-gray-200 rounded-full">
            <span>Dark</span>
            <MoonIcon className="w-4 h-4" />
          </button> */}
          <UserIcon className="w-6 h-6" />
          {/* <SearchIcon className="w-6 h-6" /> */}
        </div>
      </div>
    </div>
  );
}

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
