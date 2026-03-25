export function Badge({ children, className = "", ...props }: any) {
  return (
    <span
      className={`px-2 py-1 text-xs rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}