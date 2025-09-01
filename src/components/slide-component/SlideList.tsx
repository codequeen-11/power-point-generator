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


// import React, { useRef, useEffect, RefObject } from "react"
// import SlideCard from "./SlideCard"

// interface Slide {
//   title: string
//   points: string[]
// }

// interface SlideListProps {
//   slides: Slide[]
//    sectionRefs: RefObject<(HTMLDivElement | null)[]> // ✅ Added sectionRefs
// }

// // export default function SlideList({ slides }: SlideListProps) {
// //   // 🔹 Create refs dynamically for each slide
// //   const sectionRefs = useRef<HTMLDivElement[]>([])

// //   // Initialize refs array if slides length changes
// //   useEffect(() => {
// //     sectionRefs.current = sectionRefs.current.slice(0, slides.length)
// //   }, [slides.length])

// export default function SlideList({ slides, sectionRefs }: SlideListProps) {
//   useEffect(() => {
//     if (sectionRefs.current) {
//       sectionRefs.current = sectionRefs.current.slice(0, slides.length)
//     }
//   }, [slides.length])
  
//   // ...rest remains the same
// // }


//   return (
//     <div className="max-w-4xl mx-auto px-6 py-20 space-y-28">
//       {slides.map((slide, index) => (
//         <section
//           key={index}
//           ref={(el: HTMLDivElement | null) => {
//             if (el) sectionRefs.current[index] = el
//           }}
//           id={`slide-${index}`}
//           className="scroll-mt-20"
//         >
//           <SlideCard title={slide.title} points={slide.points} />
//         </section>
//       ))}
//     </div>
//   )
// }


// "use client"

// import { RefObject, forwardRef } from "react"

// interface Slide {
//   title: string
//   points: string[]
// }

// interface SlideListProps {
//   slides: Slide[]
//   sectionRefs: RefObject<(HTMLDivElement | null)[]> // ✅ Added sectionRefs
// }

// const SlideList = ({ slides, sectionRefs }: SlideListProps) => {
//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
//       {slides.map((slide, index) => (
//         <section
//           key={index}
//           ref={(el) => {
//             if (sectionRefs.current) {
//               sectionRefs.current[index] = el
//             }
//           }}
//           className="min-h-screen flex flex-col justify-center scroll-mt-20"
//         >
//           <h2 className="text-3xl font-bold mb-6">{slide.title}</h2>
//           <ul className="space-y-4">
//             {slide.points.map((point, i) => (
//               <li
//                 key={i}
//                 className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow transition-transform hover:scale-[1.02]"
//               >
//                 {point}
//               </li>
//             ))}
//           </ul>
//         </section>
//       ))}
//     </div>
//   )
// }

// export default SlideList


"use client"

import React, { useEffect, MutableRefObject } from "react"
import SlideCard from "./SlideCard"

interface Slide {
  title: string
  points: string[]
}

interface SlideListProps {
  slides: Slide[]
  sectionRefs: MutableRefObject<(HTMLDivElement | null)[]>
}

export default function SlideList({ slides, sectionRefs }: SlideListProps) {
  // Keep sectionRefs array length in sync with slides
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, slides.length)
  }, [slides.length])

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-28">
      {slides.map((slide, index) => (
        <section
          key={index}
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[index] = el
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
