import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const List = () => {
  const dispatch = useDispatch();

  

  const categories = [
    {
      title: "صناديق موسمية",
      description: "منتجات مستمدة من طبيعة هذا الموسم الغني بالخيرات.",
      products: [
        {
          id: 1,
          title: "قرع طازج",
          price: "20",
          image:
            "https://img.freepik.com/free-photo/chopped-raw-pumpkin-put-wooden-cutting-board_1150-34573.jpg?t=st=1733607977~exp=1733611577~hmac=e16d4f0390508f1def7084e8d15c9ff5759508a23554910b8a5446c920222f4c&w=1800",
        },
        {
          id: 2,
          title: "بطاطا حلوة",
          price: "15",
          image:
            "https://img.freepik.com/free-photo/sweet-potatoes_144627-33711.jpg?t=st=1733607606~exp=1733611206~hmac=2bdfb4f84af6db7c3920d008b1bd8c75fd6a448ce3ac307a26f3e4cf8db798b9&w=1800",
        },
        {
          id: 3,
          title: "تفاح طازج",
          price: "25",
          image:
            "https://img.freepik.com/free-photo/fresh-apple-wooden-box-black-fresh-fruit_1150-18118.jpg?t=st=1733607906~exp=1733611506~hmac=7842775337cc801333928181e285cee7f667734b3e82fd8187996a9ec775a563&w=1800",
        },
      ],
    },
    {
      title: "شتلات و أدوات زراعية",
      description: "لنمنحك بداية مثالية لعالم الزراعة والعناية بالنباتات",
      products: [
        {
          id: 4,
          title: "شتلة نعناع",
          price: "10",
          image: "https://images.unsplash.com/photo-1574209909362-814b176631fd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 5,
          title: "مجرفة زراعية",
          price: "12",
          image: "https://images.unsplash.com/photo-1573561368183-fd88bdb4503d?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 6,
          title: "مقص تشذيب",
          price: "18",
          image: "https://plus.unsplash.com/premium_photo-1680322468906-d3ed1fb060d4?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      title: "منتجات صديقة للبيئة",
      description: "لتساهم في حماية كوكبنا بأسلوب عصري ومسؤول",
      products: [
        {
          id: 7,
          title: "حقيبة قماشية",
          price: "5",
          image: "https://images.pexels.com/photos/4385286/pexels-photo-4385286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 8,
          title: "أواني قابلة للتحلل",
          price: "8",
          image: "https://img.freepik.com/free-photo/eco-friendly-stylish-disposable-convenient-beautiful-recyclable-tableware_169016-6485.jpg?t=st=1733617989~exp=1733621589~hmac=fd8a2f1cf2b7f9be157399cfe0cf185db69736f46f30840b4d199336d10c3d36&w=1800",
        },
        {
          id: 9,
          title: " مظلات شمسية",
          price: "12",
          image: "https://images.pexels.com/photos/8471655/pexels-photo-8471655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      title: "مبيدات وأسمدة",
      description: "مصممة خصيصًا لتعزيز نمو محاصيلك وحمايتها بأمان وكفاءة",
      products: [
        {
          id: 10,
          title: "سماد عضوي",
          price: "20",
          image: "https://images.pexels.com/photos/4751959/pexels-photo-4751959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 11,
          title: "مبيد طبيعي",
          price: "18",
          image: "https://plus.unsplash.com/premium_photo-1661816189756-29995a1eebaf?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 12,
          title: "سماد كيميائي",
          price: "25",
          image: "https://img.freepik.com/premium-photo/farmer-s-hands-are-picking-up-chemical-fertilizers_38663-594.jpg?w=1800",
        },
      ],
    },
  ];

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <MainLayout>
      <div className="container mt-3">
        {categories.map((category, index) => (
          <div key={index} className="mb-5">
            <h4 className="mb-2">{category.title}</h4>
            <p className="text-muted">{category.description}</p>
            <div className="row">
              {category.products.map((product) => (
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
                      <p className="text-center fw-bold">{product.price} ر.س</p>
                      <button
                        className="btn btn-success w-100"
                        onClick={() => addToCart(product)}
                      >
                        إضافة إلى السلة
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default List;


