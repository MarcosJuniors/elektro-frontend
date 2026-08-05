interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export function ProductCard({ name, image }: ProductCardProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <img
        src={image}
        alt={name}
        className="w-full h-auto object-contain rounded-2xl"
      />
    </div>
  );
}