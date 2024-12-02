import { useEffect, useState } from "react";

const useMobile = (breakpoint = 1150) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Lắng nghe sự thay đổi kích thước màn hình
    window.addEventListener("resize", handleResize);

    // Dọn dẹp listener khi unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useMobile;
