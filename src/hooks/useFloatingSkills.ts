import { useState, useEffect, RefObject } from "react";

interface FloatingSkillsState {
  /** El usuario hizo scroll lo suficiente para encoger el header/tarjetas flotantes. */
  isSticky: boolean;
  /** Las tarjetas ya "aterrizaron" en la sección de habilidades. */
  landed: boolean;
}

/**
 * Fuente única de verdad para el vuelo/aterrizaje de las SkillCards.
 *
 * Reemplaza la lógica de scroll duplicada que antes vivía a la vez en
 * App.tsx y ExperienceSection.tsx (causa del "bug del modal"): ahora un
 * solo observador decide cuándo las tarjetas flotan y cuándo aterrizan.
 *
 * @param triggerRef  Elemento que marca la zona de aterrizaje (sección Skills).
 */
export function useFloatingSkills(
  triggerRef: RefObject<HTMLElement>
): FloatingSkillsState {
  const [isSticky, setIsSticky] = useState(false);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    const LAND_THRESHOLD = 150; // px desde el top del viewport
    const UNLAND_THRESHOLD = 500; // histéresis para evitar parpadeo

    const evaluate = () => {
      setIsSticky(window.scrollY > 50);

      const el = triggerRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top <= LAND_THRESHOLD) {
        setLanded(true);
      } else if (top > UNLAND_THRESHOLD) {
        setLanded(false);
      }
    };

    evaluate();
    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("resize", evaluate);
    return () => {
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
    };
  }, [triggerRef]);

  return { isSticky, landed };
}
