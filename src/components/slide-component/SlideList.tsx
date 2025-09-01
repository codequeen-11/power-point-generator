// import { RefObject } from "react";
// import SlideCard from "./SlideCard";

// interface Slide {
//   title: string;
//   points: string[];
// }

// interface SlideListProps {
//   slides: Slide[];
//   sectionRefs: RefObject<(HTMLDivElement | null)[]>;
// }

// export default function SlideList({ slides, sectionRefs }: SlideListProps) {
//   return (
//     <div className="max-w-4xl mx-auto px-6 py-20 space-y-28">
//       {slides.map((slide, index) => (
//         <section
//           key={index}
//           ref={(el) => {
//             if (sectionRefs.current) sectionRefs.current[index] = el;
//           }}
//           id={`slide-${index}`}
//           className="scroll-mt-20"
//         >
//           <SlideCard title={slide.title} points={slide.points} />
//         </section>
//       ))}
//     </div>
//   );
// }


import React, { useRef, useEffect } from "react"
import SlideCard from "./SlideCard"

interface Slide {
  title: string
  points: string[]
}

interface SlideListProps {
  slides: Slide[]
}

export default function SlideList({ slides }: SlideListProps) {
  // 🔹 Create refs dynamically for each slide
  const sectionRefs = useRef<HTMLDivElement[]>([])

  // Initialize refs array if slides length changes
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, slides.length)
  }, [slides.length])

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-28">
      {slides.map((slide, index) => (
        <section
          key={index}
          ref={(el: HTMLDivElement | null) => {
            if (el) sectionRefs.current[index] = el
          }}
          id={`slide-${index}`}
          className="scroll-mt-20"
        >
          <SlideCard title={slide.title} points={slide.points} />
        </section>
      ))}
    </div>
  )
}
