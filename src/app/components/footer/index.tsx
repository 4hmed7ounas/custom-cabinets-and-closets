"use client";
import Link from "next/link";
import React from "react";
import { ROUTES } from "../../../../share/routes";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  // Quick Links array
  const quickLinks = [
    { name: "Home", route: ROUTES.home },
    { name: "About", route: ROUTES.aboutUs },
    { name: "Services", route: ROUTES.services },
    { name: "Our Team", route: ROUTES.ourteam },
    { name: "News", route: ROUTES.news },
    { name: "Contact", route: ROUTES.contactUs },
  ];

  // Social Media Links array
  const socialMedia = [
    { icon: <FaFacebook />, url: "https://www.facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, url: "https://www.twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://www.instagram.com", label: "Instagram" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com", label: "LinkedIn" },
  ];

  // Contact Information array
  const contactInfo = [
    {
      label: "Email",
      url: "mailto:support@example.com",
      value: "support@example.com",
    },
    { label: "Phone", url: "tel:+1234567890", value: "+1234567890" },
    {
      label: "Address",
      url: "https://maps.app.goo.gl/G12bsQ3AixMrm88u8",
      value: "123 Street, City, Country",
    },
  ];

  return (
    <footer className="bg-secondary-800 text-white pt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    rel="preload"
                    href={link.route}
                    className="text-primary-100 hover:text-primary-50 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <strong>{info.label}: </strong>
                  <Link
                    rel="preload"
                    href={info.url}
                    target="_blank"
                    className="text-primary-100 hover:text-primary-50 transition-all duration-300"
                  >
                    {info.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialMedia.map((media, index) => (
                <Link
                  key={index}
                  href={media.url}
                  target="_blank"
                  aria-label={media.label}
                  className="hover:text-secondary-400 text-2xl"
                >
                  {media.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p>Sign up for our newsletter to get the latest updates.</p>
            <input
              type="email"
              className="mt-2 px-4 py-2 rounded text-black w-full sm:w-64"
              placeholder="Your email"
            />
            <button className="mt-2 bg-secondary-500 text-white px-4 py-2 rounded w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1 mt-2">
        <h3 className="text-xl text-center font-semibold mb-4">Our Location</h3>
        <div className="w-full">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3403.243980827476!2d74.358398!3d31.462474000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI3JzQ0LjkiTiA3NMKwMjEnMzAuMiJF!5e0!3m2!1sen!2s!4v1734048538900!5m2!1sen!2s"
            className="w-full h-72"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary-900 text-center text-white py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
