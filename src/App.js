import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Approute } from './app.route';
import { DooctorsComponent } from './doctoorscomponent/doctoors.component';
import { AboutComponent } from './commoncomponent/AboutComponent/about.component';
import { BlogComponent } from './commoncomponent/BlogComponent/blog.component';
import { ContactComponent } from './commoncomponent/contactcomponent/contact.component';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Approute></Approute>
      </BrowserRouter>
      {/* <AboutComponent></AboutComponent>
      {/* <BlogComponent></BlogComponent> */}
      {/* <ContactComponent></ContactComponent> */}
    
    </div>
  );
}

export default App;
