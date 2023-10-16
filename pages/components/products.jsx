import { HiOutlineArrowsUpDown } from 'react-icons/hi2';
import { AiFillStar, AiOutlineShopping } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import image from '../../static/public/images/products/eightborn-basic-tshirt-siyah.webp';
import image2 from '../../static/public/images/products/2_org_zoom.webp';

import Image from 'next/image';

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
                        <div className="border-r-2 border-l-2 w-1/3 h-16 flex items-center justify-center hover:bg-emerald-400/30 cursor-pointer md:text-sm lg:text-base">
                            <div className='flex items-center'>
                                <div>Fiyatı Artan</div>
                                <HiOutlineArrowsUpDown  className='ml-3'/>
                            </div>
                        </div>
                        <div className="border-r-2 w-1/3 h-16 flex items-center justify-center hover:bg-emerald-400/30 cursor-pointer md:text-sm lg:text-base">
                            <div className='flex items-center'>
                                <div>En Çok Satan</div>
                                <HiOutlineArrowsUpDown  className='ml-3'/>
                            </div>
                        </div>
                        <div className="w-1/3 h-16 flex items-center justify-center hover:bg-emerald-400/30 rounded-r-lg cursor-pointer md:text-sm lg:text-base">
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

                    <div className='flex items-center justify-center'>
                        <div className="w-[20rem] lg:w-[19rem] h-[30rem] bg-slate-200/50 rounded-xl">
                            <Image src={image} className='w-full h-[20rem] rounded-t-xl'/>
                            <div className="mx-4 md:my-3">
                                <div className='flex items-center justify-start pt-3 text-emerald-600'>
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarHalf />
                                    <BsStar />
                                </div>
                                <div className="mt-2">
                                    <div className="font-semibold text-sm text-emerald-600">T-Shirt</div>
                                    <div className="font-medium mt-1 w-full h-12">İki Satırlık Uzun Deneme Ürün Başlığı</div>
                                </div>
                                <div className='flex items-center justify-between -mt-1'>
                                    <div className="font-bold text-xl text-emerald-600">000 TL</div>
                                    <div className='px-2.5 py-2.5 bg-emerald-600/70 rounded-lg'>
                                        <AiOutlineShopping/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className="w-[20rem] lg:w-[19rem] h-[30rem] bg-slate-200/50 rounded-xl">
                            <Image src={image} className='w-full h-[20rem] rounded-t-xl'/>
                            <div className="mx-4 md:my-3">
                                <div className='flex items-center justify-start pt-3 text-emerald-600'>
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarHalf />
                                    <BsStar />
                                </div>
                                <div className="mt-2">
                                    <div className="font-semibold text-sm text-emerald-600">T-Shirt</div>
                                    <div className="font-medium mt-1 w-full h-12">İki Satırlık Uzun Deneme Ürün Başlığı</div>
                                </div>
                                <div className='flex items-center justify-between -mt-1'>
                                    <div className="font-bold text-xl text-emerald-600">000 TL</div>
                                    <div className='px-2.5 py-2.5 bg-emerald-600/70 rounded-lg'>
                                        <AiOutlineShopping/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className="w-[20rem] lg:w-[19rem] h-[30rem] bg-slate-200/50 rounded-xl">
                            <Image src={image} className='w-full h-[20rem] rounded-t-xl'/>
                            <div className="mx-4 md:my-3">
                                <div className='flex items-center justify-start pt-3 text-emerald-600'>
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarHalf />
                                    <BsStar />
                                </div>
                                <div className="mt-2">
                                    <div className="font-semibold text-sm text-emerald-600">T-Shirt</div>
                                    <div className="font-medium mt-1 w-full h-12">İki Satırlık Uzun Deneme Ürün Başlığı</div>
                                </div>
                                <div className='flex items-center justify-between -mt-1'>
                                    <div className="font-bold text-xl text-emerald-600">000 TL</div>
                                    <div className='px-2.5 py-2.5 bg-emerald-600/70 rounded-lg'>
                                        <AiOutlineShopping/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className="w-[20rem] lg:w-[19rem] h-[30rem] bg-slate-200/50 rounded-xl">
                            <Image src={image} className='w-full h-[20rem] rounded-t-xl'/>
                            <div className="mx-4 md:my-3">
                                <div className='flex items-center justify-start pt-3 text-emerald-600'>
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarHalf />
                                    <BsStar />
                                </div>
                                <div className="mt-2">
                                    <div className="font-semibold text-sm text-emerald-600">T-Shirt</div>
                                    <div className="font-medium mt-1 w-full h-12">İki Satırlık Uzun Deneme Ürün Başlığı</div>
                                </div>
                                <div className='flex items-center justify-between -mt-1'>
                                    <div className="font-bold text-xl text-emerald-600">000 TL</div>
                                    <div className='px-2.5 py-2.5 bg-emerald-600/70 rounded-lg'>
                                        <AiOutlineShopping/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}
