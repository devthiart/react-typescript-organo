import './Banner.css';

interface BannerProps {
  imageAddress: string
  altText?: string
}

const Banner = ({ imageAddress, altText } :BannerProps) => {
  // JSX
  return (
    <header className='banner'>
      {/* <img src="/images/banner.png" alt="Banner com o texto: Pessoas e times em um só lugar!"></img> */}
      <img src={imageAddress} alt={altText}></img>
    </header>
  )
}

export default Banner;
