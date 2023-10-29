import React, { useEffect, useRef, useState } from "react";
import styles from "./ImagesComponent.module.scss";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const imgDatas = [img1, img2, img3];

const ImagesComponent = () => {
  const imgWrapperRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgsData = [...imgDatas, imgDatas[0]];

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgsData.length);
      },
      currentIndex === currentIndex * imgsData.length ? 0 : 4000
    );

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, imgsData.length]);

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;
    if (imgWrapper) {
      // 마지막 요소가 아닌 경우 해당 크기만큼 오른쪽으로 이동
      if (currentIndex !== currentIndex * imgsData.length) {
        imgWrapper.style.transition = imgWrapper.style.transition =
          "transform 1s ease";
        imgWrapper.style.transform = `translateX(${currentIndex * -100}%)`;
      } else {
        // 마지막 요소인경우(추가한 첫번째이미지) 애니메이션 없이 5초만에 지나감
        imgWrapper.style.transition = "none";
        imgWrapper.style.transform = "translateX(0%)";
        setCurrentIndex(0);
      }
    }
  }, [currentIndex, imgsData.length]);
  return (
    <div className={styles.container}>
      <div ref={imgWrapperRef} className={styles.imgsWrapper}>
        {imgsData.map((img) => (
          <img key={img} src={img} alt={img} />
        ))}
      </div>
    </div>
  );
};

export default ImagesComponent;
