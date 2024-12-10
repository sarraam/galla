import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";

const Details = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0 && quantity <= 100) { // التحقق من النطاق (1 إلى 100)
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };
  

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  return (
    <MainLayout>
      <div className="container">
        <h3 className="mt-3">تفاصيل السلة</h3>
        {cart.length > 0 ? (
          <div className="row">
            {cart.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top p-3"
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="text-center fw-bold">
                      السعر: {product.price} ر.س
                    </p>
                    <p className="text-center fw-bold">
                      الإجمالي: {product.price * product.quantity} ر.س
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                    <input
  type="number"
  min="1"
  max="100"
  className="form-control w-50"
  value={product.quantity}
  onChange={(e) =>
    handleQuantityChange(product.id, parseInt(e.target.value, 10))
  }
/>

                    </div>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => handleRemove(product.id)}
                    >
                      حذف المنتج
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 mt-3">
              <h5>الإجمالي الكلي: {calculateTotalPrice()} ر.س</h5>
            </div>
          </div>
        ) : (
          <p className="alert alert-success mt-3">السلة فارغة</p>
        )}
        <div className="mt-3 d-flex justify-content-between">
          <Link to="/list" className="btn btn-warning mb-5">
            العودة للقائمة الرئيسية
          </Link>
          {cart.length > 0 && (
            <Link to="/checkout" className="btn btn-success mb-5">
              مواصلة الشراء
            </Link>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;

