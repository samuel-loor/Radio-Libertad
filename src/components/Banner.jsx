import '../assets/css/Banner.css';

export function Banner() {
  return (
    <>
      <section className='banner'>
        <picture>
          <source
            media='(max-width: 768px)'
            srcSet='/img-banners/banner-mobile.jpeg'
          />
          <source
            media='(min-width: 769px)'
            srcSet='/img-banners/banner-desktop.jpeg'
          />
          <img
            src='/img-banners/banner-desktop.jpeg'
            alt='Banner de Radio Libertad'
            loading='lazy'
          />
        </picture>
      </section>
    </>
  );
}
