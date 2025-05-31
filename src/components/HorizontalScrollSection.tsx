import React, { useRef } from 'react';
import '../css/horizontalScrollSection.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

type HorizontalScrollSectionProps = {
  children: React.ReactNode;
  scrollAmount?: number;
};

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({
  children,
  scrollAmount = 400,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX.current;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = x - startX.current;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="horizontal-scroll-wrapper">
      <button className="scroll-arrow left" onClick={() => scroll('left')}>
        <ArrowLeftOutlined />
      </button>

      <div
        className="horizontal-scroll-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>

      <button className="scroll-arrow right" onClick={() => scroll('right')}>
        <ArrowRightOutlined />
      </button>
    </div>
  );
};

export default HorizontalScrollSection;
