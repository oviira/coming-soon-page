// Height is set via `100dvh` in CSS rather than JS state, eliminating the need
// for a window resize listener and the memory leak it previously caused.
function BannerColumn({jpgUrl, columnTitle}: {jpgUrl: string, columnTitle: string}) {
  return (
    <div className="banner__column-wrapper">
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