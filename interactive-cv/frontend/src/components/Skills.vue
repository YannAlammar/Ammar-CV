<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error("Gagal mengambil data keahlian:", error);
    // Data fallback untuk tampilan
    skills.value = [
        { name: 'React.js', iconUrl: 'URL_TO_YOUR_ICON', level: 'Mahir' },
        { name: 'CodeIgniter', iconUrl: 'URL_TO_YOUR_ICON', level: 'Mahir' },
        { name: 'Laravel', iconUrl: 'URL_TO_YOUR_ICON', level: 'Mahir' },
        { name: 'Tailwind CSS', iconUrl: 'URL_TO_YOUR_ICON', level: 'Menengah' },
        { name: 'Bootstrap CSS', iconUrl: 'URL_TO_YOUR_ICON', level: 'Menengah' },
        { name: 'MySQL', iconUrl: 'URL_TO_YOUR_ICON', level: 'Menengah' },
        { name: 'Git & GitHub', iconUrl: 'URL_TO_YOUR_ICON', level: 'Mahir' },
        { name: 'HTML5 & CSS3', iconUrl: 'URL_TO_YOUR_ICON', level: 'Mahir' }
    ];
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto">
       <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Keahlian & Teknologi</h2>

      <div class="relative w-full overflow-hidden group px-4 py-8">

        <div class="flex items-center animate-scroll group-hover:pause-animation">
          <div v-for="n in 2" :key="n" class="flex-shrink-0 flex justify-around min-w-full">

            <div v-for="skill in skills" :key="skill.name + n" class="skill-card bg-white p-6 rounded-lg shadow-lg text-center mx-4 w-48">
              <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
              <div class="flex justify-center items-center h-16 mb-4">
                <img v-if="skill.iconUrl" :src="skill.iconUrl" :alt="skill.name" class="max-w-[40px] h-auto object-contain" />
              </div>
              <p class="text-gray-500 mt-2">{{ skill.level }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Mendefinisikan animasi scroll dari kanan ke kiri */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/* Menerapkan animasi ke kontainer */
.animate-scroll {
  animation: scroll 40s linear infinite;
}

/* Menjeda animasi saat kursor berada di atas area marquee */
.group:hover .animate-scroll {
  animation-play-state: paused;
}

/* Styling untuk kartu keahlian */
.skill-card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Efek yang terjadi saat kursor diarahkan ke kartu */
.skill-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
