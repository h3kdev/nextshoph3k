import { BsShieldLock, BsTruck, BsCashStack, BsInstagram } from 'react-icons/bs';

export default function Footer() {
    return (
      <div className="mt-8 lg:mt-24 w-full px-4">

        <div className="mx-4 lg:mx-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                    <BsShieldLock className="w-10 h-10" />
                    <div className="mt-2 font-medium">256 Bit SSL ile güvende alışveriş</div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <BsTruck className="w-10 h-10" />
                    <div className="mt-2 font-medium">650 TL ve üzeri siparişlerde kargo bedava</div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <BsCashStack className="w-10 h-10" />
                    <div className="mt-2 font-medium">15 iş günü içerisinde iade</div>
                </div>
            </div>
        </div>


        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 mb-8">
          <div>
            <div className="font-extrabold text-2xl">H3K.DEV</div>
            <div className="font-medium text-gray-600">© 2023 H3K.DEV<br />Tüm hakları saklıdır.</div>
            <div className="mt-4">
              <BsInstagram className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-8 lg:mt-0 md:mt-0">
            <div className="font-bold text-lg">Kategoriler</div>
            <ul>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">Aksesuar</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">T-Shirt</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">Forma</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">Eşofman Takımı</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">İç Çamaşırı</li>
            </ul>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="font-bold text-lg">Kurumsal</div>
            <ul>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">Hakkımızda</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">İletişim</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">S.S.S</li>
            </ul>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="font-bold text-lg">Müşteri Hizmetleri</div>
            <ul>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">KVKK</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">Garanti ve İade</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">Gizlilik ve Güvenlik Politikası</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">Mesafeli Satış Sözleşmesi</li>
              <li className="font-medium text-sm text-gray-600 hover:ml-2 duration-500 leading-6 cursor-pointer">Ticari Elektronik İleti Onayı</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  