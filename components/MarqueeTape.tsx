"use client";

const ITEMS = [
  "PRODUCT DESIGNER",
  "✦",
  "SYDNEY AU",
  "✦",
  "OPEN TO WORK",
  "✦",
  "UX & UI",
  "✦",
  "FROM RESEARCH TO PIXEL",
  "✦",
];

// Doubled for seamless loop
const LOOP = [...ITEMS, ...ITEMS];

export default function MarqueeTape() {
  return (
    <div className="hidden overflow-hidden w-[110vw] -ml-[5vw] my-10 -rotate-[3deg]">
      <div className="bg-yellow border-y-[2.5px] border-ink py-3">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {LOOP.map((item, i) => (
            <span
              key={i}
              className="font-display font-700 text-sm tracking-widest uppercase px-8 text-ink shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
