import { useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton
  } from "@material-tailwind/react";

const MainPage = () => {

    const [openNav, setOpenNav] = useState(false);
 
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">


          <Typography
            as="li"
            variant="small"
            color="white"
            className="flex items-center gap-x-2 p-1 font-medium"
          >
            <a href="#" className="flex items-center">
              Pages
            </a>
          </Typography>


          <Typography
            as="li"
            variant="small"
            color="white"
            className="flex items-center gap-x-2 p-1 font-medium"
          >
            <a href="#" className="flex items-center">
              Account
            </a>
          </Typography>



          <Typography
            as="li"
            variant="small"
            color="white"
            className="flex items-center gap-x-2 p-1 font-medium"
          >
            <a href="#" className="flex items-center">
              Blocks    
            </a>
          </Typography>


          <Typography
            as="li"
            variant="small"
            color="white"
            className="flex items-center gap-x-2 p-1 font-medium"
          >
            <a href="#" className="flex items-center">
              Docs
            </a>
          </Typography>



        </ul>
    );

    return(
        <div className="-m-6 max-h-[768px] w-[calc(100%+24px)]">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none bg-[#031329]">
                <div className="flex items-center justify-between text-white">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    Material Tailwind
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                    <Link to="/login" className="hidden lg:inline-block">Вход</Link>
                    <Link to="/registration " className="hidden lg:inline-block">Регистрация</Link>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    )}
                </IconButton>
                </div>
                <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Link to="/login">Вход</Link>
                        <Link to="/registration ">Регистрация</Link>
                    </div>
                </div>
                </MobileNav>
                <Outlet />
            </Navbar>
        </div>
    )
}
    
export default MainPage;