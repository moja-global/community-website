import React from 'react';

const MainTaskDiv = (props, handleClick) => {
  console.log(handleClick);
  return (
    <div className="task_div">
      <span className="box_decor"></span>
      <div className="task_description">
        <div className="task_text">
          <p>{props.content}</p>
        </div>
        <button className="expand_button" onClick={() => handleClick}>
          <svg
            id="div_11"
            className="w-6 h-6 button_arrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainTaskDiv;
