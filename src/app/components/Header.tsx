import Nav from "@/app/components/Nav";
import Secondary_Navigation from "./Secondary_Navigation";

const Header = () => {
  return (
    <header className="mx-auto relative w-full max-h-[72px] flex justify-between items-center min-w-screen px-[3vw] py-[2vh] bg-transparent">
      <Nav />
      <div className="header-right flex justify-between items-center">
        <Secondary_Navigation />

        {/* <div className="select-language flex justify-between items-center">
          <div className="language-img ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              data-icon="LanguagesSmall"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <select className="flex justify-center text-base font-normal items-center ml-2 rounded-sm px-8 py-1.5">
            <option value="korean">한국어</option>

            <option value="english">English</option>
          </select>
          <div className="select-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              data-icon="CaretDownSmall"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div> */}
        {/* <button className="w-74 h-30 bg-red-600 ml-2 px-4 py-1.5 rounded-md">
          로그인
        </button> */}
      </div>
    </header>
  );
};

export default Header;
