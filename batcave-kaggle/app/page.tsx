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
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: '15vh',
      textAlign: 'center',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('/gotham-bg.jpeg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      
      {/* --- METALİK LOGO --- */}
      <img 
        src="/batman-tech-logo.jpeg" 
        alt="WayneTech AI Logo" 
        style={{ 
          width: 'clamp(200px, 50vw, 400px)', 
          height: 'auto', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 0 20px rgba(250, 205, 5, 0.5))'
        }} 
      />

      {/* --- GİRİŞ BUTONU --- */}
      <Link href="/projects" style={{ textDecoration: 'none' }}>
        <button style={{
          backgroundColor: '#facd05',
          color: '#000',
          padding: '15px 40px',
          borderRadius: '5px',
          fontSize: '1rem',
          fontWeight: '950',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 0 25px rgba(250, 205, 5, 0.6)',
          transition: 'all 0.3s ease',
        }}>
          Enter the Batcave
        </button>
      </Link>

    </div>
  );
}