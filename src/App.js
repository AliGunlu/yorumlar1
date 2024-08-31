import React from 'react';
import Review from './Review';

// App komponenti, uygulamanın ana yapısını oluşturan üst seviye komponenttir.
// Bu komponent, sayfanın genel düzenini ve diğer alt komponentlerin yerleşimini sağlar.
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          {/* Başlık bölümü, uygulamanın ana başlığını ve stilize edilmiş bir alt çizgiyi içerir */}
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        {/* Review komponenti çağrılır ve bu, kullanıcı yorumlarının görüntülendiği alanı oluşturur */}
        <Review />
      </section>
    </main>
  );
}

export default App;
