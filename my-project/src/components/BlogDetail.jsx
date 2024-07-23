import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const BlogDetail = () => {
  
const blogData = [
  {
    id: '1',
    title: 'Maxy Academy mengadakan roadshow di Universitas Slamet Riyadi (UNISRI)',
    content: 'Pada tanggal 11 - 12 Juni, Maxy Academy mengadakan roadshow di Universitas Slamet Riyadi (UNISRI), Solo. Acara ini dihadiri oleh berbagai kalangan mahasiswa, mulai dari lulusan SMA/K, diploma, sarjana, hingga magister dari semua jurusan, dan berlangsung di Auditorium UNISRI. Maxy Academy berpartisipasi untuk mempersiapkan skill dan potensi mahasiswa untuk unggul di bidang merekaKolaborasi Maxy Academy dengan UNISRI dirancang untuk membekali mahasiswa di bidang UI/UX, digital marketing, frontend, serta backend. Antusiasme para mahasiswa terhadap presentasi ini menunjukkan betapa pentingnya pengetahuan dan keterampilan di bidang teknologi dalam menghadapi tantangan di era digital saat ini. Mari kita bangun skill, dan berinovasi untuk menciptakan masa depan karir generasi muda Indonesia. Bersama Maxy Academy dan UNISRI, kita wujudkan potensi yang terbaik bagi bangsa!.',
    image: 'https://media.licdn.com/dms/image/D5622AQG3JgobUAllRw/feedshare-shrink_800/0/1721642240479?e=1724284800&v=beta&t=4u29Xa3L-HTn2Ix-35EICWZg0fcQv8LVZWgLf1eRPbg',
    author: 'Maxy Academy',
    date: '2024-07-23',
    tags: ['frontend', 'bootcamp', 'development']
  },
  {
    id: '2',
    title: 'Maxy Academy telah menyelenggarakan program 1 Day bootcamp di Universitas Ma Chung, Malang.',
    content: 'Maxy Academy telah menyelenggarakan program 1 Day bootcamp di Universitas Ma Chung, Malang. Acara ini dihadiri oleh puluhan mahasiswa dari berbagai prodi yang sangat antusias untuk mengasah keterampilan di bidang IT dan bisnis. Acara ini berfokus dalam mengembangkan kemampuan mahasiswa dalam bidang kewirausahaan melalui program khusus yaitu Sociopreneurship. Dalam program ini, para peserta mendapat kesempatan untuk mendalami konsep-konsep penting seperti Business Model Canvas (BMC) serta menganalisis studi kasus dari bidang bisnis UMKM. Kerjasama antara Maxy Academy dan TBN Indonesia dalam menyelenggarakan acara ini memiliki tujuan untuk membekali mahasiswa dengan pengetahuan dan keterampilan praktis yang relevan dengan dunia bisnis dan teknologi. Melalui pelatihan intensif ini, kami berharap dapat menciptakan generasi wirausaha yang siap menghadapi tantangan di era digital dan berkontribusi positif dalam perkembangan ekonomi. Kami mengucapkan terima kasih kepada semua pihak yang telah mendukung pelaksanaan program ini dan berharap dapat terus menginspirasi lebih banyak talenta masa depan untuk berinovasi dan berkarya di bidang kewirausahaan. Tagar#Sociopreneurship Tagar#BusinessSkills Tagar#Entrepreneurship Tagar#TechEducation Tagar#DigitalTransformation Tagar#StudentSuccess Tagar#MaxyAcademy Tagar#TBNIndonesia Tagar#CareerDevelopment Tagar#FutureLeaders',
    image: 'https://media.licdn.com/dms/image/D5622AQGhgX_6Lw00Vg/feedshare-shrink_800/0/1721379172292?e=1724284800&v=beta&t=IZrnNBjP-elASGjd917IgrUC_fZNXIm4ixj6zZaONhQ',
    author: 'Maxy Academy',
    date: '2024-07-20',
    tags: ['hackathon', 'competition', 'web development']
  },
  {
    id: '3',
    title: 'Maxy Talks: Berbicara dengan Para Ahli',
    content: 'Maxy Academy dengan bangga mengumumkan keberhasilan penyelengaraan seminar terbaru yang dihadiri oleh puluhan Mahasiswa yang terpilih dari prodi di Universitas Negeri Surabaya (UNESA) . Banyak mahasiswa datang dari seluruh Jawa Timur untuk menghadiri seminar yang diadakan di gedung Universitas Negeri Surabaya (UNESA). Dalam seminar ini, Isaac Nugraha Munandar, selaku CEO dari Maxy Academy, menyampaikan keresahan yang dIrasakan oleh mahasiswa terkait kesenjangan antara program studi dan kebutuhan lowongan kerja. Maxy Academy bertujuan untuk menjembatani kesenjangan ini dan mempersiapkan mahasiswa untuk sukses dalam masa magang dan karier mereka. Sebagai mitra resmi Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, Maxy Academy berkomitmen untuk membekali mahasiswa dengan keterampilan esensial untuk dunia kerja melalui program Kampus Merdeka Magang Studi Independen Bersertifikat (MSIB). Kami menawarkan berbagai program upskilling dalam bidang UI/UX, digital marketing, frontend, dan backend. Maxy Academy juga bekerja sama dengan TBN Indonesia untuk mendukung mahasiswa yang memiliki minat dalam kewirausahaan sosial. Selain itu kami juga memberi kesempatan bagi para mahasiswa unggulan yang mengikuti program Sociopreneur untuk mendapatkan pendanaan bagi usaha bisnis mereka. Dampak dari salah satu program kami yaitu Digital Career Bootcamp, sudah terlihat melalui kisah sukses seperti Syafa Nur Safitri. Syafa adalah alumni desain grafis UNESA, yang mendapatkan pekerjaan melalui program Digital Career Bootcamp kami. Syafa merasakan dampak dari Maxy dalam membuatnya mengerti mengenai pentingnya teknologi untuk membuka peluang karier baru dalam bidang Digital Marketing. Selain itu, kami juga sangat bangga mendapat kehormatan untuk menerima piagam dari UNESA sebagai bukti kerja sama kami dalam mendukung mahasiswa menuju masa depan cemerlang, sejalan dengan visi Indonesia Emas 2045. Tagar#MaxyAcademy Tagar#SocialEntrepreneurship Tagar#CareerDevelopment Tagar#UNESA Tagar#IndonesiaEmas2045 Tagar#DigitalCareer',
    image: 'https://media.licdn.com/dms/image/D5622AQEdmfODDx4FQg/feedshare-shrink_800/0/1721364026473?e=1724284800&v=beta&t=LcRK6BaM983NPhQoR3zvhFSDhSDZlDHFxDm52Eg5AV0',
    author: 'Maxy Academy',
    date: '2024-07-19',
    tags: ['talks', 'industry', 'insights']
  },
  {
    id: '4',
    title: 'Maxy Academy bekerjasama dengan Sekolah Tinggi Informatika dan Komputer (STIKI) Malang dalam mengembangkan EduTech untuk talenta digital.',
    content: 'Maxy Academy bekerjasama dengan Sekolah Tinggi Informatika dan Komputer (STIKI) Malang dalam mengembangkan EduTech untuk talenta digital. Melalui program Magang dan Studi Independen Bersertifikat (MSIB) dan MBKM Mandiri, kami berkomitmen untuk mempersiapkan mahasiswa dengan skill yang relevan di industri digital. Dalam program ini, Mahasiswa akan mendapatkan pelatihan intensif dalam berbagai bidang seperti digital marketing, frontend, backend, UI/UX, serta kesempatan magang di top company Indonesia. Kerjasama ini merupakan langkah strategis dalam upaya dan visi kami yaitu menjembatani antara pendidikan dan kebutuhan industri. Kami mengajak seluruh universitas di Indonesia dalam upaya pengembangan pendidikan dan teknologi melalui program unggulan di MAXY Academy! Mari bergabung bersama kami untuk menciptakan generasi inovatif yang siap menghadapi tantangan dan peluang karir di era digital. Tagar#MaxyAcademy Tagar#PendidikanDigital Tagar#KerjasamaPendidikan Tagar#STIKIMalang Tagar#MSIB Tagar#MBKMMandiri Tagar#IndustriDigital Tagar#Magang Tagar#PengembanganTalenta Tagar#EdukasiTeknologi Tagar#KolaborasiPendidikan',
    image: 'https://media.licdn.com/dms/image/D5622AQEwouhWE0eIcA/feedshare-shrink_800/0/1721380846464?e=1724284800&v=beta&t=zXwExFJjJcVABRA01uRvB-fxfMGnAECdeAO0SExd57g',
    author: 'Maxy Academy',
    date: '2024-07-19',
    tags: ['talks', 'industry', 'insights']
  }
];
  const { id } = useParams();
  const blog = blogData.find(blog => blog.id === id);

  if (!blog) {
    return <div>Blog tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <nav className="text-gray-600 mb-6">
        <a href="/" className="hover:underline">Home</a> / <span>Blog</span> / <span>{blog.title}</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center mb-6">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-600 mr-2" />
        <span className="text-gray-600">{new Date(blog.date).toLocaleDateString()}</span>
        <FontAwesomeIcon icon={faUser} className="text-gray-600 ml-4 mr-2" />
        <span className="text-gray-600">{blog.author}</span>
      </div>
      <img className="w-full h-64 md:h-96 object-cover mb-6 rounded-lg shadow-md" src={blog.image} alt={blog.title} />
      <div className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
        {blog.content}
      </div>
      <div className="flex space-x-4 mb-6">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap space-x-2">
          {blog.tags.map(tag => (
            <span key={tag} className="bg-gray-200 text-gray-700 rounded-full px-4 py-1 text-sm">{tag}</span>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Related Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.filter(b => b.id !== blog.id).map(relatedBlog => (
            <div key={relatedBlog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover" src={relatedBlog.image} alt={relatedBlog.title} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{relatedBlog.title}</h2>
                <p className="text-gray-700 text-base mb-4 truncate">{relatedBlog.content}</p>
                <a href={`/blog/${relatedBlog.id}`} className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors duration-300">
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">About the Author</h3>
        <div className="flex items-center">
          <img src="/assets/author.jpg" alt={blog.author} className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h4 className="text-lg font-bold">{blog.author}</h4>
            <p className="text-gray-600">Penulis</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <div className="bg-white rounded-lg shadow-md p-4">
          <input
            type="text"
            placeholder="Tambahkan komentar..."
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
