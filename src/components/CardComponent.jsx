import React, { useEffect, useRef } from "react";
import "../assets/styles/CardComponent.css";
import instagramLogo from "../assets/img/instagram.png";
import tiktokLogo from "../assets/img/tiktok.png";
import followerLogo from "../assets/img/follower.png";
import closedLogo from "../assets/img/closed.png";

export const CardComponent = () => {
  const overlayRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const overlay = overlayRef.current;
    const cards = Array.from(cardsContainer.querySelectorAll(".card"));

    const applyOverlayMask = (e) => {
      const overlayEl = e.currentTarget;
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;

      overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
          overlay.children[cardIndex].style.width = `${width}px`;
          overlay.children[cardIndex].style.height = `${height}px`;
        }
      });
    });

    const initOverlayCard = (cardEl) => {
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("card");
      overlay.append(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener("pointermove", applyOverlayMask);

    return () => {
      document.body.removeEventListener("pointermove", applyOverlayMask);
    };
  }, []);

  const handleCardClick = (url) => {
    window.location.href = url;
  };

  return (
    <main className="main flow">
      <h1 className="main__heading">Hizmetlerimiz</h1>
      <div className="main__cards cards" ref={cardsContainerRef}>
        <div className="cards__inner">
          <div
            className="cards__card card"
            onClick={() => handleCardClick("#basic")}
          >
            <h2 className="card__heading">Instagram Hesabım Kapandı</h2>
            <ul role="list" className="card__bullets flow">
              <img className="card__img" src={instagramLogo} />

              <li>
                Ersin Erem Media olarak erişimini kaybettiğiniz hesapları en
                kısa süre içinde kurtarıp tarafınıza teslim ediyoruz.
              </li>
            </ul>
          </div>

          <div
            className="cards__card card"
            onClick={() => handleCardClick("#pro")}
          >
            <h2 className="card__heading">Instagram Hesabım Çalındı</h2>
            <ul role="list" className="card__bullets flow">
              <img className="card__img" src={instagramLogo} />

              <li>
                Ersin Erem Media, olarak kötü niyetli kişiler tarafından ele
                geçirilen Instagram hesaplarınız kurtarıyoruz.
              </li>
            </ul>
          </div>

          <div
            className="cards__card card"
            onClick={() => handleCardClick("#ultimate")}
          >
            <h2 className="card__heading">Takipçi Hizmeti</h2>
            <ul role="list" className="card__bullets flow">
              <img className="card__img" src={followerLogo} />

              <li>
                Sosyal Medya Hesaplarınıza Dilediğiniz Şekilde Takipçi Satışı
                Sağlıyoruz.
              </li>
            </ul>
          </div>

          <div
            className="cards__card card"
            onClick={() => handleCardClick("#ultimate")}
          >
            <h2 className="card__heading">Hesap Kapatma Hizmeti</h2>
            <ul role="list" className="card__bullets flow">
              <img className="card__img" src={closedLogo} />

              <li>
                Ersin Erem Media, erişemediğiniz & başkalarının eline geçen
                hesaplarınızı kapatmanıza ve kalıcı olarak erişimine engel
                olmaya hazır.
              </li>
            </ul>
          </div>

          <div
            className="cards__card card"
            onClick={() => handleCardClick("#ultimate")}
          >
            <h2 className="card__heading">Tiktok Hesabım Kapandı (Çözüm)</h2>
            <ul role="list" className="card__bullets flow">
              <img className="card__img" src={tiktokLogo} />

              <li>
                Kapanan ve askıya alınan tüm TikTok hesaplarınızın çözümü için
                Ersin Erem Media ile iletişime geçebilirsiniz.
              </li>
            </ul>
          </div>
        </div>

        <div className="overlay cards__inner" ref={overlayRef}></div>
      </div>
    </main>
  );
};
