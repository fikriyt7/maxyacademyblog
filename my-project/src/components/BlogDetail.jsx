import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const BlogDetail = () => {
  
const blogData = [
  {
    id: '1',
    title: 'Penanganan stunting',
    content: 'PENANGGULANGAN STUNTING MELALUI PENDEKATAN LINTAS SEKTORPenulis : Novita Frahesti Ade Wijaya (Bappeda)Postur tubuh pendek mungkin menurut sebagian orang masih dianggap biasa saja. Bahkan ada pula yang menganggapnya keturunan. Namun, masyarakat harus waspada terhadap kondisi tubuh yang pendek. Bisa jadi itu stunting dan dapat berdampak negatif bagi kesehatan. Stunting adalah kondisi gagal tumbuh pada anak balita akibat kekurangan gizi kronis sehingga anak terlalu pendek untuk usianya. Kekurangan gizi terjadi sejak bayi lahir dalam kandungan dan pada masa awal setelah anak lahir atau dalam 1000 hari pertama kehidupan (HPK).Menurut Global Nutrition Report tahun 2014 Indonesia termasuk di dalam 17 negara diantara 117 negara yang mempunyai masalah terhadap gizi salah satunya adalah stunting. Masalah gizi yang terus terjadi tentunya dapat menjadi faktor penghambat dalam pembangunan. Hubungan gizi dengan pembangunan bersifat timbal balik. Artinya bahwa gizi akan menentukan keberhasilan suatu bangsa, begitu pula sebaliknya kondisi suatu bangsa dapat mempengaruhi status gizi masyarakatnya.Gizi dalam kaitannya dengan pembangunan suatu bangsa berkaitan dengan sumber daya manusia. Setiap tahun Pusat dan Data Informasi (Pusdatin) Kementerian Kesehatan Republik Indonesia melaksanakan pemantauan status gizi (PSG), selain riset kesehatan dasar (Rikesdas) terakahir dirilis tahun 2013. Menurut hasil pemantauan status gizi menunjukkan persentase stunting anak balita umur 0-23 bulan di Indonesia tahun 2017 sebesar 6,9 persen sangat pendek dan 13,2 persen pendek.Bagaimana di Provinsi Bangka Belitung ?. Data pemantauan status gizi tahun 2017 menyebutkan terdapat 8,4 persen sangat pendek dan 13,5 persen pendek, terjadi peningkatan dari dua tahun sebelumnya. Jika kita bandingkan persentase stunting Provinsi Kepulauan Bangka Belitung berada di atas capaian nasional, sehingga dari data Pusdatin ini stunting merupakan persoalan besar di Provinsi Kepulauan Bangka Belitung. Bagi Pemerintah Daerah sendiri angka-angka bukan hanya peringatan keras, tetapi cambukan besar untuk segera dicarikan solusi yang lebih serius.Ketika melihat fenomena ini terbayangkan bahwa stunting tidak lahir dengan sendirinya, juga tidak muncul tanpa sebab. Menurut United Nations International Childrens Emergency Fund (UNICEF) dalam Logical Framework Of The Nutriotional Problems tahun 2013, menyatakan bahwa ada tiga penyebab stunting. Pertama, penyebab dasar seperti tingkat pendidikan, kemiskinan, dan disparitas sosial budaya. Kedua, penyebab tak langsung seperti ketahanan pangan keluarga, perawatan anak dan ibu hamil, serta fasilitas atau pelayanan kesehatan. Ketiga, penyebab langsung yaitu asupan zat gizi dan infeksi penyakit. Kemudian tanpa kita sadari bahwa sebenarnya pernikahan dini yang terjadi di masyarakat dapat memicu stunting.Mengapa bisa demikian ?. Pernikahan dini dapat berdampak buruk terhadap kesehatan ibu dan balita. Salah satu dampaknya adalah terganggunya organ reproduksi pada ibu dan apabila terjadi kehamilan akan berisiko. Selain itu anak yang lahir dari ibu yang menikah dini memiliki kesempatan hidup yang rendah dan lebih besar memiliki masalah gizi pada anaknya seperti stunting. Hal tersebut kemungkinan bisa terjadi karena ibu balita yang umurnya kurang dari 18 tahun biasanya memiliki keterbatasan pengetahuan pola asuh terhadap anaknya yang berdampak pada status gizi anaknya.Pernikahan dini menurut World Health Organization (WHO) adalah pernikahan sebelum usia 18 tahun, yang berlaku baik bagi anak laki-laki maupun perempuan, tetapi kenyatannya lebih umum terjadi pada anak perempuan. Berdasarkan data yang dirilis Badan Pusat Statistik (BPS), tergambar bahwa persentase perempuan berumur 20-24 tahun yang pernah kawin yang umur perkawinan pertamanya di bawah 18 Provinsi Kepulauan Bangka Belitung tahun 2017 sebesar 37,19 persen di atas nasional sebesar 25,71 persen serta  menempati peringkat ketiga dari 34 provinsi.Jelas sekali bahwa adanya pernikahan dini berkontribusi terhadap fenomena stunting di bumi serumpun sebalai. Stunting menjadi cerminan bahwa betapa buruk dan kurang optimalnya gizi yang seharusnya diberikan kepada anak. Untuk menangani stunting membutuhkan waktu yang relatif lama. Namun kita harus belajar dari negara-negara yang telah berhasil mengatasi stunting secara signifikan. Pertama, Nepal adalah negara yang berhasil menurunkan prevalensi balita stunting dari 57 persen menjadi 41 persen dalam waktu 10 tahun (2001-2011). Kedua, Rwanda juga berhasil menurunkan  prevalensi pada balita stunting dari 52 persen menjadi 44 persen dalam waktu 5 tahun (2005-2010). Penanggulangan stunting harus mengakamodir semua faktor penyebab (dasar, tak langsung, langsung), sehingga diperlukan kontribusi gizi yang harus dilakukan dengan serius. Kontribusi gizi ada dua yaitu intervensi gizi spesifik dan intervensi sensitif. Intervensi gizi spesifik adalah upaya-upaya untuk mencegah dan mengurangi gangguan secara langsung melalui program pembangunan sektor kesehatan.Kegiatan yang dapat dilakukan berupa imunisasi, pemberian makanan tambahan ibu hamil dan balita, monitoring pertumbuhan balita di Posyandu. Sasaran penerima program dan kegiatan adalah kelompok 1.000 hari pertama kehidupan (HPK) baik pada ibu hamil, ibu menyusui, dan anak 0-23 bulan. Sedangkan intervensi gizi sensitif adalah upaya-upaya untuk mencegah dan mengurangi gangguan secara tidak langsung melalui program pembangunan non kesehatan seperti penyediaan air bersih, penyediaan bahan pangan, keluarga berencana, penanggulangan kemiskinan, dan kesetaraan gender dengan sasaran masyarakat umum tidak harus 1.000 hari pertama kehidupan (HPK).Para pakar berpendapat bahwa intervensi spesifik oleh sektor kesehatan hanya berperan sebanyak 30 persen, sementara yang 70 persen adalah intervensi sensitif dimana yang berperan di luar sektor non kesehatan.   Sayangnya selama ini persepsi kita sekilas tentang stunting adalah masalah gizi yang menjadi urusan sektor kesehatan saja. Padahal intervensi sensitif sektor non kesehatan berperan besar dalam rangka mendukung intervensi spesifik dari sektor kesehatan. Oleh karena itu, sebagai bahan evaluasi kita bersama bahwa penanganan stunting selama ini bersifat tambal sulam. Sudah banyak program penanggulangan stunting dilakukan pemerintah, tetapi dampaknya belum nyata. Setiap sektor cenderung merencanakan dan melaksanakan programnya sendiri sehingga tidak ada keterkaitan. Akibatnya, banyak program penanggulangan stunting yang tidak tepat sasaran dan seringkali hanya mengatasi gejala dan bukan akar masalah. Stunting merupakan tantangan yang harus kita hadapi bersama dalam upaya perbaikan kualitas sumber daya manusia kita ke depan, justru dapat kita anggap sebagai sebuah peluang besar untuk mencapai kesuksesan untuk mencetak generasi berkualitas.  Berdasarkan uraian di atas, jelas bahwa upaya penanggulangan stunting melalui pendekatan lintas sektor menjadi solusi sebagai sebuah langkah konkrit. Pendekatan lintas sektor ini melibatkan berbagai pihak antara lain pemerintah pusat dan pemerintah daerah, lembaga sosial kemasyarakatan dan keagamaan, akademisi, dan media massa. Memang upaya penanggulangan stunting tidak mudah dilakukan, karena banyak melibatkan pihak dengan kepentingan. Namun upaya penaggulangan stunting melalui pendekatan lintas sektor dapat dijadikan momentum untuk menghilangkan ego sektoral yang selama ini melekat di Perangkat Daerah.Penyelesaian permasalahan pembangunan daerah tidak dapat diselesaikan oleh satu Perangkat Daerah saja, namun harus berkolaborasi dengan Perangkat Darah lainnya sesuai dengan tugas pokok dan fungsinya. Penerapan pendekatan lintas sektor dilaksanakan dengan strategi bertahap mulai dari menyamakan persepsi mengenai stunting. Membangun komitmen dan kerjasama antar berbagai pihak. Selanjutnya memperluas pelaksanaan program pembangunan Perangkat Daerah yang dirancang berdasarkan penyebab stunting dan lokus sasarannya yang terintegrasi dalam sistem perencanaan dan penganggaran.  Mengingat sejak tahun 2017 sistem perencanaan dan penganggaran di Indonesia berdasarkan konsep “Money Follows Program”. Merancang program pembangunan bukan lagi hanya mengejar output, namun sudah pada tahap outcome. Program-program yang memberi manfaat besar bagi masyarakat akan mendapatkan prioritas utama dalam pembangunan. Diharapkan Perangkat Daerah tidak lagi mempunyai target dan sasaran bersifat sektoral yang selama ini dilakukan, sehingga terciptanya efesiensi melalui koordinasi yang jelas antar program yang dilaksanakan Perangkat Daerah.  Kesuksesan implementasi program pembangunan melalui intervensi spesifik dan intervensi sensitif dapat meningkatkan kualitas generasi penerus kita. Karena balita yang sehat dan terpenuhi gizinya akan menjadi generasi penerus yang cerdas, produktif dan  berdaya saing. Tunggu apalagi mari sosialisasikan dan edukasi di sekitar kita tentang stunting. Mari kita bersama-sama bergandengan tangan penuhi hak anak-anak di bumi serumpun sebalai sejak dalam masa kandungan hingga 1.000 hari pertama kehidupan (HPK).    ',
    image: 'https://cdn-1.timesmedia.co.id/images/2024/07/18/Penanganan-Stunting.jpg',
    author: 'Novita Frahesti Ade Wijaya/',
    date: '2024-07-23',
    tags: ['stunting', 'penangan stunting', 'desa gelora']
  },
  {
    id: '2',
    title: 'UPAYA PENCEGAHAN MENINGKATNYA PERNIKAHAN DINI MELALUILITERASI KEARIFAN LOKAL PADA PENDIDIKANTINGKAT DASAR ',
    content: 'Maxy Academy telah menyelenggarakan program 1 Day bootcamp di Universitas Ma Chung, Malang. Acara ini dihadiri oleh puluhan mahasiswa dari berbagai prodi yang sangat antusias untuk mengasah keterampilan di bidang IT dan bisnis. Acara ini berfokus dalam mengembangkan kemampuan mahasiswa dalam bidang kewirausahaan melalui program khusus yaitu Sociopreneurship. Dalam program ini, para peserta mendapat kesempatan untuk mendalami konsep-konsep penting seperti Business Model Canvas (BMC) serta menganalisis studi kasus dari bidang bisnis UMKM. Kerjasama antara Maxy Academy dan TBN Indonesia dalam menyelenggarakan acara ini memiliki tujuan untuk membekali mahasiswa dengan pengetahuan dan keterampilan praktis yang relevan dengan dunia bisnis dan teknologi. Melalui pelatihan intensif ini, kami berharap dapat menciptakan generasi wirausaha yang siap menghadapi tantangan di era digital dan berkontribusi positif dalam perkembangan ekonomi. Kami mengucapkan terima kasih kepada semua pihak yang telah mendukung pelaksanaan program ini dan berharap dapat terus menginspirasi lebih banyak talenta masa depan untuk berinovasi dan berkarya di bidang kewirausahaan. Tagar#Sociopreneurship Tagar#BusinessSkills Tagar#Entrepreneurship Tagar#TechEducation Tagar#DigitalTransformation Tagar#StudentSuccess Tagar#MaxyAcademy Tagar#TBNIndonesia Tagar#CareerDevelopment Tagar#FutureLeaders',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9x-I7y6VKMRym1tFLWmTl5o-r865JkRPSA&s',
    author: 'ricky',
    date: '2024-07-20',
    tags: ['pernikahan dini']
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
