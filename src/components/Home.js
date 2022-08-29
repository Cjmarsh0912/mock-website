import React from 'react';
import Header from './Header';
import oreo_cupcake from '../images/oreo cupcakes.jpg';
import apple_pie from '../images/apple pie.jpg';
import brownies from '../images/brownies.jpg';
import cake from '../images/cake.jpg';
import cheesecake from '../images/cheesecake.jpg';
import doughnuts from '../images/doughnuts.jpg';
import loaf_cake from '../images/loaf cake.jpg';
import pecan_pie from '../images/pecan pie.jpg';
import tiramisu from '../images/tiramisu.jpg';
import pancake from '../images/pancake.jpg';

export default function Home() {
  return (
    <>
      <Header active='blog' />
      <main>
        <header className='blog-header'>
          <div className='blog-header-img'>
            <img
              style={{ minHeight: '37rem', maxWidth: '35.9rem' }}
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
          <section className='recent-posts'>
            <div className='intro'>
              <h3>Recent Posts</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                fugiat! Quisquam itaque delectus quidem obcaecati debitis
                asperiores maxime, laborum voluptas explicabo, porro ducimus
                blanditiis excepturi ex.
              </p>
            </div>
            <div className='posts'>
              <article className='post'>
                <a href='#'>
                  <img style={{ height: '28rem' }} src={apple_pie} />
                </a>
                <time className='post-date'>3/10/21</time>
                <h3 className='post-name'>
                  <a href='#'>Apple Pie</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href='#' className='read-more'>
                  Read more
                </a>
              </article>

              <article className='post'>
                <a href='#'>
                  <img style={{ height: '33.5rem' }} src={brownies} />
                </a>
                <time className='post-date'>3/15/21</time>
                <h3 className='post-name'>
                  <a href='#'>Brownies with chocolate frosting</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href='#' className='read-more'>
                  Read more
                </a>
              </article>

              <article className='post'>
                <a href='#'>
                  <img style={{ height: '28rem' }} src={cake} />
                </a>
                <time className='post-date'>3/09/21</time>
                <h3 className='post-name'>
                  <a href='#'>Cake with Whipped Cream and Frosting</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href='#' className='read-more'>
                  Read more
                </a>
              </article>

              <article className='post'>
                <a href='#'>
                  <img style={{ height: '15rem' }} src={cheesecake} />
                </a>
                <time className='post-date'>4/01/21</time>
                <h3 className='post-name'>
                  <a href='#'>New York Cheesecake with Cherry Topping</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href='#' className='read-more'>
                  Read more
                </a>
              </article>

              <article className='post'>
                <a href='#'>
                  <img style={{ height: '33.4rem' }} src={doughnuts} />
                </a>
                <time className='post-date'>4/12/21</time>
                <h3 className='post-name'>
                  <a href='#'>Glazed Doughnuts</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href='#' className='read-more'>
                  Read more
                </a>
              </article>

              <article className='post'>
                <a href='#'>
                  <img style={{ height: '33.5rem' }} src={loaf_cake} />
                </a>
                <time className='post-date'>4/16/21</time>
                <h3 className='post-name'>
                  <a href='#'>Blueberry Loaf Cake</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href='#' className='read-more'>
                  Read more
                </a>
              </article>

              <article className='post'>
                <a href='#'>
                  <img style={{ height: '33.4rem' }} src={pancake} />
                </a>
                <time className='post-date'>4/16/21</time>
                <h3 className='post-name'>
                  <a href='#'>Blueberry Pancakes</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href='#' className='read-more'>
                  Read more
                </a>
              </article>

              <article className='post'>
                <a href='#'>
                  <img style={{ height: '33.4rem' }} src={pecan_pie} />
                </a>
                <time className='post-date'>4/20/21</time>
                <h3 className='post-name'>
                  <a href='#'>Pecan Pie</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href='#' className='read-more'>
                  Read more
                </a>
              </article>

              <article className='post'>
                <a href='#'>
                  <img style={{ height: '28rem' }} src={tiramisu} />
                </a>
                <time className='post-date'>5/01/21</time>
                <h3 className='post-name'>
                  <a href='#'>Tiramisu</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <a href='#' className='read-more'>
                  Read more
                </a>
              </article>
            </div>
          </section>
        </div>

        <section className='contact'>
          <form id='update-form' onSubmit='#'>
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
