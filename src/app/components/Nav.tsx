import React from "react";
import Logo from "@/app/components/Logo";
import Link from "next/link";
const Nav = () => {
  return (
    <div className="flex justify-start items-center w-full max-w-[680px] max-h-[72px]">
      <div className="flex header-left">
        <Logo />
      </div>
      <ul className="flex gap-5 sm:text-[12px] text-[clamp(0.5rem,2.5vw,0.88rem)] ">
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/browse/genre/series">시리즈</Link>
        </li>
        <li>
          <Link href="/browse/genre/movie">영화</Link>
        </li>
        <li>
          <Link href="/latest">NEW! 요즘 대세 콘텐츠</Link>
        </li>
        <li>
          <Link href="/browse/my-list">내가 찜한 리스트</Link>
        </li>
        <li>
          <Link href="/browse/original-audio">언어별로 찾아보기</Link>
        </li>
      </ul>
      {/* <div className="max-w-20 flex items-center group">
        <p>메뉴</p>
        <span className="border-white border-l-transparent border-r-transparent border-solid border-t-4 border-r-4 border-l-4 h-0 w-0 ml-2.5 max-w-20 transition-transform duration-367 group-hover:rotate-180 transition-timing-function: cubic-bezier(0.21,0,0.07,1)">
          디테일한 드롭다운 메뉴 위치
        </span>
      </div> */}
    </div>
  );
};

export default Nav;
