// Height is set via `100dvh` in CSS rather than JS state, eliminating the need
// for a window resize listener and the memory leak it previously caused.
function BannerColumn({imageUrls, columnTitle}: {imageUrls: string[], columnTitle: string}) {
  return (
    <div className="banner__column-wrapper">
        <div className="banner__column">
            <picture>
                <source srcSet={imageUrls[1]} type="image/avif" />
                <source srcSet={imageUrls[2]} type="image/webp" />
                <img src={imageUrls[0]} alt={columnTitle} fetchPriority="high" />
            </picture>
        </div>
        <div className="banner__column-overlay"></div>
        <h2 className="banner__column-title">{columnTitle}</h2>
    </div>
    )
}

export default BannerColumn