import React from 'react';

const SubTaskDiv = (props) => {
  return (
    <div className="task_details_div">
      <span className="border_div">
        <span className="border"></span>
      </span>
      <span className="box_decor"></span>
      <div className="task_description_list">
        <div className="task_text">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SubTaskDiv;
