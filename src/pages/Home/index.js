import React from 'react';
import Header from '../../components/Header';
import RecentPosts from './RecentPosts';
import oreo_cupcake from '../../assets/images/oreo cupcakes.jpg';

export default function Home({ handleSubmit }) {
  return (
    <>
      <Header active='blog' />
      <main>
        <header className='blog-header'>
          <div className='blog-header-img'>
            <img
              style={{ minHeight: '37rem', width: '100%' }}
              src={oreo_cupcake}
            />
          </div>
          <div className='blog-description'>
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

        <section className='contact'>
          <form id='update-form' onSubmit={handleSubmit}>
            <header className='form-header'>
              <h3>Get the Low Down</h3>
              <p>Sign up with your email address to get news and updates.</p>
            </header>
            <div className='form-input'>
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
        </section>
      </main>
    </>
  );
}
