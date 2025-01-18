"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  TouchEvent,
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface StackedSliderProps {
  images: string[];
  className?: string;
}
const StackedSlider: React.FC<StackedSliderProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 4000);
  }, [images.length]);

  const clearCustomInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleGoToSlide = (index: number) => {
    clearCustomInterval();
    setCurrentIndex(index);
    startInterval();
  };

  const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e: TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      goToNextSlide();
    } else if (endX - startX > 50) {
      goToPrevSlide();
    }
  };
  const goToNextSlide = () => {
    clearCustomInterval();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startInterval();
  };
  const goToPrevSlide = () => {
    clearCustomInterval();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    startInterval();
  };

  useEffect(() => {
    startInterval();
  }, [startInterval]);

  return (
    <div>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`${className} relative h-[200px] bg-red-200 sm:h-[300px] lg:h-[600px]`}
      >
        {images.map((image, index) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
              key={index}
              className="absolute h-full w-full"
            >
              <button
                onClick={goToPrevSlide}
                aria-label="left-slide-btn"
                className="absolute left-0 top-2/4 z-10 grid h-full w-20 -translate-y-2/4 cursor-pointer place-content-center text-white sm:text-3xl"
              >
                <FaChevronLeft className="hidden sm:block" />
              </button>
              <Image
                className="h-full w-full"
                layout="fill"
                src={image}
                alt={image}
                priority
              />
              <button
                onClick={goToNextSlide}
                aria-label="right-slide-btn"
                className="absolute right-0 top-2/4 z-10 grid h-full w-20 -translate-y-2/4 cursor-pointer place-content-center text-white sm:text-3xl"
              >
                <FaChevronRight className="hidden sm:block" />
              </button>
            </motion.div>
          );
        })}
      </div>
      <div className="my-3 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            className={`${currentIndex === index ? "bg-primary" : "bg-black"} cursor-pointer rounded-full bg-primary p-1`}
            onClick={() => handleGoToSlide(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default StackedSlider;
