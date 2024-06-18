const ControlButton = ({ children, className, ...props }) => {
  return (
    <button 
      {...props} 
      className={`border p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition text-sm ${className}`}
    >
        {children}
    </button>
  );
}

export default ControlButton;