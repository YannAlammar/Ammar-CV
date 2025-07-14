<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

// Impor aset gambar secara lokal
import pengaduan from '@/assets/pengaduan.png';
import rental from '@/assets/rental.png';

// Buat pemetaan dari nama string ke aset gambar yang diimpor
// Ini berguna untuk menampilkan gambar secara dinamis berdasarkan data dari API
const imageMap = {
  pengaduan,
  rental
};

// Definisikan URL API yang dinamis untuk lingkungan produksi dan pengembangan
const API_URL = import.meta.env.PROD ? '/api/projects' : 'http://localhost:3000/api/projects';

// Variabel reaktif untuk menyimpan daftar proyek
const projects = ref([]);

// Hook onMounted berjalan setelah komponen terpasang di DOM
onMounted(async () => {
  try {
    // Mengambil data proyek dari API menggunakan URL dinamis
    const response = await axios.get(API_URL);
    // Menyimpan data yang didapat ke variabel reaktif
    projects.value = response.data;
  } catch (error) {
    // Menampilkan pesan error yang lebih deskriptif jika gagal
    console.error('Gagal mengambil data proyek:', error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
        >
          <img
            :src="imageMap[project.image]"
            alt="Gambar Proyek"
            class="w-full h-56 object-cover"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
              >
                {{ t }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 font-semibold hover:underline"
            >
              Lihat Detail →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
