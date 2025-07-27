'use client'
import {FC, ReactElement, useEffect, useState} from 'react'
import {motion} from 'framer-motion'

// TODO can we type in 2 colors?

type Props = {
  texts: Array<string>
  fontSize?: number
  cursorColor?: string
  textColor?: string
}

const Typewriter: FC<Props> = (props: Props): ReactElement => {
  const {texts, cursorColor = '#BCFF83', textColor = '#FBFBFB'} = props // TODO colors

  const [index, setIndex] = useState(0) // current texts index // TODO rename to textsIndex
  const [subIndex, setSubIndex] = useState(0) // current letter index // TODO rename to characterIndex
  const [deleting, setDeleting] = useState(false) // deleting state
  const [blink, setBlink] = useState(true) // cursor blink state
  const [pause, setPause] = useState(false) // pause state for text intervals

  const TEXTS_INTERVAL = 6000 // The delay between ech item in input;
  const DELETION_TICK_INTERVAL_MS = 20 // Controls delay between deleting each character
  const BLINK_INTERVAL_MS = 500 // The delay between each cursor blink

  const BASE_SPEED = 60
  const START_WORD_SPEED = 50
  const PUNCTUATION_SPEED = 100
  const END_SENTENCE_SPEED = 150 //250

  useEffect(() => {
    if (pause) {
      return
    }

    const currentText = texts[index]
    const timeout = setTimeout(
      (): void => {
        setSubIndex(prev => prev + (deleting ? -1 : 1))
      },
      deleting ? DELETION_TICK_INTERVAL_MS : getTypingDelay(subIndex, currentText) // replace getTypingDelay with a fixed number to get a static typing speed (100)
    )

    return (): void => clearTimeout(timeout)
  }, [subIndex, deleting, pause, index, texts])

  useEffect(() => {
    if (!deleting && subIndex === texts[index].length) {
      setPause(true)
      setTimeout((): void => {
        setDeleting(true)
        setPause(false)
      }, TEXTS_INTERVAL)
    } else if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex(prev => (prev + 1) % texts.length)
    }
  }, [subIndex, deleting, index, texts])

  // cursor blinking
  useEffect(() => {
    if (!pause) {
      setBlink(true) // solid cursor while typing/deleting
      return
    }

    const blinkInterval = setInterval((): void => {
      setBlink(prev => !prev)
    }, BLINK_INTERVAL_MS)
    return (): void => clearInterval(blinkInterval)
  }, [pause])

  const getTypingDelay = (charIndex: number, fullText: string): number => {
    const char = fullText[charIndex] || ''
    const prevChar = fullText[charIndex - 1] || ''
    const isPunctuation = /[.,;:!?]/.test(char)
    const isEndOfSentence = /[.?!]/.test(char)
    const isWordStart = charIndex === 0 || /\s/.test(prevChar)

    let speed = BASE_SPEED
    if (isWordStart) speed += START_WORD_SPEED
    if (isPunctuation) speed += PUNCTUATION_SPEED
    if (isEndOfSentence) speed += END_SENTENCE_SPEED

    return speed
  }

  return (
    // TODO do we need the motion div? it seems it only adds the initial render to show the typewriter
    <motion.div className="text-2xl text-left" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
      <span style={{color: textColor}}>
        {texts[index].substring(0, subIndex)}
        <span style={{color: cursorColor, opacity: blink ? 1 : 0}}>|</span>
      </span>
    </motion.div>
  )
}

export default Typewriter

// export default function Typewriter() {
//     const [index, setIndex] = useState(0); // current phrase index
//     const [subIndex, setSubIndex] = useState(0); // current letter index
//     const [deleting, setDeleting] = useState(false); // deleting state
//     const [blink, setBlink] = useState(true); // cursor blink state
//     const [pause, setPause] = useState(false); // pause state for text intervals
//
//     const INTERVAL_DELAY = 3000; // The delay between ech item in input;
//     const DELETION_TICK_DELAY = 20; // Controls delay between deleting each character
//     const BLINK_DELAY = 500; // The delay between each cursor blink
//
//     useEffect(() => {
//         if (pause) return;
//
//         const currentText = texts[index];
//         const timeout = setTimeout(() => {
//             setSubIndex((prev) => prev + (deleting ? -1 : 1));
//         }, deleting ? DELETION_TICK_DELAY : getTypingDelay(subIndex, currentText)); // 100
//
//         return () => clearTimeout(timeout);
//     }, [subIndex, deleting, pause, index]);
//
//     // useEffect(() => {
//     //     if (pause) return;
//     //
//     //     const timeout = setTimeout(() => {
//     //         setSubIndex((prev) => prev + (deleting ? -1 : 1));
//     //     }, deleting ? 50 : 100);
//     //
//     //     return () => clearTimeout(timeout);
//     // }, [subIndex, deleting, pause]);
//
//     useEffect(() => {
//         if (!deleting && subIndex === texts[index].length) {
//             setPause(true);
//             setTimeout(() => {
//                 setDeleting(true);
//                 setPause(false);
//             }, INTERVAL_DELAY);
//         } else if (deleting && subIndex === 0) {
//             setDeleting(false);
//             setIndex((prev) => (prev + 1) % texts.length);
//         }
//     }, [subIndex, deleting, index]);
//
//     // blinking cursor
//     useEffect(() => {
//         if (!pause) {
//             setBlink(true); // solid cursor while typing/deleting
//             return;
//         }
//
//         const blinkInterval = setInterval(() => {
//             setBlink((prev) => !prev);
//         }, BLINK_DELAY);
//         return () => clearInterval(blinkInterval);
//     }, [pause]);
//
//     function getTypingDelay(charIndex: number, fullText: string): number {
//         const char = fullText[charIndex] || "";
//         const prevChar = fullText[charIndex - 1] || "";
//         const isPunctuation = /[.,;:!?]/.test(char);
//         const isEndOfSentence = /[.?!]/.test(char);
//         const isWordStart = charIndex === 0 || /\s/.test(prevChar);
//
//         let base = 60; // base speed
//         if (isWordStart) base += 50;
//         if (isPunctuation) base += 100;
//         if (isEndOfSentence) base += 250;
//
//         // Slight human randomness
//         //const jitter = Math.random() * 40;
//
//         return base //+ jitter;
//     }
//
//     return (
//         <motion.div
//             className="text-2xl text-left mt-20" //font-mono text-center
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//         >
//             <span style={{color: '#FBFBFB'}}>
//                 {texts[index].substring(0, subIndex)}
//                 <span style={{ color: "#BCFF83", opacity: blink ? 1 : 0 }}>|</span>
//             </span>
//         </motion.div>
//     );
// }
