export default function HeaderImg ({src, title}) {
    
    let h = Math.round(window.innerWidth * 1.1).toString() + 'px';
    let urlBg = `url(${src})`;

    return <>
    <div className="header-img" style={{ 
        backgroundImage:urlBg, 
        height:h }}>
            <h5 className="img-title">
                {title}
            </h5>
      </div>
    </>
}