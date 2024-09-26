import Link from "next/link";
import Account_Menu from "./Account_Menu";
import Notification from "./Notification";
import Search from "./Search";

const Secondary_Navigation = () => {
  return (
    <div className="header-right flex justify-between items-center gap-4 w-[194px] h-10 w-max[214px]">
      <Search />
      <Link href="/kids" className="text-sm ">
        키즈
      </Link>
      <Notification />
      <Account_Menu />
    </div>
  );
};

export default Secondary_Navigation;
