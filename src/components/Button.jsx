
export function Button({
  title,
  hoverTitle,
  handleClick,
  className,
  disabled,
}) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`group rounded-md px-5 py-2 font-medium transition-colors cursor-pointer disabled:cursor-not-allowed ${className}`}
    >
      {hoverTitle ? (
        <>
          <span className="group-hover:hidden">{title}</span>
          <span className="hidden group-hover:inline">{hoverTitle}</span>
        </>
      ) : (
        title
      )}
    </button>
  );
}
