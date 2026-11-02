export function Button({ title, handleClick, className }) {
  return (
    <button
      onClick={handleClick}
      className={`rounded-md px-5 py-2 font-medium transition-colors ${className}`}
    >
      {title}
    </button>
  );
}