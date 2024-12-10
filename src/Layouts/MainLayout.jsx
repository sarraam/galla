import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const MainLayout = ({children}) => {
    const count=useSelector(state=>state.counter)
    const cartCount = useSelector((state) =>
        state.cart.reduce((total, product) => total + product.quantity, 0)
      );
    return (<>
             
              <header>
            
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#654321" }}>


                    <div className="container-fluid text-center">
                    
                        <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        
                        >
                        <i className="fas fa-bars"></i>
                        </button>

                        <div className="container-fluid">
  <div className="d-flex align-items-center justify-content-between">
    {/* الشعار وكلمة "غَلَّة" بجانب بعض */}
    <div className="d-flex align-items-center">
      <img
        src="https://cdn-icons-png.freepik.com/256/3212/3212253.png?ga=GA1.1.2004958773.1710632851&semt=ais_hybrid"
        height="50"
        loading="lazy"
        alt="شعار"
        className="me-2" /* مسافة بين الشعار والنص */
      />
      <a className="navbar-brand mb-0" href="#"> غَلَّة </a>
    </div>

    {/* باقي العناصر */}
    <ul className="navbar-nav d-flex justify-content-center mb-2 mb-lg-0" style={{ flex: 1 }}>
      <li className="nav-item">
        <Link className="nav-link" to="/">الرئيسية</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/aboutus">حولنا</Link>
      </li>
      <li className="nav-item">
      <Link class="nav-link" to="/callus">اتصل بنا</Link>
      </li>
    </ul>
  </div>
</div>

<div className="d-flex text-light">
<Link to="/details" className="link-secondary me-3 text-light position-relative">
              <i className="bi bi-basket2-fill"></i>
              <span
                className="badge rounded-pill badge-notification bg-warning position-absolute"
                style={{ top: '0', right: '0', transform: 'translate(50%, -50%)' }}
              >
                {cartCount}
              </span>
            </Link>


                        
                        <div>
                        <i class="bi bi-person-fill p-2"></i>
                        </div>
                        </div>
                    
                    </div>
                    
                    </nav>

              </header>



              <main>
                {children}
              </main>

              <footer className=" text-light py-4" style={{ backgroundColor: "#6B8E23" }}>
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <h6>عن غَلَّة</h6>
            <p>
              غلة تهدف إلى تقديم أفضل المنتجات الزراعية المستدامة مباشرة من المزارعين إلى المتسوقين.
            </p>
          </div>

          
          <div className="col-md-4 mb-3">
            <h6>روابط مفيدة</h6>
            <ul className="list-unstyled">
              <li><Link to="/aboutus" className="text-light text-decoration-none">من نحن</Link></li>
              <li><Link to="/callus" className="text-light text-decoration-none">اتصل بنا</Link></li>
              <li><Link to="/list"className="text-light text-decoration-none">الخدمات</Link></li>
            </ul>
          </div>

          
          <div className="col-md-4 mb-3">
            <h6>تواصل معنا</h6>
            <p><i className="bi bi-telephone-fill"></i> +966 123 456 789</p>
            <p><i className="bi bi-envelope-fill"></i> info@galla.com</p>
            <p><i className="bi bi-geo-alt-fill"></i> الرياض، المملكة العربية السعودية</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} غَلَّة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
         
    </> );
}
 
export default MainLayout;