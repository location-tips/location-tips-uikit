import React, { ReactNode, useState, useRef, useEffect } from 'react';
import MFlex from '../MFlex/MFlex';
import clsx from 'clsx';
import styles from './MGallery.module.css';
import { MButton } from '../MButton/MButton';
import { MIconCaretLeft } from '../../atoms/MIcon/icons/MIconCaretLeft';
import { MIconCaretRight } from '../../atoms/MIcon/icons/MIconCaretRight';

type MGalleryProps = {
  slides: ReactNode[];
  header?: ReactNode[];
  footer?: ReactNode[];
  tools?: ReactNode[];
  width?: number;
  height?: number;
};

export const MGallery = ({
  slides,
  header,
  footer,
  tools,
  width = 200,
  height = 200,
}: MGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = (): void => {
    if (currentIndex === slides.length - 1) return;
    setCurrentIndex((index: number) => (index + 1) % slides.length);
  };

  const prevSlide = (): void => {
    if (currentIndex === 0) return;
    setCurrentIndex((index: number) =>
      index === 0 ? slides.length - 1 : index - 1
    );
  };

  const handleTouchStart = (e: TouchEvent): void => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent): void => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (): void => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart);
      slider.addEventListener('touchmove', handleTouchMove);
      slider.addEventListener('touchend', handleTouchEnd);

      return () => {
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchmove', handleTouchMove);
        slider.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [touchStart, touchEnd]);

  return (
    <MFlex direction="column" align="start" gap="m">
      {header && <div className={clsx(styles.header)}>{header}</div>}

      <div
        className={clsx(styles.slider__container)}
        style={{ width: width, height: height }}
      >
        <div
          ref={sliderRef}
          className={clsx(styles.slider)}
          style={{ transform: `translateX(-${currentIndex * width}px)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={clsx(styles.slider__slide)}>
              {slide}
            </div>
          ))}
        </div>
        {currentIndex > 0 && (
          <MButton
            className={clsx([
              styles.slider__button,
              styles.slider__button_left,
            ])}
            disabled={currentIndex === 0 ? true : false}
            mode="round"
            onClick={prevSlide}
          >
            <MIconCaretLeft mode="regular" width={32} />
          </MButton>
        )}
        {currentIndex < slides.length - 1 && (
          <MButton
            className={clsx([
              styles.slider__button,
              styles.slider__button_right,
            ])}
            mode="round"
            onClick={nextSlide}
          >
            <MIconCaretRight mode="regular" width={32} />
          </MButton>
        )}
        {tools && <div className={clsx(styles.tools)}>{tools}</div>}
      </div>

      {footer && <div className={clsx(styles.footer)}>{footer}</div>}
    </MFlex>
  );
};

export default MGallery;
