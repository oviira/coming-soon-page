import { useEffect, useState } from "react";

function BannerColumn({jpgUrl, columnTitle}: {jpgUrl: string, columnTitle: string}) {
    const [bannerColumnHeight, setBannerColumnHeight] = useState(`${window.innerHeight}px`);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setBannerColumnHeight(`${window.innerHeight}px`);
        });

        return () => {
            window.removeEventListener('resize', () => {
                setBannerColumnHeight(`${window.innerHeight}px`);
            });
        };
    }, []);

  return (
    <div className="banner__column-wrapper" style={{ height: bannerColumnHeight }}>
        <div className="banner__column" 
            style={{
            backgroundImage: `url(${jpgUrl})`
        }}>            
        </div>
        <div className="banner__column-overlay"></div>
        <h2 className="banner__column-title">{columnTitle}</h2>
    </div>
    )
}

export default BannerColumn