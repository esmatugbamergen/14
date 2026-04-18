"use client";

import React from 'react';
import Link from 'next/link';

export default function WayneTechLandingPage() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: 'Inter, system-ui, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
      // Arka planda Gotham şehri görseli (varsa)
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/gotham-bg.jpeg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      
      {/* --- METALİK LOGO (.jpeg olarak güncellendi) --- */}
      <img 
        src="/batman-tech-logo.jpeg" 
        alt="WayneTech AI Logo" 
        style={{ 
          width: 'clamp(250px, 60vw, 500px)', 
          height: 'auto', 
          marginBottom: '50px', 
          filter: 'drop-shadow(0 0 20px rgba(250, 205, 5, 0.4))'
        }} 
      />

      {/* --- GİRİŞ BUTONU --- */}
      <Link href="/projects" style={{ textDecoration: 'none' }}>
        <button style={{
          backgroundColor: '#facd05',
          color: '#000',
          padding: '18px 50px',
          borderRadius: '5px',
          fontSize: '1.1rem',
          fontWeight: '950',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 0 30px rgba(250, 205, 5, 0.5)',
          transition: 'all 0.3s ease',
        }}>
          Enter the Batcave
        </button>
      </Link>

    </div>
  );
}