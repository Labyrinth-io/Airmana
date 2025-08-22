import { useEffect, useRef } from 'react';

export const useKeySequence = (
  sequence: string,
  callback: () => void,
  timeout: number = 4000
) => {
  const keysPressed = useRef<string>('');
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore if any input field is focused
      const activeElement = document.activeElement;
      if (
        activeElement &&
        (activeElement.tagName === 'INPUT' ||
          activeElement.tagName === 'TEXTAREA' ||
          activeElement.contentEditable === 'true')
      ) {
        return;
      }

      // Add the pressed key to our sequence
      keysPressed.current += event.key;

      // Clear timeout and set new one
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        keysPressed.current = '';
      }, timeout);

      // Check if sequence matches
      if (keysPressed.current === sequence) {
        keysPressed.current = '';
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        callback();
      } else if (!sequence.startsWith(keysPressed.current)) {
        // Reset if sequence doesn't match
        keysPressed.current = '';
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [sequence, callback, timeout]);
};