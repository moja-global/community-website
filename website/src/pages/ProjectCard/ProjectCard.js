/* eslint-disable */
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import './card.css';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = (props) => {
  const modalRef = useRef();

  const handleClick = (e) => {
    let id = e.target.id;
    let div = document.querySelector(`.${id}e`);
    div.classList.toggle("invisible");
  }


  return (
    <div className="main_card_container">
      <div className="card">
        <div className="card_container">
          <div className="card_header">
            <h2>
              <b>{props.projectTitle}</b>
            </h2>
            <div className="project_links">
              <a href={props.link.docs}>
                {' '}
                <svg
                  class="w-6 h-6 project-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </a>
              <a href={props.link.github}>
                {' '}
                <img className="project-icon" src="./static/img/github.svg" />{' '}
              </a>
            </div>
          </div>
          <p className="card_body">{props.projectBody}</p>
        </div>
        <button className="card_button" onClick={() => modalRef.current.open()}>
          <b>View Timeline</b>
        </button>
      </div>
      <Modal ref={modalRef} className="modal">
        <div className='modal_header'>
        <h1>{props.projectTitle}</h1>
        <div className='project_link_icons'>
        <a href={props.link.docs}>
                {' '}
                <svg
                  class="w-6 h-6 project-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </a>
              <a href={props.link.github}>
                {' '}
                <img className="project-icon" src="./static/img/github.svg" />{' '}
              </a>
        </div>
        </div>
        <p className="discription">{props.projectBody}</p>
        <div className="task_timlines">
          <div className="status">
            <h5>On-Going</h5>
            <div className="task_wrapper">
              <div className="task_div">
                <span className="box_decor"></span>
                <div className="task_description">
                  <div className="task_text">
                    <p>{props.onGoingDesc}</p>
                    {/** Description of ongoing task will be passed down in the prop */}
                  </div>
                  <button className="expand_button" onClick = {handleClick}>
                    <svg
                      id="div_11"
                      className="w-6 h-6 button_arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <ul className="task_details div_11e invisible">
                <li className="task_box">
                  <div className="task_details_div">
                    <span className="border_div">
                      <span className="border"></span>
                    </span>
                    <span className="box_decor"></span>
                    <div className="task_description_list">
                      <div className="task_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="task_box">
                  <div className="task_details_div">
                    <span className="border_div">
                      <span className="border"></span>
                    </span>
                    <span className="box_decor"></span>
                    <div className="task_description_list">
                      <div className="task_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="task_box">
                  <div className="task_details_div">
                    <span className="border_div">
                      <span className="border"></span>
                    </span>
                    <span className="box_decor"></span>
                    <div className="task_description_list">
                      <div className="task_text">
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="task_div">
                <span className="box_decor"></span>
                <div className="task_description">
                  <div className="task_text">
                    <p>{props.onGoingDesc}</p>
                  </div>
                  <button className="expand_button" onClick = {handleClick}>
                    <svg
                      id="div_12"
                      className="w-6 h-6 button_arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="status">
            <h5>Next-Priority</h5>
            <div className="task_wrapper">
              <div className="task_div">
                <span className="box_decor"></span>
                <div className="task_description">
                  <div className="task_text">
                    <p>{props.nextPriority}</p>
                    {/** Description of next priority task will be passed down in the prop */}
                  </div>
                  <button className="expand_button" onClick = {handleClick}>
                    <svg
                      id="div_21"
                      className="w-6 h-6 button_arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <ul className="task_details div_21e invisible">
                <li className="task_box">
                  <div className="task_details_div">
                    <span className="border_div">
                      <span className="border"></span>
                    </span>
                    <span className="box_decor"></span>
                    <div className="task_description_list">
                      <div className="task_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="task_box">
                  <div className="task_details_div">
                    <span className="border_div">
                      <span className="border"></span>
                    </span>
                    <span className="box_decor"></span>
                    <div className="task_description_list">
                      <div className="task_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="task_box">
                  <div className="task_details_div">
                    <span className="border_div">
                      <span className="border"></span>
                    </span>
                    <span className="box_decor"></span>
                    <div className="task_description_list">
                      <div className="task_text">
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="status">
            <h5>Forthcoming</h5>       
            <div className="task_wrapper">
              <div className="task_div">
                <span className="box_decor"></span>
                <div className="task_description">
                  <div className="task_text">
                    <p>{props.forthComing}</p>
                    {/** Description of forthcoming task will be passed down in the prop */}
                  </div>
                  <button className="expand_button" data-target="div_31" onClick = {handleClick}>
                    <svg
                      id="div_31"
                      className="w-6 h-6 button_arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <ul className="task_details div_31e invisible">
                <li className="task_box">
                  <div className="task_details_div">
                    <span className="border_div">
                      <span className="border"></span>
                    </span>
                    <span className="box_decor"></span>
                    <div className="task_description_list">
                      <div className="task_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="task_box">
                  <div className="task_details_div">
                    <span className="border_div">
                      <span className="border"></span>
                    </span>
                    <span className="box_decor"></span>
                    <div className="task_description_list">
                      <div className="task_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="task_box">
                  <div className="task_details_div">
                    <span className="border_div">
                      <span className="border"></span>
                    </span>
                    <span className="box_decor"></span>
                    <div className="task_description_list">
                      <div className="task_text">
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};



const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => setOpen(false)}
            className="modal-backdrop"
          />
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className="modal-content-wrapper"
          >
            <motion.div
              className="modal-content"
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              {props.children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});



export default ProjectCard;