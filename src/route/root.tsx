import Inspx from "inspx";
import { Outlet} from "react-router-dom"
import { Toaster} from 'react-hot-toast';

//Others
import Header from '../components/Header';
import Footer from '../components/Footer';


const Root = () => {
  return (
    <Inspx>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </Inspx>
  );
};

export default Root;
