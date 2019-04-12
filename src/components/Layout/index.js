import Header from '../Header';
import Meta from '../Meta';
import Footer from '../Footer';

type Props = {
  children: any,
  title: string,
};

const Layout = (props: Props) => (
  <div>
    <Meta title={props.title} />
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
