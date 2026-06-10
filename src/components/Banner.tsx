import BannerColumn from './BannerColumn.tsx';

import perfumeJpg from '../assets/perfume.jpg';
import attarJpg from '../assets/attar.jpg';
import carPerfumeJpg from '../assets/car-freshener.jpg';
import solidPerfumeJpg from '../assets/solid-perfume.jpg';

// Height is driven purely by CSS `100dvh` — no JS resize listener needed.
// dvh (dynamic viewport height) accounts for collapsible mobile browser chrome,
// unlike `vh` which uses the initial viewport and causes layout overflow on mobile.
function Banner() {
  return (
    <div className="banner__container">
        <BannerColumn jpgUrl={perfumeJpg} columnTitle="Perfume" />
        <BannerColumn jpgUrl={attarJpg} columnTitle="Attar" />
        <BannerColumn jpgUrl={carPerfumeJpg} columnTitle="Car Freshener" />
        <BannerColumn jpgUrl={solidPerfumeJpg} columnTitle="Solid Perfume" />
    </div>
  )
}

export default Banner