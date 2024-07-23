import { FC } from "react";
import style from "./Headrer.module.scss";
import { Logo } from "./Logo/Logo";

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const Header: FC<Props> = ({ searchValue, setSearchValue }) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.search}>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          placeholder="Search"
        />
        {searchValue && (
          <img
            className={style.delete}
            src="icons/Main/close.svg"
            alt="close"
            onClick={() => setSearchValue("")}
          />
        )}
      </div>

      <div className={style.user}>
        <a href="#">
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                fill="#CAD9F6"
              ></path>{" "}
            </g>
          </svg>
        </a>
      </div>
    </header>
  );
};
