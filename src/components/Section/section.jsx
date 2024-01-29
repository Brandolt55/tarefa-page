import styles from './index.module.scss';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a href='https://www.instagram.com/gabrielbrandolthz/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram size={30} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/gabriel-brandolt-417554279/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href='https://github.com/Brandolt55' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={30} />
          </a>
        </li>
      </ul>
      <p>gabrielbrandolt55@gmail.com</p>
      <p>Gabriel Brandolt © 2024</p>
    </div>
  );
}

export default Footer;