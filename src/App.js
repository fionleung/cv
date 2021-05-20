import './App.css';
import {data} from './data';
import ContentSection from './components/contentsection/ContentSection.js';
import Header from'./components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
     
      <Header />
      {data.map((section,index)=> <ContentSection name={section.sectionName} key={index} sectionid={index} projects={section.projects}/> )}
    <Footer />
    </div>
  );
}

export default App;
