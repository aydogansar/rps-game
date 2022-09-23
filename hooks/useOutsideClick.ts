import { useRef, useEffect } from "react";

interface Props {
  disabled?: boolean;
  handler: (event: Event) => void;
}

const useOutsideClick = ({ disabled = false, handler }: Props) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      if (!disabled) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, disabled, handler]);

  return { ref };
};

export default useOutsideClick;
