/* eslint-disable */
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import './card.css';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = (props) => {
  const modalRef = useRef();

  return (
    <div className="container">
      <div className="card">
        <div className="card_container">
          <h3>
            <b>{props.projectTitle}</b>
          </h3>
          <p className="card_body">{props.projectBody}</p>
        </div>
        <button className="card_button" onClick={() => modalRef.current.open()}>
          <b>View Timeline</b>
        </button>
      </div>
      <Modal ref={modalRef} className="modal">
        <h1>{props.projectTitle}</h1>
        <p>{props.projectBody}</p>
        <div className="task_timlines">
          <div className="status">
            <h5>On-Going</h5>
            <p>{props.onGoingDesc}</p>{' '}
            {/** Description of ongoing task will be passed down in the prop */}
          </div>
          <div className="status">
            <h5>Next-Priority</h5>
            <p>{props.nextPriority}</p>{' '}
            {/** Description of next priority task will be passed down in the prop */}
          </div>
          <div className="status">
            <h5>Forthcoming</h5>
            <p>{props.forthComing}</p>{' '}
            {/** Description of forthcoming task will be passed down in the prop */}
          </div>
        </div>
        <div className="modal_links">
          <a href="https://github.com/" className="modal_gh_link">
            Github
          </a>
          <a href="https://moja.global/" className="modal_docs_link">
            Docs
          </a>
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
