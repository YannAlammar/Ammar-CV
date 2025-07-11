<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative">
        <!-- Garis Tengah -->
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

        <!-- Timeline Items -->
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-12 flex flex-col md:flex-row items-center"
        >
          <!-- Jika index genap (kiri) -->
          <template v-if="index % 2 === 0">
            <!-- Kiri -->
            <div class="flex w-full md:w-1/2 justify-end pr-6 text-right animate-fade-in-left">
              <div class="bg-white shadow-lg p-6 rounded-lg w-full md:w-4/5">
                <p class="text-sm font-medium text-blue-600 mb-1">{{ edu.period }}</p>
                <h3 class="text-xl font-bold text-gray-800">{{ edu.institution }}</h3>
                <p class="text-gray-600">{{ edu.major || '-' }}</p>
              </div>
            </div>
            <!-- Dot -->
            <div class="w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10"></div>
            <!-- Spacer -->
            <div class="w-full md:w-1/2"></div>
          </template>

          <!-- Jika index ganjil (kanan) -->
          <template v-else>
            <!-- Spacer -->
            <div class="w-full md:w-1/2"></div>
            <!-- Dot -->
            <div class="w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10"></div>
            <!-- Kanan -->
            <div class="flex w-full md:w-1/2 justify-start pl-6 text-left animate-fade-in-right">
              <div class="bg-white shadow-lg p-6 rounded-lg w-full md:w-4/5">
                <p class="text-sm font-medium text-blue-600 mb-1">{{ edu.period }}</p>
                <h3 class="text-xl font-bold text-gray-800">{{ edu.institution }}</h3>
                <p class="text-gray-600">{{ edu.major || '-' }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.6s ease-out forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 0.6s ease-out forwards;
}
</style>
