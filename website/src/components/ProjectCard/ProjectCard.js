/* eslint-disable */
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import './card.css';
import { motion, AnimatePresence } from 'framer-motion';
import MainTaskDiv from './MainTaskDiv';
import SubTaskDiv from './SubTaskDiv';
import ProjectIcon from '../svgs/ProjectIcon';
import GithubIcon from '../svgs/GithubIcon';

const ProjectCard = (props) => {
  const modalRef = useRef();

  // const handleClick = (e) => {
  //   // let id = e.target.id;
  //   let div = document.querySelector(`.${e}e`);
  //   div.classList.toggle('invisible');
  //   console.log('clicked');
  // };

  const [isOpen, setIsOpen] = useState({activeIndex: null})

  const handleClick = (index) => { return setIsOpen({activeIndex: index})} 

  return (
    <div className="main_card_container">
      <div className="card">
        <div className="card_container">
          <div className="card_header">
            <h2>
              <b>{props.projectTitle}</b>
            </h2>
            <div className="project_links">
              <a target="_blank" rel="noreferrer" href={props.link.docs}>
                <ProjectIcon />
              </a>
              <a target="_blank" rel="noreferrer" href={props.link.github}>
                <GithubIcon className="project-icon" />
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
       
        <div className="modal_header">
          
        <span className="close_icon" >
             <button onClick={() => modalRef.current.close()}>Close</button> 
        </span>


          <h1>{props.projectTitle}</h1>
          


          <div className="project_link_icons">
            <a target="_blank" rel="noreferrer" href={props.link.docs}>
              {' '}
              <ProjectIcon />
            </a>
            <a target="_blank" rel="noreferrer" href={props.link.github}>
              {' '}
              <GithubIcon className="project-icon" />
            </a>
          </div>
        </div>
        <p className="discription">{props.projectBody}</p>
        <div className="task_timlines">
          <div className="status">
            <h5>On-Going</h5>
            <div className="task_wrapper">
              <MainTaskDiv content={props.onGoingDesc} index={0} onClick={handleClick}/>
              <ul className={isOpen.activeIndex === 0 ? 'task_details' : 'task_details invisible'}>
                <li className="task_box">
                  <SubTaskDiv content={props.subTask1} />
                </li> 
                <li className="task_box">
                  <SubTaskDiv content={props.subTask1} />
                </li>
                <li className="task_box">
                <SubTaskDiv content={props.subTask1} />
                </li>
              </ul>  
            </div>
            <div className="task_wrapper">
              <MainTaskDiv content={props.onGoingDesc} index={1} onClick={handleClick}/>
              <ul className={isOpen.activeIndex === 1 ? 'task_details' : 'task_details invisible'}>
                <li className="task_box">
                  <SubTaskDiv content={props.subTask1} />
                </li> 
                <li className="task_box">
                  <SubTaskDiv content={props.subTask1} />
                </li>
                <li className="task_box">
                <SubTaskDiv content={props.subTask1} />
                </li>
              </ul>
            </div>
          </div>
          <div className="status">
            <h5>Next-Priority</h5>
            <div className="task_wrapper">
              <MainTaskDiv content={props.nextPriority} index={2} onClick={handleClick} />
              <ul className={isOpen.activeIndex === 2 ? 'task_details' : 'task_details invisible'}>
                <li className="task_box">
                <SubTaskDiv content={props.subTask1} />
                </li>
                <li className="task_box">
                  <SubTaskDiv content={props.subTask1} />
                </li>
                <li className="task_box">
                <SubTaskDiv content={props.subTask1} />
                </li>
              </ul>
            </div>
          </div>
          <div className="status">
            <h5>Forthcoming</h5>
            <div className="task_wrapper">
              <MainTaskDiv content={props.forthComing} index={3} onClick={handleClick} />
              <ul className={isOpen.activeIndex === 3 ? 'task_details' : 'task_details invisible'}>
                <li className="task_box">
                  <SubTaskDiv content={props.subTask1} />
                </li>
                <li className="task_box">
                  <SubTaskDiv content={props.subTask1} />
                </li>
                <li className="task_box">
                  <SubTaskDiv content={props.subTask1} />
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
