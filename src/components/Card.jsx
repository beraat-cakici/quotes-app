export function Card({ children, className }) {
  return (
    <div
      className={`flex min-h-[170px] w-full max-w-xl flex-col rounded-xl border p-8 shadow-lg transition-colors bg-gray-200 duration-300 ${className}`}
    >
      {children}
    </div>
  );
}