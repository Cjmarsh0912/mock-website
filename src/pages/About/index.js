import React from 'react';
import Header from '../../components/Header';
import cheesecake from '../../assets/images/cheesecake.jpg';

export default function About() {
  document.body.classList.remove('no-scroll');
  return (
    <>
      <Header active='about' />
      <main>
        <section className='about-container'>
          <div className='about-description'>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              enim, fugit magni alias omnis praesentium vitae perferendis
              tenetur nobis doloremque, voluptatibus temporibus at quidem.
            </h2>
            <p>
              Lorem ipsum dolor sit amet nullam vel ultricies metus, at
              tincidunt arcu. Morbi vestibulum, ligula ut efficitur mollis, mi
              massa accumsan justo, accumsan auctor orci lectus ac ipsum. Proin
              porta nisl sem, ac suscipit lorem dignissim et. Curabitur euismod
              nec augue vitae dictum. Nam mattis, massa quis consequat molestie,
              erat justo vulputate tortor, a sollicitudin turpis felis eget
              risus. Aliquam viverra urna felis, eu ornare enim consectetur sed.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet nullam vel ultricies metus, at
              tincidunt arcu. Morbi vestibulum, ligula ut efficitur mollis, mi
              massa accumsan justo, accumsan auctor orci lectus ac ipsum. Proin
              porta nisl sem, ac suscipit lorem dignissim et. Curabitur euismod
              nec augue vitae dictum. Nam mattis, massa quis consequat molestie,
              erat justo vulputate tortor, a sollicitudin turpis felis eget
              risus. Aliquam viverra urna felis, eu ornare enim consectetur sed.
              Morbi vitae ultrices velit. Sed molestie consectetur metus.
            </p>
          </div>
          <div className='about-img'>
            <img
              style={{ height: '100%', width: '100%' }}
              src={cheesecake}
              alt='cheesecake'
            />
          </div>
        </section>
      </main>
    </>
  );
}
