import React from "react";
import { useLocation } from "react-router-dom";

const Invoice = () => {
  const location = useLocation();
  const { name, email, phone, address, cart, totalPrice } = location.state;

  const currentDate = new Date().toLocaleDateString("ar-SA");

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-secondary text-white text-center">
          <h3>فاتورة الشراء</h3>
          <p className="mb-0">تاريخ الفاتورة: {currentDate}</p>
        </div>

        <div className="card-body">
          {/* معلومات العميل */}
          <h5 className="mb-4 text-secondary">تفاصيل العميل</h5>
          <div className="row">
            <div className="col-md-6">
              <p><strong>الاسم:</strong> {name}</p>
              <p><strong>البريد الإلكتروني:</strong> {email}</p>
            </div>
            <div className="col-md-6">
              <p><strong>رقم الهاتف:</strong> {phone}</p>
              <p><strong>العنوان:</strong> {address}</p>
            </div>
          </div>

          <hr />

          {/* تفاصيل المنتجات */}
          <h5 className="mb-4 text-secondary">تفاصيل المنتجات</h5>
          <table className="table table-bordered">
            <thead className="bg-secondary text-white">
              <tr>
                <th>المنتج</th>
                <th>الكمية</th>
                <th>السعر للوحدة (ر.س)</th>
                <th>الإجمالي (ر.س)</th>
              </tr>
            </thead>
            <tbody>
  {cart.map((product) => {
    const price = parseFloat(product.price) || 0; // تحويل السعر إلى رقم
    return (
      <tr key={product.id}>
        <td>{product.title}</td>
        <td>{product.quantity}</td>
        <td>{price.toFixed(2)}</td>
        <td>{(product.quantity * price).toFixed(2)}</td>
      </tr>
    );
  })}
</tbody>

            <tfoot>
              <tr className="bg-light">
                <td colSpan="3" className="text-end"><strong>الإجمالي الكلي:</strong></td>
                <td><strong>{totalPrice.toFixed(2)} ر.س</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="card-footer bg-secondary text-white text-center" >
          <p className="mb-0">شكراً لتسوقك معنا! نأمل أن تكون تجربتك ممتازة.</p>
          <p className="mb-0">للاستفسارات: <strong>info@galla.com</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

