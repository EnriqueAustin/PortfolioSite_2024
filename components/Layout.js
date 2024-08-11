import { Sora } from '@next/font/google';

import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800'],
});

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      <main className='overflow-auto h-full'> {/* Added overflow-auto to enable scrolling */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
