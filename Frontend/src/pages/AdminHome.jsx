import AdminProductList from "../features/admin/adminProductList";
import Footer from "../features/common/Footer";
import Navbar from "../features/navbar/Navbar";

function AdminHome() {
  return (
    <div>
      <Navbar>
        <AdminProductList></AdminProductList>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}

export default AdminHome;
