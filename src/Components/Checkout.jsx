import { useSelector } from "react-redux";
import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };
  

  return (
    <MainLayout>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    {/* Products Section */}
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <Link to="/list" className="text-body badge bg-warning">
                          <i className="fas fa-long-arrow-alt-left me-2 text-white"></i> 
                          مواصلة التسوق
                        </Link>
                      </h5>
                      <hr />
                      <h5>عربة التسوق</h5>
                      {cart.map((product) => (
                        <div key={product.id} className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <img
                                  src={product.image}
                                  className="img-fluid rounded-3"
                                  alt={product.title}
                                  width={100}
                                />
                                <div className="ms-3">
                                  <h6 className="p-2">{product.title}</h6>
                                  <p className="small mb-0">{product.description}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                              <h6 className="fw-normal mb-0 me-2">
  الكمية: {Math.max(1, Math.min(product.quantity, 100))}
</h6>


</div>

                            </div>
                          </div>
                        </div>
                      ))}
                      <h5 className="mt-3">الإجمالي الكلي: {calculateTotalPrice()} ر.س</h5>
                    </div>

{/* Checkout Form */}
<div className="col-lg-5">
  <div className="card shadow-sm">
    <div className="card-body">
      <h5 className="mb-4 text-success">بيانات العميل</h5>
      <form>
        <div className="mb-3">
          <label className="form-label fw-bold">الاسم الكامل</label>
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="أدخل اسمك الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">البريد الإلكتروني</label>
          <input
            type="email"
            className="form-control rounded-pill"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">رقم الهاتف</label>
          <input
            type="tel"
            className="form-control rounded-pill"
            placeholder="05XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">العنوان</label>
          <textarea
            className="form-control rounded-3"
            rows="3"
            placeholder="أدخل عنوانك بالتفصيل"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
      </form>
    </div>
  </div>

  <div className="card mt-4 shadow-sm">
    <div className="card-body bg-light">
      <h5 className="mb-4 text-success">بيانات الدفع</h5>
      <form>
        <div className="mb-3">
          <label className="form-label fw-bold">الاسم حسب البطاقة</label>
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="أدخل الاسم كما هو مطبوع"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">رقم البطاقة</label>
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="XXXX XXXX XXXX XXXX"
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">CVV</label>
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="XXX"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">تاريخ الانتهاء</label>
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="MM/YY"
            />
          </div>
        </div>
      </form>
    </div>
  </div>

  <div className="mt-4 text-center">
    <Link
      to="/invoice"
      state={{
        name,
        email,
        phone,
        address,
        cart,
        totalPrice: calculateTotalPrice(),
      }}
    >
      <button className="btn btn-success btn-lg rounded-pill w-100">
        إتمام الشراء
      </button>
    </Link>
  </div>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Checkout;
