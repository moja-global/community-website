/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';
import IconExternalLink from '@theme/IconExternalLink';
import { AiOutlineClose } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import axios from 'axios';

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {href && !isInternalUrl(href) ? (
        <span>
          {label}
          <IconExternalLink />
        </span>
      ) : (
        label
      )}
    </Link>
  );
}

const FooterLogo = ({ sources, alt }) => (
  <ThemedImage className="footer__logo" alt={alt} sources={sources} />
);

function Footer() {
  const { footer } = useThemeConfig();
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState({activeIndex: null});
  const handleClick = (index) => { return setIsOpen({activeIndex: index})} 
  const { copyright, links = [], logo = {} } = footer || {};
  var feedback= ' ';
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  const changeinput=(e)=>{
    console.log(e.target.value);
    feedback=e.target.value;
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(feedback);
    const data={
      Feedback: feedback,
      Url: "https://community.moja.global/"
    }
    axios.post('https://sheet.best/api/sheets/3b6fc57e-5cd4-4fbf-b9de-4a58a8d93968',data)
    .then(response => alert("Feedback Submitted Successfully!"))
    .catch(error => console.error('Error!', error.message))
  }

  if (!footer) {
    return null;
  }
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
              style={{backgroundColor: '#73E8A3'}}
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
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': footer.style === 'dark',
      })}
    >
      <div className="container__div">
        <div className="footer__container">
          {logo && (logo.src || logo.srcDark) && (
            <div className="footer__logo">
              {logo.href ? (
                <Link href={logo.href} className={styles.footerLogoLink}>
                  <FooterLogo alt={logo.alt} sources={sources} />
                </Link>
              ) : (
                <FooterLogo alt={logo.alt} sources={sources} />
              )}
            </div>
          )}
          {links && links.length > 0 && (
            <div className="footer__links">
              {links.map((linkItem, i) => (
                <div key={i} className="footer__col">
                  {linkItem.title != null ? (
                    <div className="footer__title">{linkItem.title}</div>
                  ) : null}
                  {linkItem.items != null &&
                  Array.isArray(linkItem.items) &&
                  linkItem.items.length > 0 ? (
                    <ul className="footer__items">
                      {linkItem.items.map((item, key) =>
                        item.html ? (
                          <li
                            key={key}
                            className="footer__item" // Developer provided the HTML, so assume it's safe.
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                              __html: item.html,
                            }}
                          />
                        ) : (
                          <li key={item.href || item.to} className="footer__item">
                            <FooterLink {...item} />
                          </li>
                        )
                      )}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {copyright ? (
              <div
                className="footer__copyright" // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : null}
          </div>
        )}
      </div>
       <button className={styles.feedbackfloaticon} onClick={() => modalRef.current.open()} onMouseOver={() => tooltip()} onMouseOverCapture={() => tooltiphide()}><FaEdit/> </button> 
       <Modal ref={modalRef} className={"modal"}>
        <div className="modal_header">
        <h1 className={styles.heading}>Feedback</h1>
          <div className="project_link_icons">
            <AiOutlineClose className={styles.close} onClick={() => modalRef.current.close()}></AiOutlineClose>
          </div>
          <div className={styles.card}>
            <form autoComplete='off' onSubmit={handleSubmit}>
              <div className={styles.headercontent}>
             <h2> Help us improve the website by providing your valuable feedback 💡</h2>
             </div>
             <textarea type='text' placeholder='Enter your suggestions here' className={styles.textarea} required onChange={(e)=>changeinput(e)} ></textarea>
             <div  style={{display: 'flex', flexWrap: 'wrap ', justifyContent: 'center'}} >
               <button type='submit' className={styles.buttons}>Submit Feedback</button>
               <p className={styles.OR}> OR </p>
               <a className={styles.link} onClick={()=>{window.open("https://github.com/moja-global/community-website")}}>Open an issue <VscGithub/> </a>
              </div>
           </form>
          </div>
        </div>
      </Modal>
    </footer>
  );
}

export default Footer;
 