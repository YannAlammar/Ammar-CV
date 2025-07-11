<script setup>
import { onMounted } from 'vue';
import Typed from 'typed.js';
import fotoProfil from '@/assets/pp.jpg';
// import cvFile from '@/assets/CV-AbyanHisyam.pdf'; // Pastikan Anda menaruh file CV di folder assets
</script>

<template>
  <section id="profil" class="bg-gray-50 overflow-hidden">
    <div class="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">

      <div class="md:w-3/5 lg:w-1/2 mb-12 md:mb-0 text-center md:text-left">
        <h2 class="text-xl md:text-2xl text-gray-600 font-medium mb-2 animate-fade-in-down" style="animation-delay: 200ms;">
          Halo, Saya Abyan Hisyam Al'ammar
        </h2>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 animate-fade-in-down" style="animation-delay: 400ms;">
          Saya seorang <br class="md:hidden">
          <span class="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent" id="typed-text"></span>
        </h1>
        <p class="text-lg text-gray-500 mb-10 max-w-xl mx-auto md:mx-0 animate-fade-in-down" style="animation-delay: 600ms;">
          Mahasiswa S1 Informatika dengan ketertarikan tinggi pada pengembangan web dan machine learning, siap untuk belajar dan berkontribusi dalam proyek-proyek inovatif.
        </p>

        <div class="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style="animation-delay: 800ms;">
          <a
            :href="cvFile"
            download="CV-AbyanHisyamAl'ammar.pdf"
            class="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 inline-block"
          >
            Download CV
          </a>
          <a
            href="#proyek"
            class="bg-transparent text-blue-600 font-bold py-3 px-8 rounded-lg border-2 border-blue-600 transform hover:-translate-y-1 hover:bg-blue-600 hover:text-white transition-all duration-300 inline-block"
          >
            Lihat Proyek Saya
          </a>
        </div>
      </div>

      <div class="md:w-2/5 lg:w-1/2 flex justify-center animate-fade-in-up">
        <div class="relative w-80 h-80 lg:w-96 lg:h-96">
          <div class="absolute inset-0 border-8 border-blue-300 rounded-full animate-pulse-slow"></div>
          <div class="absolute inset-2 border-4 border-white rounded-full"></div>
          <img
            :src="fotoProfil"
            alt="Foto Profil Abyan Hisyam Al'ammar"
            class="relative w-full h-full rounded-full object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<style>
/* Animasi kustom jika diperlukan */
@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.4;
  }
}
.animate-pulse-slow {
  animation: pulse-slow 5s infinite ease-in-out;
}
</style>
