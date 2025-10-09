import { createPortal } from "react-dom";

export default function Loader() {
  const overlay = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );

  return createPortal(overlay, document.body);
}
