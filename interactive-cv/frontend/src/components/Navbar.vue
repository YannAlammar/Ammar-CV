<script setup>
import { ref, onMounted } from 'vue';

// State untuk menu mobile
const isMenuOpen = ref(false);

// State untuk melacak seksi mana yang sedang aktif
const activeSection = ref('profil');

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Logika untuk mendeteksi seksi aktif saat scroll
onMounted(() => {
  const sections = document.querySelectorAll('section[id]');

  const observerOptions = {
    root: null, // relatif terhadap viewport
    rootMargin: '0px',
    threshold: 0.5 // 50% dari seksi harus terlihat
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
</script>

<template>
  <header class="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-all duration-300">
    <nav class="container mx-auto px-6 py-5 flex justify-between items-center">

      <div class="text-2xl font-bold text-gray-800">
        <a href="#">Abyan Hisyam Al'ammar</a>
      </div>

      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-800 focus:outline-none">
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <ul
        :class="isMenuOpen ? 'flex' : 'hidden'"
        class="flex-col md:flex-row md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none space-y-4 md:space-y-0 p-6 md:p-0 md:space-x-8 items-center"
      >
        <li><a href="#profil" class="nav-link" :class="{ 'active-link': activeSection === 'profil' }">Profil</a></li>
        <li><a href="#pendidikan" class="nav-link" :class="{ 'active-link': activeSection === 'pendidikan' }">Pendidikan</a></li>
        <li><a href="#skill" class="nav-link" :class="{ 'active-link': activeSection === 'skill' }">Skill</a></li>
        <li><a href="#proyek" class="nav-link" :class="{ 'active-link': activeSection === 'proyek' }">Proyek</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
/* Styling untuk link navigasi */
.nav-link {
  @apply relative text-gray-600 font-medium transition-colors duration-300;
}

.nav-link:hover {
  @apply text-blue-600;
}

/* Garis bawah untuk animasi hover */
.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #3B82F6; /* blue-500 */
  transform-origin: center;
  transition: transform 0.3s ease-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* Styling untuk link yang sedang aktif */
.active-link {
  @apply text-blue-600 font-semibold;
}

/* Memberi garis bawah permanen untuk link aktif */
.active-link::after {
  transform: scaleX(1);
  background-color: #3B82F6; /* blue-500 */
}
</style>
