import { Search } from "lucide-react";
import { useState } from "react";

const InputSearch = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <Search size={20} className={`text-gray-400`} />
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder="Search a post..."
        className="bg-transparent outline-none"
      />
    </div>
  );
};

export default InputSearch;
