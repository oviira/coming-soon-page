import BannerColumn from './BannerColumn.tsx';

import perfumeJpg from '../assets/perfume.jpg';
import perfumeAvif from '../assets/perfume.avif';
import perfumeWebp from '../assets/perfume.webp';

import attarJpg from '../assets/attar.jpg';
import attarAvif from '../assets/attar.avif';
import attarWebp from '../assets/attar.webp';

import carPerfumeJpg from '../assets/car-freshener.jpg';
import carPerfumeAvif from '../assets/car-freshener.avif';
import carPerfumeWebp from '../assets/car-freshener.webp';

import solidPerfumeJpg from '../assets/solid-perfume.jpg';
import solidPerfumeAvif from '../assets/solid-perfume.avif';
import solidPerfumeWebp from '../assets/solid-perfume.webp';

// Height is driven purely by CSS `100dvh` — no JS resize listener needed.
// dvh (dynamic viewport height) accounts for collapsible mobile browser chrome,
// unlike `vh` which uses the initial viewport and causes layout overflow on mobile.
function Banner() {
  return (
    <div className="banner__container">
        <BannerColumn imageUrls={[perfumeJpg, perfumeAvif, perfumeWebp]} columnTitle="Perfume" />
        <BannerColumn imageUrls={[attarJpg, attarAvif, attarWebp]} columnTitle="Attar" />
        <BannerColumn imageUrls={[carPerfumeJpg, carPerfumeAvif, carPerfumeWebp]} columnTitle="Car Freshener" />
        <BannerColumn imageUrls={[solidPerfumeJpg, solidPerfumeAvif, solidPerfumeWebp]} columnTitle="Solid Perfume" />
    </div>
  )
}

export default Banner