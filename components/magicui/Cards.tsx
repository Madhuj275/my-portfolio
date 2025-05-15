"use client"
import { GlareCard } from "../ui/glare-card";

export function GlareCardDemo() {

  return (
    <div className="h-full md:h-full w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 gap-6">
      <GlareCard className="flex flex-col items-start justify-center">
         <div className="flex flex-col items-start text-start gap-8">
          <div className=" p-6 rounded-lg text-start max-w-sm ">
            <h3 className="text-lg font-bold text-gray-400">For Basic Use</h3>
            <h2 className="text-4xl font-bold mt-2">Basic Plan</h2>
            <p className="text-xl font-semibold text-blue-500 mt-1">$10 <span className="text-lg">/project</span></p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>React + Tailwind Landing Page</li>
              <li>Basic Responsive Design</li>
              <li>Lightweight Animations</li>
              <li>Only 1 Pages</li>
              <li>2 Days Delivery</li>
            </ul>
          </div>
          </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-center bg-slate-950">
      <div className="flex flex-col items-start text-start gap-8">
          <div className=" p-6 rounded-lg text-start max-w-sm ">
            <h3 className="text-lg font-bold text-gray-400">Most Popular</h3>
            <h2 className="text-4xl font-bold mt-2">Standard Plan</h2>
            <p className="text-xl font-semibold text-blue-500 mt-1">$50 <span className="text-lg">/project</span></p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Frontend + Backend Web Application</li>
              <li>React + Tailwind + Framer Motion</li>
              <li>Advanced Animations</li>
              <li>upto 5 Page</li>
              <li>6 Days Delivery</li>
            </ul>
          </div>
          </div>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-center bg-slate-950">
      <div className="flex flex-col items-start text-start gap-8">
          <div className=" p-6 rounded-lg text-start max-w-sm ">
            <h3 className="text-lg font-bold text-gray-400">For Professionals</h3>
            <h2 className="text-4xl font-bold mt-2">Premium Plan</h2>
            <p className="text-xl font-semibold text-blue-500 mt-1">Custom<span className="text-lg"></span></p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Advanced Projects (including Deployment)</li>
              <li>Web3 Projects</li>
              <li>Bug Solving</li>
              <li>Dedicated Zoom Meet</li>
              <li>Unlimited Revision</li>
            </ul>
          </div>
          </div>
      </GlareCard>
     
    </div>
  );
}
