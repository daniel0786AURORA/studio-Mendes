"use client";
import { useEffect, useState } from "react";
export function LivingRoots(){
 const [y,setY]=useState(0);
 useEffect(()=>{const f=()=>setY(window.scrollY);window.addEventListener("scroll",f,{passive:true});f();return()=>window.removeEventListener("scroll",f)},[]);
 const grow=Math.min(1,Math.max(0,(y-350)/1700));
 return <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
  <svg className="absolute left-[-12%] top-[680px] w-[85vw] max-w-[1200px] opacity-[.10]" viewBox="0 0 1000 1200" fill="none">
   {["M180 0 C170 180 320 230 260 430 C210 590 80 610 120 850 C150 1010 310 1020 300 1200","M190 30 C310 180 440 170 460 350 C480 510 350 590 410 770 C470 940 660 930 690 1150","M220 90 C90 250 100 390 240 500 C390 620 600 550 650 720 C700 900 570 1030 610 1200","M250 120 C420 250 620 230 690 410 C750 570 650 700 780 840 C870 940 910 1060 900 1200"].map((d,i)=><path key={i} d={d} stroke="currentColor" strokeWidth={i===0?3:1.5} strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1-grow} style={{transition:"stroke-dashoffset .12s linear"}}/>)}
  </svg>
  <div className="absolute right-[9%] top-[48%] text-2xl opacity-0" style={{opacity:grow>.78?.16:0,transform:`translateY(${grow>.78?Math.min(110,(grow-.78)*500):0}px) rotate(${grow*90}deg)`,transition:"opacity .8s ease"}}>●</div>
 </div>
}