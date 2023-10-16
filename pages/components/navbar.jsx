import { BiSearch, BiUser } from 'react-icons/bi';
import { Menu } from '@headlessui/react';
import { useState } from 'react';

export default function Navbar() {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <Menu>
      <div className="h-20 flex items-center justify-between px-4">
        <div className="text-xl font-extrabold">DENEME</div>
        <div className='w-[270px] h-4 bg-transparent'></div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-emerald-400/40 duration-300 font-medium">Ana Sayfa</a>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-emerald-400/40 duration-300 font-medium">Ana Sayfa</a>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-emerald-400/40 duration-300 font-medium">Ana Sayfa</a>
        </div>
        {isSearchOpen ? (
        <div className='w-[270px] h-60 bg-slate-100/80 rounded-2xl mt-48 py-2 border-[1px] border-gray-300'>
            <div className='h-12 w-full border-b-[1px] border-gray-300 px-4'>
                <input className="h-10 md:w-full px-2 bg-slate-200/50 rounded-lg outline-none placeholder-gray-600" placeholder="Ne araştırmıştınız?"></input>
            </div>
        </div>
      ) : (
        <div className='w-[270px]'>
        </div>
      )}
        <div className="flex items-center space-x-2">
          <div className='px-2 py-2 rounded-lg hover:bg-emerald-400/40 duration-300'>
            <button onClick={() => setSearchOpen(!isSearchOpen)}>
              <BiSearch className='w-6 h-6' />
            </button>
          </div>
          <div className='px-2 py-2 rounded-lg hover:bg-emerald-400/40 duration-300'>
            <BiUser className='w-6 h-6' />
          </div>
        </div>
      </div>

    </Menu>
  );
}
