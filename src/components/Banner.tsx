import { useEffect, useRef } from 'react';

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current || !imageRef.current || !textRef.current) return;

      const scrollY = window.scrollY;
      const rate = scrollY * -0.5;
      const textRate = scrollY * -0.3;

      imageRef.current.style.transform = `translateY(${rate}px)`;
      textRef.current.style.transform = `translateY(${textRate}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={bannerRef} className="relative h-screen overflow-hidden">
      {/* Background with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-muted"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content with Parallax */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center text-center text-white z-10"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Ideas</h1>
          <p className="text-xl md:text-2xl">Where all our great things begin</p>
        </div>
      </div>

      {/* Diagonal Cut at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white transform -skew-y-2 origin-bottom-left"></div>
    </section>
  );
};

export default Banner;