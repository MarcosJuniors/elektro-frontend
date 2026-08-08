import { useRef, useState } from 'react';
import { ProductCard } from '../ProductCard';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const [dragging, setDragging] = useState(false);

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {
    if (!carouselRef.current) return;

    isDragging.current = true;
    setDragging(true);

    startX.current =
      event.pageX - carouselRef.current.offsetLeft;

    scrollStart.current =
      carouselRef.current.scrollLeft;
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging.current || !carouselRef.current) return;

    event.preventDefault();

    const currentX =
      event.pageX - carouselRef.current.offsetLeft;

    const distance = currentX - startX.current;

    carouselRef.current.scrollLeft =
      scrollStart.current - distance;
  }

  function stopDragging() {
    isDragging.current = false;
    setDragging(false);
  }

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div
        ref={carouselRef}
        className={`flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide ${
          dragging
            ? 'cursor-grabbing'
            : 'cursor-grab'
        }`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          userSelect: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {products.map((prod) => (
          <div
            key={prod.id}
            className="flex-none w-[calc(50%-12px)]"
          >
            <ProductCard
              name={prod.name}
              price={prod.price}
              image={prod.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}