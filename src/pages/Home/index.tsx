import RecentPosts from './RecentPosts';

import styles from './home.module.css';

import oreo_cupcake from '../../assets/images/oreo cupcakes.jpg';

export default function Home() {
  return (
    <>
      <main>
        <header className={styles.blog_header}>
          <div className={styles.blog_header_img}>
            <img
              style={{ height: '100%', maxWidth: '100%' }}
              src={oreo_cupcake}
              alt='oreo cupcake'
            />
          </div>
          <div className={styles.blog_description}>
            <h3>Redmond deserts and recipes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              eaque? Debitis cumque accusantium ad laboriosam aliquam omnis
              beatae nihil iure provident perferendis. Nemo, quo quia cupiditate
              inventore exercitationem est perspiciatis!
            </p>
          </div>
        </header>

        <div className='bg-white'>
          <RecentPosts />
        </div>

        <section className={styles.newsletter_form_container}>
          <div className={styles.newsletter_form}>
            <form id='newsletter-form' onSubmit={(e) => e.preventDefault()}>
              <header className={styles.form_header}>
                <h3>Get the Low Down</h3>
                <p>Sign up with your email address to get news and updates.</p>
              </header>
              <div className={styles.form_input}>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Email'
                  required
                />
                <button type='submit' className='button submit'>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
