import React from "react";

const Footer = () => {
  return (
    <div className="pt-48 bg-[040D11]">
      <div className="flex justify-center items-center ">
        <img src="../../../../assets/logo-footer.png" alt="" />
      </div>
      <div className="lg:flex lg:justify-between container mx-auto lg:px-16 md:px-8 px-8 md:flex md:flex-col md:justify-center md:items-center flex flex-col justify-center items-center  ">
        <div className="space-y-2">
          {/* about us */}
          <h1 className="font-bold">About Us</h1>
          <p className="text-xs text-slate-500">
            We are a passionate team <br />
            dedicated to providing the best <br />
            services to our customers.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font bold">Quick Links</h1>
          <div className="pl-4 flex items-center gap-2">
            <img
              className="h-0.5 w-0.5"
              src="../../../../assets/0.png"
              alt=""
            />
            <h1 className="text-slate-600 text-xs">Home</h1>
          </div>
          <div className="pl-4 flex items-center gap-2">
            <img
              className="h-0.5 w-0.5"
              src="../../../../assets/0.png"
              alt=""
            />
            <h1 className="text-slate-600 text-xs">Services</h1>
          </div>
          <div className="pl-4 flex items-center gap-2">
            <img
              className="h-0.5 w-0.5"
              src="../../../../assets/0.png"
              alt=""
            />
            <h1 className="text-slate-600 text-xs">About</h1>
          </div>
          <div className="pl-4 flex items-center gap-2">
            <img
              className="h-0.5 w-0.5"
              src="../../../../assets/0.png"
              alt=""
            />
            <h1 className="text-slate-600 text-xs">Contact</h1>
          </div>
        </div>

        <div className="space-y-2">
          <h1>Subscribe</h1>
          <p className="text-xs text-slate-600">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto bg-white rounded-2xl text-slate-400">
            <input
              type="email"
             placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-2xl hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
