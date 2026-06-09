// import perfumeAvif from '../assets/perfume.avif';
import perfumeJpg from '../assets/perfume.jpg';
// import perfumeWebp from '../assets/perfume.webp';
// attar
// import attarAvif from '../assets/attar.avif';
import attarJpg from '../assets/attar.jpg';
// import attarWebp from '../assets/attar.webp';
// car-perfume
// import carPerfumeAvif from '../assets/car-freshener.avif';
import carPerfumeJpg from '../assets/car-freshener.jpg';
// import carPerfumeWebp from '../assets/car-freshener.webp';
// solid-perfume
// import solidPerfumeAvif from '../assets/solid-perfume.avif';
import solidPerfumeJpg from '../assets/solid-perfume.jpg';
// import solidPerfumeWebp from '../assets/solid-perfume.webp';

import BannerColumn from './BannerColumn.tsx';
import { useEffect, useState } from 'react';

function Banner() {
  const [bannerContainerHeight, setBannerContainerHeight] = useState(`${window.innerHeight}px`);

  useEffect(() => {
    // todo: add a debounce function to the resize event
    window.addEventListener('resize', () => {
      setBannerContainerHeight(`${window.innerHeight}px`);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setBannerContainerHeight(`${window.innerHeight}px`);
      });
    };
  }, []);

  return (
    <div className="banner__container" style={{ height: bannerContainerHeight }}>
        <BannerColumn jpgUrl={perfumeJpg} columnTitle="Perfume" />
        <BannerColumn jpgUrl={attarJpg} columnTitle="Attar" />
        <BannerColumn jpgUrl={carPerfumeJpg} columnTitle="Car Freshener" />
        <BannerColumn jpgUrl={solidPerfumeJpg} columnTitle="Solid Perfume" />
    </div>
  )
}

export default Banner