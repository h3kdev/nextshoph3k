import { HiOutlineArrowsUpDown } from 'react-icons/hi2';

export default function Products() {
    return (
        <div className="mt-24 px-4">
            <div>
                <div className="font-bold text-3xl">Ürünler</div>
                {/* <div className="font-medium text-lg text-gray-600">Metorium bir hayaldi şimdi bir mağaza.</div>*/}
                <div className="font-medium text-lg text-gray-600">Kısa ürün kategorisi açıklaması.</div>
            </div>
            <div className="w-full h-16 bg-slate-200/50 rounded-xl my-4 hidden sm:block md:block lg:block">
                <div className="grid grid-cols-3 gap-4">
                    <div className="w-full h-16 hidden items-center justify-center lg:flex md:flex mx-2">
                        <input className="h-10 md:w-full px-2 bg-slate-200/90 rounded-lg outline-none placeholder-gray-600" placeholder="Ne araştırmıştınız?"></input>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        <div className="border-r-2 border-l-2 w-1/3 h-16 flex items-center justify-center hover:bg-blue-100 cursor-pointer md:text-sm lg:text-base">
                            <div className='flex items-center'>
                                <div>Fiyatı Artan</div>
                                <HiOutlineArrowsUpDown  className='ml-3'/>
                            </div>
                        </div>
                        <div className="border-r-2 w-1/3 h-16 flex items-center justify-center hover:bg-blue-100 cursor-pointer md:text-sm lg:text-base">
                            <div className='flex items-center'>
                                <div>En Çok Satan</div>
                                <HiOutlineArrowsUpDown  className='ml-3'/>
                            </div>
                        </div>
                        <div className="w-1/3 h-16 flex items-center justify-center hover:bg-blue-100 rounded-r-lg cursor-pointer md:text-sm lg:text-base">
                            <div className='flex items-center'>
                                <div>İlk Eklenen</div>
                                <HiOutlineArrowsUpDown  className='ml-3'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">


                    <div className="w-full lg:w-[19rem] h-[32rem] bg-slate-200/50 rounded-xl">
                        <div className="w-full h-[20rem] bg-slate-200 rounded-xl"></div>
                        <div className="mx-4 my-4 md:my-8">
                            <div>★★★★★</div>
                            <div className="mt-2">
                                <div className="font-semibold text-sm text-blue-600">T-Shirt</div>
                                <div className="font-medium mt-1">Deneme Ürün Başlığı</div>
                            </div>
                            <div className="mt-3 font-bold text-xl text-blue-600">000 TL</div>
                        </div>
                    </div>

                                        <div className="w-[22rem] lg:w-[19rem] h-[32rem] bg-slate-200/50 rounded-xl">
                        <div className="w-full h-[20rem] bg-slate-200 rounded-xl"></div>
                        <div className="mx-4 my-4 md:my-8">
                            <div>★★★★★</div>
                            <div className="mt-2">
                                <div className="font-semibold text-sm text-blue-600">T-Shirt</div>
                                <div className="font-medium mt-1">Deneme Ürün Başlığı</div>
                            </div>
                            <div className="mt-3 font-bold text-xl text-blue-600">000 TL</div>
                        </div>
                    </div>

                                        <div className="w-[22rem] lg:w-[19rem] h-[32rem] bg-slate-200/50 rounded-xl">
                        <div className="w-full h-[20rem] bg-slate-200 rounded-xl"></div>
                        <div className="mx-4 my-4 md:my-8">
                            <div>★★★★★</div>
                            <div className="mt-2">
                                <div className="font-semibold text-sm text-blue-600">T-Shirt</div>
                                <div className="font-medium mt-1">Deneme Ürün Başlığı</div>
                            </div>
                            <div className="mt-3 font-bold text-xl text-blue-600">000 TL</div>
                        </div>
                    </div>

                                        <div className="w-[22rem] lg:w-[19rem] h-[32rem] bg-slate-200/50 rounded-xl">
                        <div className="w-full h-[20rem] bg-slate-200 rounded-xl"></div>
                        <div className="mx-4 my-4 md:my-8">
                            <div>★★★★★</div>
                            <div className="mt-2">
                                <div className="font-semibold text-sm text-blue-600">T-Shirt</div>
                                <div className="font-medium mt-1">Deneme Ürün Başlığı</div>
                            </div>
                            <div className="mt-3 font-bold text-xl text-blue-600">000 TL</div>
                        </div>
                    </div>

                                        <div className="w-[22rem] lg:w-[19rem] h-[32rem] bg-slate-200/50 rounded-xl">
                        <div className="w-full h-[20rem] bg-slate-200 rounded-xl"></div>
                        <div className="mx-4 my-4 md:my-8">
                            <div>★★★★★</div>
                            <div className="mt-2">
                                <div className="font-semibold text-sm text-blue-600">T-Shirt</div>
                                <div className="font-medium mt-1">Deneme Ürün Başlığı</div>
                            </div>
                            <div className="mt-3 font-bold text-xl text-blue-600">000 TL</div>
                        </div>
                    </div>

                                        <div className="w-[22rem] lg:w-[19rem] h-[32rem] bg-slate-200/50 rounded-xl">
                        <div className="w-full h-[20rem] bg-slate-200 rounded-xl"></div>
                        <div className="mx-4 my-4 md:my-8">
                            <div>★★★★★</div>
                            <div className="mt-2">
                                <div className="font-semibold text-sm text-blue-600">T-Shirt</div>
                                <div className="font-medium mt-1">Deneme Ürün Başlığı</div>
                            </div>
                            <div className="mt-3 font-bold text-xl text-blue-600">000 TL</div>
                        </div>
                    </div>

                                        <div className="w-[22rem] lg:w-[19rem] h-[32rem] bg-slate-200/50 rounded-xl">
                        <div className="w-full h-[20rem] bg-slate-200 rounded-xl"></div>
                        <div className="mx-4 my-4 md:my-8">
                            <div>★★★★★</div>
                            <div className="mt-2">
                                <div className="font-semibold text-sm text-blue-600">T-Shirt</div>
                                <div className="font-medium mt-1">Deneme Ürün Başlığı</div>
                            </div>
                            <div className="mt-3 font-bold text-xl text-blue-600">000 TL</div>
                        </div>
                    </div>

                </div>
            </div>

            
        </div>
    );
}
