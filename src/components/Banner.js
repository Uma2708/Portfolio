import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=400x300&vertical=center" alt="" />
          </div>
          <div className="banner-content">
          <p style={{ fontSize: '10px' }}>WELCOME TO MY WORLD</p>
            <h6>Hello, I'm Uma</h6>
            <h3>Web Developer</h3>
            <p>
                I'm  a passionate front-end web developer specializing in React.js and JavaScript. Visit my profile & stay Connect with me..
<br/>

            </p>
            
            <a
  className="btn"
  href="https://drive.google.com/file/d/1EjbmtxDclGmFQichnkkN9s8Ewt1PYjPS/view?usp=drivesdk"
  download="YourCV.pdf"
>
  Download My CV
</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;