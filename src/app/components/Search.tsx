"use client";

import { useState } from "react";

const Search = () => {
  // 상태로 검색창을 보여줄지 여부를 제어
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // 돋보기를 클릭했을 때 검색창을 토글하는 함수
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleSearch}
        className="flex items-center justify-center w-10 h-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          data-icon="MagnifyingGlassStandard"
          aria-hidden="true"
          className="search-icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      {isSearchOpen && (
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="absolute top-0 left-12 w-[275px] h-[36px] border border-gray-300 rounded-lg px-4 transition-all"
        />
      )}
    </div>
  );
};

export default Search;
