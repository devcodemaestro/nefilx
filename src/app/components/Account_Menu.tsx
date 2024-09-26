import Image from "next/image";

const Account_Menu = () => {
  return (
    <div className="flex items-center max-w-52 max-h-32 group">
      <Image
        src="/images/profile_icon1.png"
        alt="프로필 아이콘"
        width={32}
        height={32}
        className="rounded-md"
      />
      <div className="max-w-20 flex items-center">
        <span className="border-white border-l-transparent border-r-transparent border-solid border-t-4 border-r-4 border-l-4 h-0 w-0 ml-2.5 max-w-20 transition-transform duration-367 group-hover:rotate-180 transition-timing-function: cubic-bezier(0.21,0,0.07,1)">
          {/* <Dropdown /> */}
        </span>
      </div>
    </div>
  );
};

export default Account_Menu;
