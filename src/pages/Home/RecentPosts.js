import React from 'react';
import apple_pie from '../../assets/images/applePie.jpg';
import brownies from '../../assets/images/brownies.jpg';
import cake from '../../assets/images/cake.jpg';
import cheesecake from '../../assets/images/cheesecake.jpg';
import doughnuts from '../../assets/images/doughnuts.jpg';
import loaf_cake from '../../assets/images/loaf cake.jpg';
import pecan_pie from '../../assets/images/pecan pie.jpg';
import tiramisu from '../../assets/images/tiramisu.jpg';
import pancake from '../../assets/images/pancake.jpg';

export default function RecentPosts() {
  return (
    <section className='recent-posts'>
      <div className='post-header'>
        <h3>Recent Posts</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fugiat!
          Quisquam itaque delectus quidem obcaecati debitis asperiores maxime,
          laborum voluptas explicabo, porro ducimus blanditiis excepturi ex.
        </p>
      </div>
      <div className='recent-posts-container'>
        <article className='post'>
          <a className='post-img' href='#'>
            <img style={{ height: '28rem' }} src={apple_pie} alt='apple pie' />
          </a>
          <time className='post-date'>3/10/21</time>
          <h3 className='post-name'>
            <a href='#'>Apple Pie</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <a href='#' className='read-more'>
            Read more
          </a>
        </article>

        <article className='post'>
          <a className='post-img' href='#'>
            <img style={{ height: '33.5rem' }} src={brownies} alt='brownies' />
          </a>
          <time className='post-date'>3/15/21</time>
          <h3 className='post-name'>
            <a href='#'>Brownies with chocolate frosting</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <a href='#' className='read-more'>
            Read more
          </a>
        </article>

        <article className='post'>
          <a className='post-img' href='#'>
            <img style={{ height: '28rem' }} src={cake} alt='cake' />
          </a>
          <time className='post-date'>3/09/21</time>
          <h3 className='post-name'>
            <a href='#'>Cake with Whipped Cream and Frosting</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <a href='#' className='read-more'>
            Read more
          </a>
        </article>

        <article className='post'>
          <a className='post-img' href='#'>
            <img
              style={{ height: '15rem' }}
              src={cheesecake}
              alt='cheesecake'
            />
          </a>
          <time className='post-date'>4/01/21</time>
          <h3 className='post-name'>
            <a href='#'>New York Cheesecake with Cherry Topping</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <a href='#' className='read-more'>
            Read more
          </a>
        </article>

        <article className='post'>
          <a className='post-img' href='#'>
            <img
              style={{ height: '33.4rem' }}
              src={doughnuts}
              alt='doughnuts'
            />
          </a>
          <time className='post-date'>4/12/21</time>
          <h3 className='post-name'>
            <a href='#'>Glazed Doughnuts</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <a href='#' className='read-more'>
            Read more
          </a>
        </article>

        <article className='post'>
          <a className='post-img' href='#'>
            <img
              style={{ height: '33.5rem' }}
              src={loaf_cake}
              alt='loaf cake'
            />
          </a>
          <time className='post-date'>4/16/21</time>
          <h3 className='post-name'>
            <a href='#'>Blueberry Loaf Cake</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <a href='#' className='read-more'>
            Read more
          </a>
        </article>

        <article className='post'>
          <a className='post-img' href='#'>
            <img style={{ height: '33.4rem' }} src={pancake} alt='pancake' />
          </a>
          <time className='post-date'>4/16/21</time>
          <h3 className='post-name'>
            <a href='#'>Blueberry Pancakes</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <a href='#' className='read-more'>
            Read more
          </a>
        </article>

        <article className='post'>
          <a className='post-img' href='#'>
            <img
              style={{ height: '33.4rem' }}
              src={pecan_pie}
              alt='pecan pie'
            />
          </a>
          <time className='post-date'>4/20/21</time>
          <h3 className='post-name'>
            <a href='#'>Pecan Pie</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <a href='#' className='read-more'>
            Read more
          </a>
        </article>

        <article className='post'>
          <a className='post-img' href='#'>
            <img style={{ height: '28rem' }} src={tiramisu} alt='tiramisu' />
          </a>
          <time className='post-date'>5/01/21</time>
          <h3 className='post-name'>
            <a href='#'>Tiramisu</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <a href='#' className='read-more'>
            Read more
          </a>
        </article>
      </div>
    </section>
  );
}
