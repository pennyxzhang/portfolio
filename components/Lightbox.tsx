"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onNav: (index: number) => void;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const ZOOM_STEP = 25;
const ZOOM_MIN = 25;
const ZOOM_MAX = 300;

export default function Lightbox({ images, index, onClose, onNav }: LightboxProps) {
  const total = images.length;
  const src = images[index];

  const [zoom, setZoom] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

  const prev = useCallback(() => onNav((index - 1 + total) % total), [index, total, onNav]);
  const next = useCallback(() => onNav((index + 1) % total), [index, total, onNav]);
  const zoomIn  = useCallback(() => setZoom(z => Math.min(z + ZOOM_STEP, ZOOM_MAX)), []);
  const zoomOut = useCallback(() => setZoom(z => Math.max(z - ZOOM_STEP, ZOOM_MIN)), []);
  const resetZoom = useCallback(() => setZoom(100), []);

  // Reset zoom when image changes
  useEffect(() => { setZoom(100); }, [index]);

  // After zoom changes, scroll to center so both edges are reachable
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || zoom <= 100) return;
    // Small defer so the DOM has updated dimensions
    requestAnimationFrame(() => {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
      el.scrollTop  = (el.scrollHeight - el.clientHeight) / 2;
    });
  }, [zoom]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "=" || e.key === "+") { e.preventDefault(); zoomIn(); }
      if (e.key === "-") { e.preventDefault(); zoomOut(); }
      if (e.key === "0") resetZoom();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next, zoomIn, zoomOut, resetZoom]);

  // Ctrl/Cmd + scroll to zoom
  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      if (e.deltaY < 0) zoomIn(); else zoomOut();
    };
    window.addEventListener("wheel", handler, { passive: false });
    return () => window.removeEventListener("wheel", handler);
  }, [zoomIn, zoomOut]);

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const el = scrollRef.current;
    if (!el || zoom <= 100) return;
    dragging.current = true;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, scrollLeft: el.scrollLeft, scrollTop: el.scrollTop };
    e.preventDefault();
  }
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!dragging.current || !scrollRef.current) return;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - (e.clientX - dragStart.current.x);
    scrollRef.current.scrollTop  = dragStart.current.scrollTop  - (e.clientY - dragStart.current.y);
  }
  function stopDrag() { dragging.current = false; setIsDragging(false); }

  const isZoomed = zoom !== 100;
  const btnClass = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/90" onClick={onClose} />

      {/* Close × */}
      <button
        onClick={onClose}
        aria-label="Close"
        className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 brutal-border bg-paper hover:bg-ink hover:text-paper transition-colors duration-150 flex items-center justify-center font-display font-700 text-base ${btnClass}`}
      >
        ×
      </button>

      {/* Image container */}
      <motion.div
        key={index}
        className="relative z-10 brutal-border brutal-shadow bg-paper flex flex-col"
        style={{ maxWidth: "90vw", maxHeight: "90vh" }}
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.18, ease }}
      >
        {/* Scroll / pan area — image sits directly here, no centering wrapper */}
        <div
          ref={scrollRef}
          className="overflow-auto flex-1 select-none"
          style={{ cursor: isZoomed ? (isDragging ? "grabbing" : "grab") : "default" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          <img
            src={src}
            alt={`Image ${index + 1} of ${total}`}
            draggable={false}
            style={{
              display:   "block",
              // At 100%: constrain to viewport. At other zoom: width% of scroll container = correct scale.
              width:     zoom === 100 ? "auto" : `${zoom}%`,
              maxWidth:  zoom === 100 ? "min(88vw, 1400px)" : "none",
              maxHeight: zoom === 100 ? "calc(90vh - 48px)"  : "none",
              height:    "auto",
              userSelect:    "none",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-paper border-t-[2.5px] border-ink shrink-0 gap-4">
          <div className="flex items-center gap-1">
            <button
              onClick={zoomOut}
              disabled={zoom <= ZOOM_MIN}
              aria-label="Zoom out"
              className={`w-7 h-7 brutal-border flex items-center justify-center font-display font-700 text-sm hover:bg-ink hover:text-paper transition-colors duration-100 disabled:opacity-30 disabled:pointer-events-none ${btnClass}`}
            >
              −
            </button>
            <button
              onClick={resetZoom}
              aria-label="Reset zoom"
              className={`min-w-[52px] h-7 brutal-border px-2 font-mono text-xs hover:bg-ink hover:text-paper transition-colors duration-100 ${btnClass}`}
            >
              {zoom}%
            </button>
            <button
              onClick={zoomIn}
              disabled={zoom >= ZOOM_MAX}
              aria-label="Zoom in"
              className={`w-7 h-7 brutal-border flex items-center justify-center font-display font-700 text-sm hover:bg-ink hover:text-paper transition-colors duration-100 disabled:opacity-30 disabled:pointer-events-none ${btnClass}`}
            >
              +
            </button>
          </div>

          {total > 1 && (
            <span className="font-mono text-xs text-ink/40 shrink-0">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          )}
        </div>
      </motion.div>

      {/* Prev */}
      {total > 1 && (
        <button
          onClick={prev}
          aria-label="Previous image"
          className={`absolute left-4 sm:left-6 z-20 w-11 h-11 brutal-border bg-paper hover:bg-ink hover:text-paper transition-colors duration-150 flex items-center justify-center font-display font-700 text-lg ${btnClass}`}
        >
          ←
        </button>
      )}

      {/* Next */}
      {total > 1 && (
        <button
          onClick={next}
          aria-label="Next image"
          className={`absolute right-4 sm:right-6 z-20 w-11 h-11 brutal-border bg-paper hover:bg-ink hover:text-paper transition-colors duration-150 flex items-center justify-center font-display font-700 text-lg ${btnClass}`}
        >
          →
        </button>
      )}
    </motion.div>,
    document.body
  );
}
