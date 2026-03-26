// src/app/register/page.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Register() {
  const [isSeller, setIsSeller] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-50 font-sans">
      
      {/* Left Side: Branding & Value Prop */}
      <div className="hidden lg:flex w-1/2 bg-brand-deep text-white flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-lg text-center relative z-10">
          <Link href="/">
            <div className="flex-shrink-0 flex justify-center items-center mb-6">
              <Image
                src="/AutoHive-for-dark.png"
                alt="AutoHive Logo"
                width={300}
                height={50}
                priority
              />
            </div>
          </Link>
          <p className="text-xl text-slate-300 mb-8">
            Join the ultimate vehicle spare parts marketplace.
          </p>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-left backdrop-blur-sm">
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-center">
                <span className="text-brand-teal mr-3 font-bold">✓</span> Find genuine parts instantly
              </li>
              <li className="flex items-center">
                <span className="text-brand-teal mr-3 font-bold">✓</span> Compare quotes from top vendors
              </li>
              <li className="flex items-center">
                <span className="text-brand-teal mr-3 font-bold">✓</span> Manage your fleet seamlessly
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side: Interactive Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-slate-100">
          
          <h2 className="text-3xl font-bold text-brand-deep text-center mb-6 tracking-tight">
            {isSeller ? 'Register your Business' : 'Create an Account'}
          </h2>

          {/* User Type Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
            <button
              onClick={() => setIsSeller(false)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                !isSeller ? 'bg-white shadow-sm text-brand-deep' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setIsSeller(true)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                isSeller ? 'bg-white shadow-sm text-brand-deep' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Seller 
            </button>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {!isSeller ? (
              /* --- CUSTOMER --- */
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all text-sm" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all text-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all text-sm" placeholder="+94 7X XXX XXXX" />
                  </div>
                </div>
              </>
            ) : (
              /* --- SELLER (Hybrid Flow: No KYC at this step) --- */
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all text-sm" placeholder="Auto Parts Co." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Owner / Contact Person</label>
                  <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all text-sm" placeholder="Jane Smith" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Business Email</label>
                    <input type="email" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all text-sm" placeholder="contact@shop.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Business Phone</label>
                    <input type="tel" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all text-sm" placeholder="+94 7X XXX XXXX" />
                  </div>
                </div>
                
                {/* Note for Sellers */}
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-[11px] text-blue-700 leading-tight">
                    <strong>Note:</strong> You can set up your store now. Business verification (KYC) will be required later to list items for sale.
                  </p>
                </div>
              </>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input type="password" name="password" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all text-sm" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirm</label>
                <input type="password" name="confirmPassword" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all text-sm" placeholder="••••••••" />
              </div>
            </div>

            <button className="w-full bg-brand-teal hover:bg-[#00b388] text-brand-deep font-bold py-3 rounded-xl transition-all mt-6 shadow-md hover:shadow-lg active:scale-[0.98]">
              {isSeller ? 'Create Seller Account' : 'Create Account'}
            </button>
            
          </form>

          <p className="text-center text-sm text-slate-600 mt-6">
            Already have an account? <Link href="/login" className="font-bold text-brand-deep hover:text-brand-teal transition-colors">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}