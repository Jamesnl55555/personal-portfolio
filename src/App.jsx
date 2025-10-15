import './App.css'

function App() {
  return (
    <main className="tm-container masonry">
      <div
        className="item tm-bg-white tm-block tm-block-left"
        data-desktop-seq-no={1}
        data-mobile-seq-no={1}
      >
        <p className="tm-hero-text">
          Hello, I'm <strong>Jimmy Lumaad</strong> a <strong>College Student</strong> aiming to be a <strong> Computer Professional </strong>.
          <br />
          <br />
          <strong>Educational Background</strong>
          <br />
          Received "With Honors" and "DSR Loyalty" award certificate in my Senior High School and "Deans Lister" in my College. Experienced On Job Training and Web Development in some projects at school.
          <br />
          <br />
          <strong>Hobbies</strong>
          <br />
          Playing chess, reading books, playing video games, and coding.
        </p>
        <header className="tm-block-brand">
          <div className="tm-bg-primary-dark tm-text-white tm-block-brand-inner">
            <i className="fas fa-braille fa-3x" />
            <h1 className="tm-brand-name">Character</h1>
          </div>
        </header>
      </div>
      <div className="item" data-desktop-seq-no={2} data-mobile-seq-no={4}>
        <div className="picbg">
          <div>
            <header style={{fontSize: 30, color: 'white'}}>Projects: </header>
            <ul>
              <li><a href="https://github.com/Jamesnl55555/ForPeaceProject" style={{color:'purple'}} >Noli Me Tangere learning web application</a></li>
              <p style={{color: 'white'}}>Created a web application that contains the contents of Noli Me Tangere. It also has a quiz section where users could try answering.</p>
              
              <h5 style={{color: 'white'}}>Tools used:</h5>
              <p style={{color: 'white'}}>Laravel, Javascript, CSS</p>
            </ul>
          </div>

          <img src="src/2110_character/img/laptop.png" alt="Image" className="tm-img-left" />
        </div>
      </div>
      <div
        className="item tm-bg-secondary tm-text-white tm-block tm-block-wider tm-block-pad tm-block-left-2"
        data-desktop-seq-no={3}
        data-mobile-seq-no={5}
      >
        <i className="fas fa-award fa-4x tm-block-icon" />
        <p>
          <strong>Certifications</strong>
          <br />
          <ul>
            <li>Certificate of completion to the course Asteroids with Python PyGame.</li>
            <li>Project Certificate of Introduction to Microsoft Excel.</li>
            <li>Certificate of excellence for completing Computer Fundamental lessons</li>
          </ul>
        </p>
      </div>
      <div className="item" data-desktop-seq-no={4} data-mobile-seq-no={8}>
        <img src="src/2110_character/img/name.jpg" alt="Image" className="tm-img-left" />
      </div>
      <div
        className="tm-footer"
        id="tmFooter"
        data-desktop-seq-no={5}
        data-mobile-seq-no={9}
      >
        <div>
          <p className="tm-mb-small">Copyright © 2018 Company Name</p>
          <p>
            Designed by{" "}
            <a rel="nofollow" href="https://www.facebook.com/tooplate">
              Tooplate
            </a>
          </p>
        </div>
      </div>
      <div className="item" data-desktop-seq-no={6} data-mobile-seq-no={2}>
        <div className="picbg">
          <div>
            <div className='sidecont'><h4>Name: </h4> <h6>Jimmy Lumaad</h6></div>
            <div className='sidecont'><h4>Email: </h4> <h6>jamesnl55555@gmail.com</h6></div>
            <div className='sidecont'><h4>Contact: </h4> <h6>09309140671</h6></div>
            <div className='sidecont'><h4>Facebook: </h4> <h6><a href="https://www.facebook.com/jimmy.lumaad.3?mibextid=ZbWKwL">Jimmy Lumaad</a></h6></div>
          </div>
          <img src="src/2110_character/img/jimmy.jpg" alt="Image" className="tm-img-left" />
        </div>
        
      </div>
      <div
        className="item tm-block-right"
        data-desktop-seq-no={7}
        data-mobile-seq-no={3}
      >
        <div className="tm-block-right-inner tm-bg-primary-light tm-text-white tm-block tm-block-wider tm-block-pad">
          <header>
            <h2 className="tm-text-uppercase">Skills</h2>
          </header>
            <ul style={{textAlign: 'left' }}>
              <li>Basic C++ programming</li>
              <li>Basic HTML programming</li>
              <li>Basic PHP programming</li>
              <li>Basic Python Programming</li>
              <li>Basic Javascript programming</li>
              <li>Basic SQL programming</li>
              <li>Basic C# programming</li>
              <li>Basic React</li>
              <li>Basic Laravel</li>
              <li>Basic Git</li>
              <li>Basic CSS</li>
              <li>Basic English, Tagalog, and Bisaya speaking</li>
              <li>Basic Web Development</li>
              <li>Basic Web Design</li>
            </ul>
          <img src="src/2110_character/img/c++.svg" className="svg" />
          <img src="src/2110_character/img/html.svg" className="svg" />
          <img src="src/2110_character/img/php.svg" className="svg" />
          <img src="src/2110_character/img/python.svg" className="svg" />
          <img src="src/2110_character/img/javascript.svg" className="svg" />
          <img src="src/2110_character/img/mysql.svg" className="svg" />
          <img src="src/2110_character/img/csharp.svg" className="svg" />
          <img src="src/2110_character/img/react.svg" className="svg" />
          <img src="src/2110_character/img/laravel.svg" className="svg" />
          <img src="src/2110_character/img/git.svg" className="svg" />
          <img src="src/2110_character/img/css.svg" className="svg" />
        </div>
      </div>
      <div className="item" data-desktop-seq-no={8} data-mobile-seq-no={6}>
        <img src="src/2110_character/img/sidepic.jpg" alt="Image" style={{borderRadius: 45}}/>
      </div>
      <div
        className="item tm-bg-white tm-block tm-form-section"
        data-desktop-seq-no={9}
        data-mobile-seq-no={7}
      >
        
        <div className="tm-form-section-tag">
          <div className="tm-bg-secondary tm-text-white tm-block-pad tm-form-section-tag-inner">
            <header>
              <h2>Downloadable PDF link of my Resume</h2>
            </header>
            <p>
              <a href="https://drive.google.com/file/d/1pjymjd5X5rMnIPooeiMZ2K5Ckt66mSUq/view?usp=sharing"> Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
