import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto w-full flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 fill-bg-tosca-100 dark:fill-bg-tosca-800 bg-tosca-100 dark:bg-tosca-800 py-11 h-fit sm:px-10 relative z-50">
      <div className="flex items-center justify-center">
        <img
          src="/LogoBinaGuru.svg"
          alt="Logo"
          className="w-[171.04010009765625px] h-[96.52459716796875px]"
        />
      </div>

      <div className="flex flex-col gap-1 items-center sm:items-end justify-center text-black dark:text-white">
        <div className="text-s6">binaguru@gmail.com</div>
        <div className="text-b6">© 2025 BinaGuru</div>
      </div>
    </footer>
  );
};

export default Footer;
