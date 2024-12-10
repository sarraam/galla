import MainLayout from '../Layouts/MainLayout';
import { useState } from "react";

const Callus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("تم إرسال الرسالة بنجاح!");
  };

    return ( 
        <>
        <MainLayout>
        <div className="container my-5">
            <div className="card">
                <div className="card-body">
            
      <h2 className="text-center mb-4"> كيف يمكننا مساعدتك؟</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            الاسم
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            الرسالة
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-warning">
            إرسال
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
    <div className="text-center mt-4">
  <h5>تابعنا على مواقع التواصل الاجتماعي</h5>
  <div className="d-flex justify-content-center mt-3">
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2"
    >
      <i className="bi bi-facebook" style={{ fontSize: "1.5rem", color: "#1877f2" }}></i> 
    </a>
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2"
    >
      <i className="bi bi-instagram" style={{ fontSize: "1.5rem", color: "#c13584" }}></i> 
    </a>
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2"
    >
      <i className="bi bi-linkedin" style={{ fontSize: "1.5rem", color: "#0077b5" }}></i> 
    </a>
    <a
      href="https://www.whatsapp.com"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2"
    >
      <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem", color: "#25d366" }}></i>
      </a>
    <a
      href="https://www.tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-2"
    >
      <i className="bi bi-tiktok " style={{ fontSize: "1.5rem", color: "#000000" }}></i> 
    </a>
  </div>
</div>

        </MainLayout>
        </>
     );
}
export default Callus;