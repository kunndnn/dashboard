import{j as s}from"./index-MBbTVV3k.js";const l={primary:"bg-blue-600 hover:bg-blue-700 text-white",secondary:"bg-gray-200 hover:bg-gray-300 text-black",danger:"bg-red-600 hover:bg-red-700 text-white",white:"bg-white hover;bg-gray-700 text-black",black:"bg-black hover;bg-gray-700 text-white",none:""};function u({label:e="Button",onClick:r=()=>{},type:o="button",variant:a="primary",loading:t=!1,className:n="",disabled:b=!1,children:i}){return s.jsx("button",{type:o,onClick:r,disabled:t||b,className:`
        px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer
        ${l[a]}
        ${t?"opacity-70 cursor-not-allowed":""}
        ${n}
      `,children:t?"Please wait...":i||e})}export{u as C};
