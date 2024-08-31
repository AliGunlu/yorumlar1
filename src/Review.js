import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

// Review komponenti, kullanıcı yorumlarını görüntülemek ve kullanıcıların yorumlar arasında gezinmesini sağlamak için kullanılır.
const Review = () => {
  // index, şu anki gösterilen kişinin dizinini tutan state değişkenidir.
  const [index, setIndex] = useState(0);
  
  // Mevcut kişi bilgilerini people dizisinden index'e göre alır.
  const { name, job, image, text } = people[index];

  // checkNumber fonksiyonu, verilen sayının geçerli bir kişi dizini olup olmadığını kontrol eder.
  // Eğer sayı geçerli değilse, dizinin başına veya sonuna döner.
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0; // Eğer sayı dizinin sonundaysa, başa döner.
    }
    if (number < 0) {
      return people.length - 1; // Eğer sayı dizinin başındaysa, sona döner.
    }
    return number; // Sayı geçerliyse olduğu gibi döner.
  };

  // nextPerson fonksiyonu, sonraki kişiye geçiş yapmak için index'i artırır.
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex); // Yeni index'i kontrol edip günceller.
    });
  };

  // prevPerson fonksiyonu, önceki kişiye geçiş yapmak için index'i azaltır.
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex); // Yeni index'i kontrol edip günceller.
    });
  };

  // randomPerson fonksiyonu, rastgele bir kişiyi seçmek için kullanılır.
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    // Aynı kişi seçilirse bir sonraki kişiye geçiş yapar.
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber)); // Rastgele seçilen kişiyi kontrol edip günceller.
  };

  return (
    <article className='review'>
      {/* Kişinin fotoğrafını gösteren alan */}
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      {/* Kişinin adı, mesleği ve yorumu */}
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      {/* Gezinme düğmeleri */}
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      {/* Rastgele kişi seçme düğmesi */}
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
