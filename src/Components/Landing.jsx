import MainLayout from '../Layouts/MainLayout'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Landing = () => {
   const location = useLocation();
  const isHomePage = location.pathname === '/';
   return (
     <>
       <MainLayout>
       <div className={`landing-container ${isHomePage ? 'home-background' : ''}`}>
           <div className="row mt-5">
             <div className="col">
               <h1 className="text-center text-light">مرحباً بكم في عالم الطبيعة والخيارات المستدامة</h1>
               <h3 className=" text-light d-flex justify-content-center mt-3">
                 حيث نصل بينكم وبين خيرات المزارع بأفضل جودة وأعلى اهتمام
               </h3>
               <div className="d-flex justify-content-center mt-4">
                 <Link to="/list">
                   <button className="btn btn-warning btn-lg">اكتشف خدماتنا</button>
                 </Link>
             </div>
           </div>
           </div>
           </div>
       </MainLayout>
     </>
   );
 };
 
 export default Landing;
 