import { Search } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const InputSearch = () => {
  const [searchInput, setSearchInput] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      if (location.pathname === "/post") {
        setSearchParams({ ...Object.fromEntries(searchParams), search: query });
      } else {
        navigate(`/post?search=${query}`);
      }
    }
  };

  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <Search size={20} className={`text-gray-400`} />
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder="Search a post..."
        className="bg-transparent outline-none"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default InputSearch;
