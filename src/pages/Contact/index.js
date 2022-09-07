import React from 'react';
import Header from '../../components/Header';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
import youtube from '../../assets/images/youtube.svg';

export default function Contact({ handleSubmit }) {
  return (
    <>
      <Header active='contact' />
      <main>
        <section className='contact'>
          <div className='contact-header'>
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
          <div className='contact-info'>
            <h3>email@example.com</h3>
            <h3>(555) 555-5555</h3>
          </div>
          <div className='address-social'>
            <h3>123 Demo Street</h3>
            <h3>New York, NY 12345</h3>
            <div className='social'>
              <a href='#'>
                <img src={instagram} />
              </a>
              <a href='#'>
                <img src={twitter} />
              </a>
              <a href='#'>
                <img src={youtube} />
              </a>
            </div>
          </div>

          <div className='contact-form-container'>
            <form
              action='#'
              id='contact-form'
              method='post'
              onSubmit={handleSubmit}
            >
              <fieldset className='full-name'>
                <legend className='title'>Name *</legend>
                <label className='contact-form-input' htmlFor='fname'>
                  <input
                    style={{ width: '100%' }}
                    name='fname'
                    id='fname'
                    type='text'
                    required
                  />
                  <span className='name'>First name</span>
                </label>
                <label className='contact-form-input' htmlFor='lname'>
                  <input
                    style={{ width: '100%' }}
                    name='lname'
                    id='lname'
                    type='text'
                    required
                  />
                  <span className='name'>Last name</span>
                </label>
              </fieldset>
              <div className='contact-form-input'>
                <label htmlFor='email'>Email *</label>
                <input name='email' id='email' type='email' required />
              </div>
              <div className='contact-form-input'>
                <label htmlFor='message'>Message *</label>
                <textarea id='message' required></textarea>
              </div>
              <button type='submit' className='button submit'>
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
