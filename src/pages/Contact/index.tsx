import Form from './Form';

import styles from './contact.module.css';

import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <main>
        <section className={styles.contact}>
          <div className={styles.contact_header}>
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.contact_info}>
            <h3>email@example.com</h3>
            <h3>(555) 555-5555</h3>
          </div>
          <div className='address-social'>
            <h3>123 Demo Street</h3>
            <h3>New York, NY 12345</h3>
            <div className={styles.social}>
              <a aria-label='Instagram' href='#'>
                <FaInstagram />
              </a>
              <a aria-label='Twitter' href='#'>
                <FaTwitter />
              </a>
              <a aria-label='Youtube' href='#'>
                <FaYoutube />
              </a>
            </div>
          </div>

          <Form />
        </section>
      </main>
    </>
  );
}
