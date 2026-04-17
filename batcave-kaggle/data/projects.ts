"use client";

import React from 'react';

// Veriyi doğrudan buraya tanımlıyoruz ki "import" hatası riski kalmasın
const myProjects = [
  {
    title: "Food Delivery Time Prediction",
    type: "Regression",
    model: "XGBoost",
    metric: "R2 Score: 0.82",
    kaggle: "https://www.kaggle.com/code/esmatugbamergen/food-delivery-time-prediction-regresyon",
    spaces: "#"
  },
  {
    title: "Customer Churn Analysis",
    type: "Classification",
    model: "Random Forest",
    metric: "Accuracy: 0.91",
    kaggle: "#",
    spaces: "#"
  },
  {
    title: "Stock Price Forecasting",
    type: "Time Series",
    model: "LSTM / Prophet",
    metric: "MAE: 12.4",
    kaggle: "#",
    spaces: "#"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Üst Başlık Alanı */}
        <div className="flex justify-between items-center mb-12 border-b border-yellow-500/30 pb-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-yellow-400 tracking-tighter uppercase italic">
              🦇 BATCOMPUTER PROJECTS
            </h1>
            <p className="text-gray-500 text-sm mt-2 tracking-widest">DATABASE STATUS: ENCRYPTED / ONLINE</p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-yellow-500 text-xs font-mono">FILE_COUNT: {myProjects.length}</span>
          </div>
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((p, i) => (
            <div 
              key={i} 
              className="group relative bg-zinc-900/50 border border-yellow-500/20 p-6 rounded-2xl hover:border-yellow-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] overflow-hidden"
            >
              {/* Kart Arkasındaki Hafif Işık Efekti */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl group-hover:bg-yellow-400/10 transition-all"></div>

              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] bg-yellow-400 text-black px-2 py-1 rounded-md font-bold uppercase tracking-wider">
                  {p.type}
                </span>
                <span className="text-yellow-500/40 text-xs font-mono">#00{i + 1}</span>
              </div>

              <h2 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-4 leading-tight">
                {p.title}
              </h2>
              
              <div className="space-y-3 text-sm border-t border-white/5 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">ALGORITHM:</span>
                  <span className="text-gray-300 font-mono">{p.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">PERFORMANCE:</span>
                  <span className="text-green-400 font-mono italic">{p.metric}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <a 
                  href={p.kaggle} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-zinc-800 hover:bg-blue-600 text-white py-2.5 rounded-xl text-xs font-bold transition-all border border-white/5"
                >
                  KAGGLE
                </a>
                <a 
                  href={p.spaces} 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex-1 text-center bg-zinc-800 hover:bg-green-600 text-white py-2.5 rounded-xl text-xs font-bold transition-all border border-white/5"
                >
                  SPACES
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Bilgi */}
        <div className="mt-20 text-center">
          <a href="/" className="text-yellow-400/50 hover:text-yellow-400 text-sm transition-colors uppercase tracking-widest border-b border-yellow-400/20 pb-1">
            ← Return to Main Console
          </a>
        </div>

      </div>
    </div>
  );
}