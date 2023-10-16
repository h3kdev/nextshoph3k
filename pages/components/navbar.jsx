import { BiSearch, BiUser } from 'react-icons/bi';
import { Menu } from '@headlessui/react';
import { useState } from 'react';

export default function Navbar() {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <Menu>
      <div className="h-20 flex items-center justify-between px-4">
        <div className="text-xl font-extrabold">DENEME</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-emerald-400/40 duration-300 font-medium">Ana Sayfa</a>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-emerald-400/40 duration-300 font-medium">Ana Sayfa</a>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-emerald-400/40 duration-300 font-medium">Ana Sayfa</a>
        </div>
        <div className="flex items-center space-x-2">
          <div className='px-2 py-2 rounded-lg hover:bg-emerald-400/40 duration-300'>
              <BiSearch className='w-6 h-6' />
          </div>
          <div className='px-2 py-2 rounded-lg hover:bg-emerald-400/40 duration-300'>
            <BiUser className='w-6 h-6' />
          </div>
        </div>
      </div>

    </Menu>
  );
}
