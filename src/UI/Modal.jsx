import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onClick }) => {
  return (
    <div 
      className="fixed inset-0 z-40 bg-black opacity-30"
      onClick={onClick}
    />
  );
};

const ModalOverlay = ({ children, className = "" }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className={`bg-white rounded-2xl shadow-xl pointer-events-auto ${className}`}>
        {children}
      </div>
    </div>
  );
};

const Modal = ({ onClose, children, className = "" }) => {
  const [portalElement, setPortalElement] = useState(null);
  
  useEffect(() => {
    // Find or create the portal element
    let element = document.getElementById("overlays");
    if (!element) {
      element = document.createElement("div");
      element.id = "overlays";
      document.body.appendChild(element);
    }
    setPortalElement(element);
    
    return () => {
      // Clean up only if we created the element
      if (!document.getElementById("overlays") && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, []);
  
  if (!portalElement) return null;
  
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={className}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal; 