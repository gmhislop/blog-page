import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
        src="/images/site/giovanni.jpeg" 
        alt="an image showing Giovanni" 
        width={300} 
        height={300} 
        />
      </div>
      <h1>Hi, I'm Giovanni</h1>
      <p>I blog about innovation and technology - especially frontend technologies focussed on VR, AR and Web 3.0.</p>
    </section>
  );
};
export default Hero;
