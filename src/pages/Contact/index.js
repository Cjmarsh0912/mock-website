import styles from './contact.module.css';

import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact({ handleSubmit }) {
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

          <div className={styles.contact_form_container}>
            <form
              action='#'
              id={styles['contact_form']}
              method='post'
              onSubmit={handleSubmit}
            >
              <fieldset className={styles.full_name}>
                <legend className={styles.title}>Name *</legend>
                <label className={styles.contact_form_input} htmlFor='fname'>
                  <input
                    style={{ width: '100%' }}
                    name='fname'
                    id='fname'
                    type='text'
                    required
                  />
                  <span className={styles.name}>First name</span>
                </label>
                <label className={styles.contact_form_input} htmlFor='lname'>
                  <input
                    style={{ width: '100%' }}
                    name='lname'
                    id='lname'
                    type='text'
                    required
                  />
                  <span className={styles.name}>Last name</span>
                </label>
              </fieldset>
              <div className={styles.contact_form_input}>
                <label htmlFor='email'>Email *</label>
                <input name='email' id='email' type='email' required />
              </div>
              <div className={styles.contact_form_input}>
                <label htmlFor='message'>Message *</label>
                <textarea id={styles['message']} required></textarea>
              </div>
              <button type='submit' className='button'>
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
