// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import {Link} from 'react-router-dom'
import React, {useRef} from 'react'
import Slider from "react-slick";
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// img
import OurService from './img/OurService.png'
import check from './img/check.png'
import like from './img/like.png'
import price from './img/price.png'
import jam from './img/jam.png'
import lencana from './img/lencana.png'
import cowo from './img/cowo.png'
import cewe from './img/cewe.png'
import star from './img/star.png'
import kiri from './img/kiri.png'
import kanan from './img/kanan.png'
import fb from './img/fb.png'
import ig from './img/ig.png'
import mail from './img/mail.png'
import twit from './img/twit.png'
import twitch from './img/twitch.png'
import logo from './img/logo.png'
import mobil from './img/mobil.png'

const Dashboard = () => {

    const features = [
        "Sewa Mobil Dengan Supir di Brebes 12 Jam",
        "Sewa Mobil Lepas Kunci di Brebes 24 Jam",
        "Sewa Mobil Jangka Panjang Bulanan",
        "Gratis Antar - Jemput Mobil di Bandara",
        "Layanan Airport Transfer / Drop In Out"
    ];

    const slickRef = useRef();
    
    function fnNext(){
        slickRef?.current?.slickNext();
    }

    function fnPrev(){
        slickRef?.current?.slickPrev();
    }

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };

    return (
    
    <main>
        <div className="relative bg-sky-50">
            <div className="container max-w-5xl mx-auto">
                <div className="flex items-center justify-betwee py-6 md:justify-start md:space-x-10">
                    <img className="h-8 w-auto sm:h-10" src={logo} alt="logo"/>

                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <a href="#ourservice" class="ml-8 inline-flex font-medium items-center justify-center 
                        text-black-500 hover:text-gray-900">Our Service</a>
                        <a href="#whyus" class="ml-8 inline-flex font-medium items-center justify-center 
                        text-black-500 hover:text-gray-900">Why Us</a>
                        <a href="#testimonial" class="ml-8 inline-flex font-medium items-center justify-center 
                        text-black-500 hover:text-gray-900">Testimonial</a>
                        <a href="#faq" class="ml-8 inline-flex font-medium items-center justify-center 
                        text-black-500 hover:text-gray-900">FAQ</a>
                        <a href="/" class="ml-8 inline-flex  items-center justify-center whitespace-nowrap 
                        rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium
                         text-white shadow-sm hover:bg-indigo-700">Register</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative bg-sky-50">
            <div className="container max-w-5xl mx-auto grid grid-cols-2 pt-20">
                <div>
                    <h1 className="font-bold text-4xl pb-5">Sewa & Rental Mobil Terbaik di kawasan Brebes</h1>
                    <div className="font-normal text-sm pb-4">
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga 
                    terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </div>
                    <Link to="/cars"><button className="text-sm py-2 px-3 bg-green-600 rounded-sm text-white">
                    Mulai Sewa Mobil
                    </button> </Link>
                </div>

                <div>
                    <img src={mobil} alt="mobil"/>
                </div>
            </div> 
        </div>

        <section id="ourservice" className="container max-w-5xl mx-auto grid grid-cols-2 pt-20 items-center">
            <img style={{ width: 400, height: 330 }} src={OurService} alt="OurService"/>

            <div className="px-10 space-y-4">
                <div className="font-bold text-2xl">Best Car Rental for any kind of trip in Brebes!</div>
                <div className="text-sm font-normal">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan 
                yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, 
                bisnis, wedding, meeting, dll.</div>

                {
                    features.map((val, index) => {
                        return (
                            <div className="flex items-center space-x-4" key={index}>
                                <img src={check} alt="check"
                                className="w-6 h-6"/>
                                <div className="text-sm">{val}</div>
                            </div>
                           );
                })}

            </div>
        </section>

        <section id="whyus" className="container max-w-5xl mx-auto pt-20 items-center">
            <div className="font-medium text-2xl">Why Us?</div>
            <div className="text-sm pt-5 pb-10">Mengapa harus pilih Binar Car Rental?</div>

            <div className="grid grid-cols-4 space-x-1">
                <div className="border border-gray-300 rounded-md items-start flex flex-col justify-center pt-10 
                pb-12 w-60 h-52">
                    <img className="flex mr-4 ml-4" src={like} alt="like"/>
                    <div className="flex mr-4 ml-4 text-base font-bold pt-4 pb-4">Mobil Lengkap</div>
                    <div className="flex mr-4 ml-4 text-sm">Tersedia banyak pilihan mobil, kondisi masih baru, 
                    bersih dan terawat</div>
                </div>

                <div className="border border-gray-300 rounded-md items-start flex flex-col justify-center pt-10 
                pb-12 w-60 h-52">
                    <img className="flex mr-4 ml-4" src={price} alt="price"/>
                    <div className="flex mr-4 ml-4 text-base font-bold pt-4 pb-4">Harga Murah</div>
                    <div className="flex mr-4 ml-4 text-sm">Harga murah dan bersaing, bisa bandingkan harga kami 
                    dengan rental mobil lain</div>
                </div>

                <div className="border border-gray-300 rounded-md items-start flex flex-col justify-center pt-10 
                pb-12 w-60 h-52">
                    <img className="flex mr-4 ml-4" src={jam} alt="jam"/>
                    <div className="flex mr-4 ml-4 text-base font-bold pt-4 pb-4">Layanan 24 Jam</div>
                    <div className="flex mr-4 ml-4 text-sm">Siap melayani kebutuhan Anda selama 24 jam nonstop. 
                    Kami juga tersedia di akhir minggu</div>
                </div>

                <div className="border border-gray-300 rounded-md items-start flex flex-col justify-center pt-10 
                pb-12 w-60 h-52">
                    <img className="flex mr-4 ml-4" src={lencana} alt="lencana"/>
                    <div className="flex mr-4 ml-4 text-base font-bold pt-4 pb-4">Sopir Profesional</div>
                    <div className="flex mr-4 ml-4 text-sm">Sopir yang profesional, berpengalaman, jujur, ramah dan 
                    selalu tepat waktu</div>
                </div>

            </div>
        </section>

        <section id="testimonial">
            <div className="text-center pt-20 pb-4 text-2xl font-bold">Testimonial</div>
            <div className="text-center pb-10 text-sm">Berbagai review positif dari para pelanggan kami</div>

            <div>
                <Slider {...settings} arrows={false} ref = {slickRef}>
                    <div className="flex mr-4 ml-0">
                        <div className=" bg-sky-50 rounded-lg p-6 flex mr-5 ml-5">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row space-x-5">
                                    <img src={cowo} alt="cowo" className="w-80 h-14 mt-7"/>
                                    <div>
                                        <img className="flex mr-5 ml-5 pb-1" src={star} alt="star"/>
                                        <div className="flex mr-5 ml-5 pb-1">“Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod”</div>
                                        <div className="flex mr-5 ml-5">John Dee 32, Bromo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mr-4 ml-0">
                        <div className=" bg-sky-50 rounded-lg p-6 flex mr-5 ml-5">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row space-x-5">
                                    <img src={cewe} alt="cewe" className="w-80 h-14 mt-7"/>
                                    <div>
                                        <img className="flex mr-5 ml-5 pb-1" src={star} alt="star"/>
                                        <div className="flex mr-5 ml-5 pb-1">“Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod”</div>
                                        <div className="flex mr-5 ml-5">John Dee 32, Bromo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mr-4 ml-0">
                        <div className=" bg-sky-50 rounded-lg p-6 flex mr-5 ml-5">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row space-x-5">
                                    <img src={cowo} alt="cowo" className="w-80 h-14 mt-7"/>
                                    <div>
                                        <img className="flex mr-5 ml-5 pb-1" src={star} alt="star"/>
                                        <div className="flex mr-5 ml-5 pb-1">“Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod”</div>
                                        <div className="flex mr-5 ml-5">John Dee 32, Bromo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mr-4 ml-0">
                        <div className=" bg-sky-50 rounded-lg p-6 flex mr-5 ml-5">
                            <div className="flex flex-row justify-between items-center">
                                <div className="flex flex-row space-x-5">
                                    <img src={cewe} alt="cewe" className="w-80 h-14 mt-7"/>
                                    <div>
                                        <img className="flex mr-5 ml-5 pb-1" src={star} alt="star"/>
                                        <div className="flex mr-5 ml-5 pb-1">“Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit, sed do eiusmod”</div>
                                        <div className="flex mr-5 ml-5">John Dee 32, Bromo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Slider>
            </div>

            <div className="flex flex-row justify-center">
                <div className="flex flex-row space-x-5 mt-6">
                    <div className="flex self-center justify-center border border-gray-500 rounded-full p-2 w-8 
                    h-8 cursor-pointer" onClick={() => fnPrev()}>
                        <img src={kiri} alt="kiri"/>
                    </div>
                    <div className="flex self-center justify-center border bg-green-500 rounded-full p-2 w-8 h-8 
                    cursor-pointer" onClick={() => fnNext()}>
                        <img src={kanan} alt="kanan"/>
                    </div>
                </div>
            </div>
        </section>

        <div className="container max-w-5xl mx-auto pt-10 items-center">
            <div className="section-started mt-lg-5 pt-lg-5 pt-5">
                <div className="card-started text-center">
                    <div className="mx-1 mb-4 font-bold text-4xl text-white">Sewa Mobil di Brebes Sekarang</div>
                    <div className="mx-3 text-sm text-white pb-10">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod <br className="d-none d-xl-block"/>tempor incididunt ut labore 
                    et dolore magna aliqua.</div>
                    <Link to="/cars"><button className="text-sm py-2 px-3 bg-green-600 rounded-sm text-white">
                    Mulai Sewa Mobil</button></Link>
                </div>
            </div>
        </div>

        <section id="faq" className="container max-w-5xl mx-auto pt-28 grid grid-cols-2">
            <div>
                <div className="text-2xl font-bold">Frequently Asked Question</div>
                <div className="text-sm pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
            <Accordion className="border border-white">
                <AccordionItem>
                    <AccordionItemHeading className="border border-gray-300">
                        <AccordionItemButton>
                            <div className="text-sm">Apa saja syarat yang dibutuhkan?</div>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel className="border border-gray-300">
                        <div className="flex mr-5 ml-5 text-sm">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad 
                        squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa 
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid 
                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft 
                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher 
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt 
                        you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            
                <div className="pb-4 pt-4">
                <AccordionItem>
                    <AccordionItemHeading className="border border-gray-300">
                        <AccordionItemButton>
                            <div className="text-sm">Berapa hari minimal sewa mobil lepas kunci?</div>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel className="border border-gray-300">
                        <div className="flex mr-5 ml-5 text-sm">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad 
                        squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa 
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid 
                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft 
                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher 
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt 
                        you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                </div>

                <AccordionItem>
                    <AccordionItemHeading className="border border-gray-300">
                        <AccordionItemButton>
                            <div className="text-sm">Berapa hari sebelumnya sabaiknya booking sewa mobil?</div>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel className="border border-gray-300">
                        <div className="flex mr-5 ml-5 text-sm">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad 
                        squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa 
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid 
                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft 
                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher 
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt 
                        you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <div className="pb-4 pt-4">
                <AccordionItem>
                    <AccordionItemHeading className="border border-gray-300">
                        <AccordionItemButton>
                            <div className="text-sm">Apakah Ada biaya antar-jemput?</div>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel className="border border-gray-300">
                        <div className="flex mr-5 ml-5 text-sm">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad 
                        squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa 
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid 
                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft 
                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher 
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt 
                        you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                </div>

                <AccordionItem>
                    <AccordionItemHeading className="border border-gray-300">
                        <AccordionItemButton>
                            <div className="text-sm">Bagaimana jika terjadi kecelakaan?</div>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel className="border border-gray-300">
                        <div className="flex mr-5 ml-5 text-sm">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad 
                        squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa 
                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid 
                        single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft 
                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher 
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt 
                        you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </section>

        <div className="container max-w-5xl mx-auto pt-28 grid grid-cols-4">
            <div className="text-sm">
                <div>Jalan Ahmad Yani No. 161 Jipang Kec. Bantarkawung 52274</div>
                <div className="pb-5 pt-5">binarcarrental@gmail.com</div>
                <div className="pb-28">081-233-334-808</div>
            </div>

            <div className="text-sm font-semibold">
                <div className="cursor-pointer flex mr-20 ml-20">Our services</div>
                <div className="cursor-pointer flex mr-20 ml-20 pb-5 pt-5">Why Us</div>
                <div className="cursor-pointer flex mr-20 ml-20">Testimonial</div>
                <div className="cursor-pointer flex mr-20 ml-20 pt-5">FAQ</div>
            </div>

            <div>
                <div className="text-sm pb-5">Connect with us</div>
                    <div className="flex flex-row space-x-5">
                        <img className="cursor-pointer" src={fb} alt="fb"/>
                        <img className="cursor-pointer" src={ig} alt="ig"/>
                        <img className="cursor-pointer" src={twit} alt="twit"/>
                        <img className="cursor-pointer" src={mail} alt="mail"/>
                        <img className="cursor-pointer" src={twitch} alt="twitch"/>
                    </div>
            </div>

            <div>
                <div className="text-sm flex ml-20 pb-5">Copyright Binar 2022</div>
                <img className="flex ml-20" src={logo} alt="logo"/>
            </div>   
        </div>
    </main>
  )
}

export default Dashboard