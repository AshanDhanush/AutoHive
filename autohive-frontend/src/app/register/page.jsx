// src/app/register/page.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [role, setRole] = useState('CUSTOMER');
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors) setErrors("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");

    if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
    try{
      const registerRequest = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: role,
        contactNo: formData.contactNo,
        address: formData.address
      };
      const response = await axios.post(
        "http://localhost:8081/api/auth/register", {
          ...registerRequest
        }
      );
      console.log("Registration successful:", response.data);
      router.push("/login");
      
      
    } catch (err) {
      if (err.response && err.response.data) {
        setErrors(err.response.data.message || "Registration failed. Please try again.");
      }
  }finally{
        setLoading(false);
      }
  };

  return (
    <div className="min-h-screen flex bg-slate-50 font-sans">
      
      {/* Left Side: Branding & Dynamic Preview */}
      <div className="hidden lg:flex w-1/2 bg-brand-deep text-white flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-lg text-center relative z-10">
          <Link href="/">
            <div className="flex-shrink-0 flex justify-center items-center mb-6">
              <Image src="/AutoHive-for-dark.png" alt="AutoHive Logo" width={300} height={50} priority />
            </div>
          </Link>
          
          <div className="mt-8">
            <p className="text-xl text-slate-300">
              Join the AutoHive ecosystem as a <span className="text-brand-teal font-bold">{role.toLowerCase()}</span>.
            </p>
          </div>

          <div className="mt-12 bg-white/5 rounded-2xl p-6 border border-white/10 text-left backdrop-blur-sm">
             <p className="text-sm text-slate-400 mb-2 uppercase font-bold tracking-widest">Account Type</p>
             <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-brand-teal animate-pulse"></div>
                <span className="text-lg font-medium">{role} ACCESS ENABLED</span>
             </div>
          </div>
        </div>
      </div>

      {/* Right Side: Unified Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-slate-100">
          
          <h2 className="text-3xl font-bold text-brand-deep text-center mb-2 tracking-tight">Create Account</h2>
          <p className="text-center text-slate-500 text-sm mb-8">One account for all your automotive needs.</p>

          <form className="space-y-4">
            
            {/* Role Selection Bar */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">I am a...</label>
              <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
                <button 
                  type="button"
                  onClick={() => setRole('CUSTOMER')} 
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${role === 'CUSTOMER' ? 'bg-white shadow-sm text-brand-deep' : 'text-slate-500'}`}
                >
                  Customer
                </button>
                <button 
                  type="button"
                  onClick={() => setRole('SELLER')} 
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${role === 'SELLER' ? 'bg-white shadow-sm text-brand-deep' : 'text-slate-500'}`}
                >
                  Seller
                </button>
              </div>
            </div>

            {/* Name Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  type="text" name="fullName" onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 outline-none text-sm transition-all" 
                  placeholder="John" 
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" name="email" onChange={handleChange}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 outline-none text-sm transition-all" 
                placeholder="john@autohive.com" 
              />
            </div>

            {/* Contact & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Contact No</label>
                <input 
                  type="tel" name="contactNo" onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 outline-none text-sm transition-all" 
                  placeholder="+94 7X XXX XXXX" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">City/Address</label>
                <input 
                  type="text" name="address" onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 outline-none text-sm transition-all" 
                  placeholder="Colombo, SL" 
                />
              </div>
            </div>

            {/* Password Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input 
                  type="password" name="password" onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 outline-none text-sm transition-all" 
                  placeholder="••••••••" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirm</label>
                <input 
                  type="password" name="confirmPassword" onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-teal/50 outline-none text-sm transition-all" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            {errors && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-md mb-4">
              <p className="text-xs text-red-600 font-semibold">{errors}</p>
            </div>
          )}

            <button type="button" className="w-full bg-brand-teal hover:bg-[#00b388] text-brand-deep font-bold py-3 rounded-xl transition-all mt-6 shadow-md active:scale-[0.98]" onClick={handleSubmit} disabled={loading}>
              Register as {role.charAt(0) + role.slice(1).toLowerCase()}
            </button>
            
          </form>

          <p className="text-center text-sm text-slate-600 mt-6">
            Already have an account? <Link href="/login" className="font-bold text-brand-deep hover:text-brand-teal transition-colors">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}