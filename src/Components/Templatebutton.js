import React from 'react';

function Templatebutton({ setIsTemplateActive }) {
  const handleBtnClick = () => {
    setIsTemplateActive(true);
  };

  return (
    <div>
      <button className='template' style={{marginTop:'100px'}} onClick={handleBtnClick}>Create Template</button>
    </div>
  );
}

export default Templatebutton;

























{/*import React, { useRef, useEffect ,useState} from 'react';
import Navbar     from '../Components/Navbar2';
import Project    from '../Components/Project2';
import Skills     from '../Components/Skills2';
import Contact    from '../Components/Contact2';
import Experience from '../Components/Experience2';
import Footer     from '../Components/Footer2';
import Whatsapp   from '../Components/Whatsapp2';
import LoaderBar  from '../Components/loader2';
import AOS        from 'aos';
import Typed      from 'typed.js';


function Templatebutton() {
  const elementRef = useRef(null);
  const [showTemplate, setShowTemplate] = useState(false);
  const [App, setApp] = useState(true);


  useEffect(() => {
    if (elementRef.current) {
      const typed = new Typed(elementRef.current, {
        strings: ['Frontend Developer', 'with JavaScript', 'and React js', 'with 1 year experience'],
        typeSpeed: 20,
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  const handleBtnClick = () => {
    setShowTemplate(true);
setApp(false)  };


  return (
    <div>
    <button className='template' onClick={handleBtnClick}>Create Template</button>
    {showTemplate && (
        <div style={{ backgroundColor: 'rgb(2,2,34)' }}>
         
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
      )}
    </div>
  );
}

export default Templatebutton;*/}