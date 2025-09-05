 import React, { useRef, useEffect,useState } from 'react';
  import Navbar from './Components/Navbar';
  import Typed from 'typed.js';
  import Project from './Components/Project';
  import LoaderBar from './Components/loaders';
  import Skills from './Components/Skills';
  import Contact from './Components/Contact';
  import Experience from './Components/Experience';
  import Footer from './Components/Footer';
  import Whatsapp from './Components/Whatsapp';
  import AOS from 'aos';
  import Templatebutton from './Components/Templatebutton';

  function App(props) {

    const [showAppContent, setShowAppContent] = useState(true);

    return (
      <div style={{ backgroundColor: 'rgb(2,2,34)' }}>
            
          <div>
            <Whatsapp />
            <nav
              id="navbar-example2"
              className="navbar fixed-top px-3 mb-3"
              style={{ justifyContent: 'center' }}
            >
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#scrollspyHeading1">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#scrollspyHeading2">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#scrollspyHeading3">
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#scrollspyHeading4">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#scrollspyHeading5">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#scrollspyHeading6">
                    Other info.
                  </a>
                </li>
              </ul>
            </nav>

            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example2"
              data-bs-root-margin="0px 0px -40%"
              data-bs-smooth-scroll="true"
              className="scrollspy-example p-3 rounded-2 py-0"
              style={{ backgroundColor: 'rgb(2, 2, 34)' }}
              tabIndex={0}
            >
              <h4 id="scrollspyHeading1" className="text-white">
                <Navbar />
              </h4>

              <h4 id="scrollspyHeading2" className="text-white">
                <Project />
              </h4>
              <h4 id="scrollspyHeading3" className="text-white">
                <LoaderBar />
              </h4>
              <h4 id="scrollspyHeading4" className="text-white">
                <Skills />
              </h4>
              <h4 id="scrollspyHeading5" className="text-white">
                <Contact />
              </h4>
              <h4 id="scrollspyHeading6" className="text-white" style={{ height: '433px' }}>
                <Experience />
              </h4>
            </div>
            <Footer />
          </div>
      </div>
    );
  }
  export default App;