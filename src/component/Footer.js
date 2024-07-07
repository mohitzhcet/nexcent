import React from 'react';
import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
         <div className="col-span-1 ">
            <div className='flex '>
                <img src={logo} alt="Logo" className="h-8 w-auto" />
                <span className="text-white text-4xl font-bold ">Nextcent</span>
              </div>
            <div className='my-2'>
              <p className="mb-2">Cpoyright @ 2020 Nextcent ltd.</p>
              <p>All rights reserved</p>
            </div>

            <div>

            </div>
           
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Testimonial</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <div className="flex space-x-4">
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Term of service</a></li>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Legal</a></li>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Privacy policy</a></li>
              <li className="mb-2"><a href="#" className="text-gray-300 hover:text-white">Status</a></li>
            </ul>
              {/* <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.757-6.515h1.657v-3.01h-1.657v3.01zm.328-3.416c0 .253-.206.458-.46.458-.253 0-.459-.205-.459-.458 0-.254.206-.46.46-.46.253 0 .459.206.459.46zm.893 3.416h1.294v-4.502h-2.953v1.296h1.66v1.213h-1.66v1.993h1.659v1.813zm3.49-4.502h-1.628v4.502h1.627v-2.954h.014l.684 1.958h1.756l-.804-2.158c.464-.26.815-.7.992-1.225l.81 2.158h1.692l-.767-2.158c.493-.207.898-.58 1.145-1.057.246-.476.322-1.02.214-1.544-.108-.523-.362-.994-.73-1.362-.367-.37-.845-.624-1.365-.731-.52-.108-1.065-.032-1.544.215-.48.247-.854.652-1.06 1.146l-.805 2.158zm6.278 5.418l-.083.282-.329.986-.017.05h-2.044l-.02-.056-.337-.988-.082-.281s-.534-1.402-.63-1.645c-.128-.34-.205-.7-.236-1.062h1.664l.02.071c.05.178.122.347.216.502.093.156.205.292.335.404.13.112.274.198.43.259.155.062.319.098.493.11.175-.002.338-.039.494-.11.156-.061.299-.147.43-.259.131-.112.243-.248.335-.404.092-.155.164-.324.216-.502l.019-.071h1.676c-.031.362-.108.722-.236 1.062-.096.243-.63 1.645-.63 1.645zm-10.295-5.419h-1.656v4.502h1.657v-3.01zm3.957-5.476c1.657 0 3.002 1.345 3.002 3.002s-1.345 3.002-3.002 3.002-3.002-1.345-3.002-3.002 1.345-3.002 3.002-3.002zm0 5.002c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.235-6.92v1.573c0 .41-.331.743-.74.743h-1.098a.742.742 0 01-.742-.743v-1.573h-1.247v1.573c0 .41-.332.743-.74.743H7.768a.742.742 0 01-.742-.743v-1.573H5v-1.324h2.026V8.396c0-1.005.812-1.818 1.817-1.818h1.09c1.006 0 1.818.813 1.818 1.818v1.364H15V10.76h-1.765z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.885-6.714h1.789c.232 0 .42.19.42.424v2.13c0 .234-.188.424-.42.424h-1.79a.424.424 0 01-.42-.424v-2.13c0-.234.188-.424.42-.424zm4.545 1.263c.246 0 .446-.2.446-.447a.445.445 0 00-.446-.446.445.445 0 00-.446.446c0 .247.2.447.446.447zm-5.748-3.6h4.398c.268 0 .486.217.486.485v.971c0 .268-.218.485-.486.485H6.912a.486.486 0 01-.486-.485v-.971c0-.268.218-.485.486-.485z" clipRule="evenodd" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
