import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file
import ReactDOM from 'react-dom';
import YourComponent from './YourComponent'; // Adjust the path to match your file structure
import GrammarSection from './GrammarSection'; // Import the GrammarSection component
import FamousBooksSection from './FamousBooksSection';
import Vocabulary from './Vocabulary' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './BookList';

const appStyle = {
  backgroundColor: ' #c7b198 ' , // Replace with your desired background color or image
  /* You can also set other background properties here, like background-image */
};
const articles = [
  {
    title: 'Article 1',
    link: 'https://stevepavlina.com/blog/2005/12/spirituality-vs-intelligence/',
  },
  {
    title: 'Article 2',
    link: 'https://stevepavlina.com/blog/2004/10/the-courage-to-live-consciously/',
  },
  {
    title: 'Article 3',
    link: 'https://stevepavlina.com/blog/2005/06/self-discipline-willpower/',
  },
  {
    title: 'Article 4',
    link: 'https://www.boozallen.com/s/insight/publication/role-of-artificial-intelligence-in-cyber-security.html',
  },
  // Add more articles as needed
];

ReactDOM.render(<YourComponent articles={articles} />, document.getElementById('root'));

const exercises = [
  {
    title: 'Exercise 1',
    link: 'https://www.myenglishpages.com/english/grammar-exercise-phrasal-verbs.php',
  },
  
  // Add more exercises as needed
];


const Header = () => {
  const [logoWidth, setLogoWidth] = useState(0);
  const [showPdfButton, setShowPdfButton] = useState(false);

  const [showLevelsMenu, setShowLevelsMenu] = useState(false); // Add state for levels menu
  const [showArticles, setShowArticles] = useState(false); // Add state for levels menu


  function handleArticleLinkClick(event, link) {
    event.preventDefault();
    window.location.href = link;
  }
  function Apply() {
  const backgroundColor = 'blue'; // Change this to your desired background color
  }
  
  useEffect(() => {
    const handleResize = () => {
      const maxWidth = window.innerWidth * 0.9; // 90% of the window's width
      setLogoWidth(maxWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleGrammarLinkClick = () => {
    const grammarSection = document.getElementById('grammar');
    if (grammarSection) {
      grammarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleFamousBooksLinkClick = () => {
    const booksSection = document.getElementById('books');
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
   const handleBooksLinkClick = () => {
    setShowPdfButton(true); // Show the PDF download button
  };
  const handleVocaLinkClick = () => {
    const vocabularySection = document.getElementById('Vocabulary');
    if (vocabularySection) {
      vocabularySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
   const handleVocLinkClick = () => {
    setShowPdfButton(true); // Show the PDF download button
  };

  // Function to toggle the display of levels menu
  const toggleLevelsMenu = (e) => {
    e.preventDefault(); // Prevent the default navigation behavior
    setShowLevelsMenu(!showLevelsMenu);
  };

  const toggleArticleMenu = (e) => {
    e.preventDefault(); // Prevent the default navigation behavior
    setShowArticles(!showArticles);
  };
  const [showExercises, setShowExercises] = useState(false);

  const toggleExerciseMenu = (e) => {
    e.preventDefault(); // Prevent the default navigation behavior
    setShowExercises(!showExercises);
  };
  
 
  return (

    <div style={appStyle}>
  
    <div className="header" >
      <img src="/jjjjjjj.png" alt="Logo1" className="logo" style={{ maxWidth: `${logoWidth}px` }} />

      <img src="/zzzzzzzz.png" alt="Logo" className="logo" style={{ maxWidth: `${logoWidth}px` }} />
      

      <div className="menu-container">
        <nav>
          <ul className="menu">
            <li>
            
              {showLevelsMenu && (
                <ul className="sub-menu">
                  <li><a href="/level/A1-A2">A1-A2</a></li>
                  <br></br>
                  <li><a href="/level/B1-B2">B1-B2</a></li>
                  <br></br>
                  <li><a href="/level/C1-C1">C1-C2</a></li>
                </ul>
              )}
              
            </li>
            <br></br>
            <li><a onClick={toggleArticleMenu}>Articles</a></li>
            {showArticles && (
                                <ul className="sub-menu">
                  <li><a href={articles[0].link} target='__blank'>Article 1</a></li>
                  <br></br>
                  <li><a href={articles[1].link} target='__blank'>Article 2</a></li>
                  <br></br>
                  <li><a href={articles[2].link} target='__blank'>Article 3</a></li>
                  <br></br>
                  <li><a href={articles[3].link} target='__blank'>Article 4</a></li>
               
                </ul>
              )}
            <li><a href="#grammar" onClick={handleGrammarLinkClick}>Grammar</a></li>
            <li><a href="Vocabulary" onClick={handleVocaLinkClick}>Vocabulary</a></li>

            <li><a href="#books" onClick={handleFamousBooksLinkClick}>Famous Books</a></li>
            <div>



    </div>
    <li>
    <a href="/grammar" onClick={toggleLevelsMenu}>
      Exercises 
    </a>

  </li>
  <br></br>
 
  {showExercises && (
    <ul className="sub-menu">
      <li>
        <a href={exercises[0].link} target='__blank'>A1-A2</a>
      </li>
    </ul>
  )}
              
          </ul>
        </nav>
      </div>
      <div className="image-container">
        <div className="side-image-container">
          <img src="/Design (1).png" alt="" className="side-image" />
        </div>
        <div id="vocabulary" className="vocabulary-container">
  <Vocabulary />
  <br></br>
  
  <button
onClick={() => window.open("/Phrasal verbs.pdf", "_blank")}
style={{
  backgroundColor:  "#5DADE2 ",
  color: "white",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
}}

>
Download PDF 1

</button>
<br></br>
<button
onClick={() => window.open("/phrasal-verbs-exercise-1.pdf", "_blank")}
style={{
  backgroundColor: "#BB8FCE",
  color: "white",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
}}

>
Download PDF 2

</button>
<br></br>
<button
onClick={() => window.open("/ph008.pdf", "_blank")}
style={{
  backgroundColor: "#5DADE2 ",
  color: "white",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
}}

>
Download PDF 3

</button>
</div>
        <img src="/far7anaanahaha.png" alt="" className="big-image" />
      </div>
      <div className="side-image-container">
        <img src="/Design (2).png" alt="" className="side-image" />
      </div>

      {/* Include the GrammarSection component */}
      <div id="grammar" className="grammar-container">
        <GrammarSection />
      </div>
      <div id="books" className="books-container">
      <FamousBooksSection/>
      </div>
      <ul>
      <li>
      </li>
      {/* Add more book entries as needed */}
    </ul>        
      </div>
      
          
      </div>

    );

};

export default Header;