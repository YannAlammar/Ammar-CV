const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom', major: 'S1 - Teknik Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Wonosari', major: 'MIPA' },
    { id: 3, period: '2017-2020', institution: 'SMP Negri 1 Karangmojo' },
    { id: 4, period: '2011-2017', institution: 'SDN Karangmojo 2'}
  ];
  
const skills = [
  { name: 'React.js', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
  { name: 'CodeIgniter', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg'},
  { name: 'Laravel', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'},
  { name: 'Tailwind CSS', level: 'Menengah', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'},
  { name: 'Bootstrap CSS', level: 'Menengah', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'},
  { name: 'MySql', level: 'Menengah', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
  { name: 'Git & GitHub', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
  { name: 'HTML5 & CSS3', level: 'Mahir', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
  { name: 'Python', level: 'Mahir', iconUrl: 'https://www.vectorlogo.zone/logos/python/python-icon.svg'}

];
  const projects = [
    {
      title: 'Website RentalIqra',
      image: 'rental',
      description: 'Website Penyewaan Mobil Yang Berada diPalu.',
      tech: ['React.js', 'Laravel.js', 'MySql'],
      link: 'https://github.com/LavinaCaco/rentaliqra'
    },
    {
      title: 'Website Pengaduan Masyarakat',
      image: 'pengaduan',
      description: 'Website Yang Digunakan Untuk Pengaduan Masyarakat.',
      tech: ['CodeIgniter','Bootstrap', 'MySql'],
      link: 'https://github.com/LavinaCaco/Lavina-Pengaduan'
    }
  ];
  
  module.exports = { educationHistory, skills, projects };