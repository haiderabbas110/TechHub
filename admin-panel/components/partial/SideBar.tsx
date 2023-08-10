import Logo from "@/../../components/logo";
import Navigation from "../Navigation";

const SideBar = () => {
  return (
    <div className="sidebar bg-theme-color w-[19%] h-screen float-left rounded-tr-[40px]">
      <div className="flex justify-center my-10 w-full">
        <Logo />
      </div>
      <Navigation />
    </div>
  );
};

export default SideBar;
