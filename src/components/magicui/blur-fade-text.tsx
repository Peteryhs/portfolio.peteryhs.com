"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo } from "react";
import { type ReactNode } from 'react';

interface BlurFadeTextProps {
  text: ReactNode;
  className?: string;
  variant?: Variants; // Changed to proper Framer Motion Variants type
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };

  const combinedVariants = variant || defaultVariants;

  // Modified character splitting logic
  const characters = useMemo(() => {
    if (typeof text === 'string') {
      return Array.from(text).map((char, index) => ({
        char,
        key: `char-${index}`
      }));
    }
    return [{ char: text, key: 'content' }];
  }, [text]);

  if (animateByCharacter && typeof text === 'string') {
    return (
      <div className="flex">
        <AnimatePresence>
          {characters.map(({ char, key }) => (
            <motion.span
              key={key}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                yoyo: Infinity,
                delay: delay + parseInt(key.split('-')[1] || '0') * characterDelay,
                ease: "easeOut",
              }}
              className={cn("inline-block", className)}
              style={{ 
                width: typeof char === 'string' && char.trim() === "" ? "0.2em" : "auto" 
              }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  // Non-character animation version
  return (
    <div className="flex">
      <AnimatePresence>
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={combinedVariants}
          transition={{
            yoyo: Infinity,
            delay,
            ease: "easeOut",
          }}
          className={cn("inline-block", className)}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default BlurFadeText;