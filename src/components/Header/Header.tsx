import React from "react";
import style from "./Headrer.module.scss";
import { Logo } from "./Logo/Logo";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <input type="text" placeholder="Search" />

      <div className={style.user}>
        <button>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.99995 1.75C8.66843 1.75 8.35048 1.8817 8.11606 2.11612C7.88164 2.35054 7.74995 2.66848 7.74995 3C7.74995 3.29002 7.58274 3.55405 7.32055 3.67802C6.29519 4.16287 5.42108 4.9176 4.79193 5.86133C4.16594 6.80031 3.80593 7.89117 3.74995 9.01809V12C3.74995 12.0301 3.74813 12.0602 3.74451 12.0901C3.65515 12.8284 3.39368 13.5354 2.98117 14.1542C2.95968 14.1864 2.93781 14.2183 2.91557 14.25H15.0843C15.0621 14.2183 15.0402 14.1864 15.0187 14.1542C14.6062 13.5354 14.3447 12.8284 14.2554 12.0901C14.2518 12.0602 14.2499 12.0301 14.2499 12V9.01811C14.194 7.89118 13.834 6.80031 13.208 5.86133C12.5788 4.9176 11.7047 4.16287 10.6793 3.67802C10.4172 3.55405 10.2499 3.29002 10.2499 3C10.2499 2.66848 10.1183 2.35054 9.88383 2.11612C9.64941 1.8817 9.33147 1.75 8.99995 1.75ZM7.0554 1.05546C7.57113 0.539731 8.2706 0.25 8.99995 0.25C9.72929 0.25 10.4288 0.539731 10.9445 1.05546C11.3452 1.45621 11.6095 1.96791 11.7075 2.51836C12.8121 3.11853 13.7563 3.97962 14.456 5.02927C15.2362 6.1995 15.6832 7.55995 15.7491 8.96484C15.7497 8.97655 15.7499 8.98827 15.7499 9V11.9524C15.8158 12.4422 15.9925 12.9106 16.2668 13.3221C16.549 13.7455 16.9267 14.0966 17.3695 14.3474C17.6659 14.5152 17.812 14.8617 17.7252 15.1911C17.6384 15.5205 17.3406 15.75 16.9999 15.75H8.99995H0.999947C0.659328 15.75 0.361483 15.5205 0.274698 15.1911C0.187914 14.8617 0.333986 14.5152 0.630382 14.3474C1.07314 14.0966 1.45085 13.7455 1.7331 13.3221C2.00741 12.9106 2.1841 12.4422 2.24995 11.9524V9C2.24995 8.98827 2.25022 8.97655 2.25077 8.96484C2.31671 7.55995 2.76371 6.1995 3.54386 5.02927C4.24363 3.97962 5.18776 3.11853 6.29244 2.51836C6.39036 1.96791 6.65465 1.45621 7.0554 1.05546Z"
              fill="#3D3D3D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 14.25C6.41421 14.25 6.75 14.5858 6.75 15V16C6.75 16.5967 6.98705 17.169 7.40901 17.591C7.83097 18.0129 8.40326 18.25 9 18.25C9.59674 18.25 10.169 18.0129 10.591 17.591C11.0129 17.169 11.25 16.5967 11.25 16V15C11.25 14.5858 11.5858 14.25 12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V16C12.75 16.9946 12.3549 17.9484 11.6517 18.6517C10.9484 19.3549 9.99456 19.75 9 19.75C8.00544 19.75 7.05161 19.3549 6.34835 18.6517C5.64509 17.9484 5.25 16.9946 5.25 16V15C5.25 14.5858 5.58579 14.25 6 14.25Z"
              fill="#3D3D3D"
            />
          </svg>
        </button>
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