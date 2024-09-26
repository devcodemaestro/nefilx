import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative w-full max-w-[112px] max-h-[63px]  mr-[2vw]"
    >
      <Image
        src="/images/logo.png"
        alt="넷플릭스 공식 이미지"
        width={16}
        height={9}
        layout="responsive"
        loading="lazy"
        // className="hidden md:block"
      />
    </Link>
  );
};

export default Logo;
