import React from 'react';

const scores = [
  { score: 61.11, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-1.jpg?v39e6a2e6e20ea2d7ae9d748abbec22ba' },
  { score: 63.68, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-2.jpg?vf4a18844c472959bbed309776c0ed5bd' },
  { score: 33.33, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-3.jpg?v4bd7e67c4399d1a33526f44a2bf569f3' },
  { score: 80.24, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-4.jpg?v1f20f425b044003a6ec865bfa746e750' },
  { score: 41.39, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-5.jpg?v7d6b966dea7036d8a140100111f052af' },
  { score: 42.11, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-6.jpg?v51b16770e0ebc4effc96ca8d96380f0a' },
  { score: 63.47, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-7.jpg?v58591e4f46a73b15ac5843d22bf1e787' },
  { score: 99.87, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-8.jpg?vf3645c1ab2ab3ac3b6014cf813932803' },
  { score: 49.1, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-9.jpg?v6356b04063772cd2b9de4bd79e2e34e3' },
  { score: 8.26, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-10.jpg?vbd632d56308021067b2a73ae2ae16552' },
  { score: 38.86, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-11.jpg?v9384e1f5747681368f25dbf9394021b1' },
  { score: 65.66, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-12.jpg?v46d6bd51b236e17d4960a8d931cf9be2' },
  { score: 100, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-13.jpg?v924b4b7ae2c89cba4d17ef0d7ab59b57' },
  { score: 80, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-14.jpg?v63c2107a57ed3a379d2c2a5c120f9624' },
  { score: 50, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-15.jpg?v68f27f6ab91fee48301f13e057967515' },
  { score: 66.67, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-16.jpg?v3ae69c82c6ed7b7bb91443860fe60a06' },
  { score: 75.28, description: 'Skor Nilai', imageUrl: 'https://desa-brangkolong.sumbawakab.go.id/assets/images/sdgs/skor-sdgs-17.jpg?ve3f532889363047c54193c3de4521365' },
  { score: 81.58, description: 'Skor Nilai', imageUrl: '' },
  
];

function CardGrid() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Skor SDGs Desa Gelora</h2>
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Data belum bersifat Valid </h3>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">FITUR LAINYA MASIH DALAM PROSES PENGEMBANGAN!!! </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {scores.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={item.imageUrl}
              alt={`Image for ${item.description}`}
              className="w-full h-full  object-cover"
              style={{ height: '200px', width: '400px' }}
            />
            <div className="p-4">
              <p className="text-gray-500 text-center text-sm mb-2">{item.description}</p>
              <div className="text-3xl font-semibold text-center text-gray-800">{item.score}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardGrid;
