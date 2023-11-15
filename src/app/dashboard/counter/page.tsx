import { CartCounter } from "@/app/shopping-cart";




export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Producto en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
}