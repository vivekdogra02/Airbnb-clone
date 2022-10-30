import React from "react";

function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 
    px-32 py-14 gap-y-10 text-gray-600"
    >
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is a real site</p>
        <p>Referrals accepted</p>
        <p>Airbnb New</p>
        <p>Airbnb HUT</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>How we do renting?</p>
        <p>Presents</p>
        <p>Host reviews</p>
        <p>Airbnb Deluxe</p>
        <p>Airbnb Studio Apartment</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Youtube reviews</p>
        <p>Easter Special</p>
        <p>Chat Now</p>
      </div>
    </div>
  );
}

export default Footer;
