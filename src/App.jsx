import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Projectspage from './Pages/Projectspage';
import Loginpage from './Pages/Loginpage';
import Viewmyprojectpage from './Pages/Viewmyprojectpage';
import Writepostpage from './Pages/Writepostpage';
import Adminupdatepostpage from './Pages/Adminupdatepostpage';
import Blogspage from './Pages/Blogspage';
import Writeblogspage from './Pages/Writeblogspage';
import Viewmyblogpage from './Pages/Viewmyblogpage';
import Adminupdateblogpage from './Pages/Adminupdateblogpage';
import Servicespage from './Pages/Servicespage';
import Aboutmepage from './Pages/Aboutmepage';
import Contactpage from './Pages/Contactpage';
function App() {

  return (
    <div className='appcontainer'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/projects' element={<Projectspage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/viewmyproject/:id' element={<Viewmyprojectpage/>}/>
          <Route path='/writepost' element={<Writepostpage/>}/>
          <Route path='/adminupdatepost/:id' element={<Adminupdatepostpage/>}/>

          <Route path='/blogs' element={<Blogspage/>}/>
          <Route path='/viewmyblog/:id' element={<Viewmyblogpage/>}/>
          
          <Route path='/writeblog' element={<Writeblogspage/>}/>
          <Route path='adminupdateblog/:id' element={<Adminupdateblogpage/>}/>

          <Route path='/services' element={<Servicespage/>}/>
          <Route path='/about' element={<Aboutmepage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
          
          


        </Routes>
      </Router>
      
    </div>
  )
}

export default App
