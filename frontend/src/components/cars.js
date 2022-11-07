// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import axios from 'axios'
import logo from './img/logo.png'

// img
import mobil from './img/mobil.png'
import fb from './img/fb.png'
import ig from './img/ig.png'
import mail from './img/mail.png'
import twit from './img/twit.png'
import twitch from './img/twitch.png'

function cars () {
  
const getCars = () => {
  axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
  .then(res => {
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  })
}

return (
  <div>
    <div className="relative bg-sky-50">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center justify-betwee py-6 md:justify-start md:space-x-10">
          <a href="/">
            <img className="h-8 w-auto sm:h-10" src={logo} alt="logo"/>
          </a>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="/" class="ml-8 inline-flex font-medium items-center justify-center text-black-500
             hover:text-gray-900">Our Service</a>
            <a href="/" class="ml-8 inline-flex font-medium items-center justify-center text-black-500
             hover:text-gray-900">Why Us</a>
            <a href="/" class="ml-8 inline-flex font-medium items-center justify-center text-black-500
             hover:text-gray-900">Testimonial</a>
            <a href="/" class="ml-8 inline-flex font-medium items-center justify-center text-black-500
             hover:text-gray-900">FAQ</a>
            <a href="/" class="ml-8 inline-flex  items-center justify-center whitespace-nowrap rounded-md 
            border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm
             hover:bg-indigo-700">Register</a>
          </div>

        </div>
      </div>
    </div>

    <div className="relative bg-sky-50">
      <div className="container max-w-5xl mx-auto grid grid-cols-2 pt-20">
        <div>
          <h1 className="font-bold text-4xl pb-5">Sewa & Rental Mobil Terbaik di kawasan Brebes</h1>
          <div className="font-normal text-sm pb-4">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
            Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
          </div>  
        </div>

        <div>
          <img src={mobil} alt="mobil"/>
        </div>

      </div>  
    </div>

    <div className="relative">
      <div className="absolute left-0 right-0 bg-sky-50 h-1/2"/>
        <div className="container mx-auto relative max-w-5xl bg-white border border-gray-50 shadow-md 
        rounded-lg p-12 justify-between">
          <div className="grid grid-cols-5">
            <div>
              <div className="text-xs pb-1">Tipe Driver</div>
              <select className="text-xs border border-gray-200 rounded-sm h-9 w-40">
					      <option disabled selected hidden>Pilih Tipe Driver</option>
					      <option>Dengan Supir</option>
					      <option>Tanpa Supir (Lepas Kunci)</option>
				      </select>
            </div>

            <div>
              <div className="text-xs pb-1">Tanggal</div>
              <input type="date" className="text-xs border border-gray-200 rounded-sm h-9 w-40" />
            </div>

            <div>
              <div className="text-xs pb-1">Waktu Jemput/Ambil</div>
              <select className="text-xs border border-gray-200 rounded-sm h-9 w-40">
					      <option value="" disabled selected hidden>Pilih waktu</option>
					      <option value="08">08.00 WIB</option>
					      <option value="09">09.00 WIB</option>
					      <option value="10">10.00 WIB</option>
					      <option value="11">11.00 WIB</option>
					      <option value="12">12.00 WIB</option>
				      </select>
            </div>

            <div>
              <div className="text-xs pb-1">Jumlah Penumpang</div>
              <input className="text-xs border border-gray-200 rounded-sm h-9 w-40" type="number" 
              placeholder="&nbsp;Jumlah Penumpang"/>
            </div>

            <div className="pt-4">
              <button onClick={getCars} className="flex ml-20 text-sm py-2 px-3 bg-green-600 rounded-sm 
            text-white">
                Cari Mobil
              </button>
            </div>

          </div>
        </div>
      </div>
      
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
    </div>
  )
}

export default cars
