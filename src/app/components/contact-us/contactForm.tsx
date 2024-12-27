"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "../button";
import { responsiveTextClass } from "../styles/classes";
import { MdConnectWithoutContact } from "react-icons/md";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, projectType, message } = formData;
    if (!name || !email || !phone || !projectType || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      console.log(serviceId, templateId, publicKey);
      alert("Missing emailjs environment variables.");
      return;
    }

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="mt-4">
      <div id="get-started" className="flex justify-center">
        <MdConnectWithoutContact size={65} className="text-secondary-900" />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-secondary-900">
          Build Your Dream Space Together
        </h2>
        <p
          className={`${responsiveTextClass} text-center text-secondary-900 max-w-2xl mx-auto mb-4`}
        >
          Whether you are planning a custom kitchen, bathroom, or closet, our
          team is here to bring your vision to life. Fill out the form below,
          and one of our experts will get in touch with you shortly.
        </p>
        <div className="max-w-lg mx-auto px-8 pb-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-secondary-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-1 block w-full py-2 border-b-2 border-secondary-700 text-secondary-900 bg-primary-100 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary-900"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="mt-1 block w-full py-2 border-b-2 border-secondary-700 text-secondary-900 bg-primary-100 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-secondary-900"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mt-1 block w-full py-2 border-b-2 border-secondary-700 text-secondary-900 bg-primary-100 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="projectType"
                className="block text-sm font-medium text-secondary-900"
              >
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-1 block w-full py-2 border-b-2 border-secondary-700 text-secondary-900 bg-primary-100 focus:outline-none"
              >
                <option value="">Select Project Type</option>
                <option value="Kitchen Design & Storage">
                  Kitchen Design & Storage
                </option>
                <option value="Custom & Commercial Cabinets">
                  Custom & Commercial Cabinets
                </option>
                <option value="Closets">Closet</option>
                <option value="Bathroom Storage">Bathroom Storage</option>
                <option value="Laundry Storage">Laundry Storage</option>
                <option value="Built-In Furniture">Built-In Furniture</option>
                <option value="Wet Bars">Wet bars</option>
                <option value="Home Organization">Home Organization</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-secondary-800"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                className="mt-1 block w-full py-2 border-b-2 border-secondary-700 text-secondary-900 bg-primary-100 focus:outline-none"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              text="Request a Consultation"
              className="hover:bg-secondary-600 hover:text-secondary-50"
            />
          </form>
        </div>
        <p className="text-center text-secondary-900 text-sm">
          Serving Calgary and surrounding areas with dedication and
          craftsmanship.
        </p>
      </div>
    </section>
  );
}
