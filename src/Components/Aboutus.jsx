
import MainLayout from '../Layouts/MainLayout';
import { Link } from "react-router-dom";

const Aboutus = () => {
    return (<>
         <MainLayout>
         <div className="container my-5">
          <div className='card'>
            <div className='card-body' style={{ backgroundColor: "#d4edda", borderRadius: "8px" }}>
      <div className="row align-items-center">
        {/* العمود الأيمن - النص والعنوان والزر */}
        <div className="col-md-6 text-center text-md-start" >
          <h2 className="mb-4"> من نحن؟</h2>
          <p className="mb-4">
          مرحبًا بك في “غلة”، وجهتك الأولى للحصول على أفضل المنتجات الزراعية والخدمات المصممة لتلبية احتياجاتك بأسلوب عصري ومستدام. نؤمن بأن الزراعة ليست مجرد مهنة، بل أسلوب حياة يُثري الأرض ويُعزز جودة الحياة.
          </p>
          <p>رسالتنا:
نهدف إلى تقديم منتجات وخدمات زراعية تُسهم في تعزيز الاستدامة والحفاظ على البيئة، مع تمكين المزارعين والشركات من تحقيق أفضل إنتاجية بجودة عالية.
</p>
<p>انضم إلينا اليوم واستمتع بتجربة تسوق مميزة تجمع بين الجودة، الاستدامة، والأسعار المناسبة. نحن هنا لنمنحك الأفضل دائمًا.</p>

<h4 className='text-center text-success'> “غلة… حصادك الأفضل يبدأ معنا” </h4>
          <Link to="/list">
            <button className="btn btn-warning">تسوق الآن</button>
          </Link>
        </div>

        {/* العمود الأيسر - الصورة */}
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-photo/community-people-working-together-agriculture-grow-food_23-2151205708.jpg?t=st=1733623819~exp=1733627419~hmac=189c4f0c7d6ecbee41f1a5fa23f69fe94268d88247292456e84934aa624cf6dd&w=2000" // استبدل برابط الصورة الخاص بك
            alt=""
            className="img-fluid w-100 h-100 object-cover"
            style={{ objectFit: "cover" }} 
          />
        </div>
        </div>
        </div>
      </div>
    </div>
         </MainLayout>
            
    </> );
}
 
export default Aboutus;