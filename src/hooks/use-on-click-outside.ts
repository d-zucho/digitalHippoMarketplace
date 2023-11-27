'use client';
import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <
	T extends HTMLElement = HTMLElement
>(
	ref: RefObject<T>, // parameter 1
	handler: (event: Event) => void // parameter 2
) => {
	useEffect(() => {
		const listener = (event: Event) => {
			const el = ref?.current;

			// if click was outside current element, close menu
			if (!el || el.contains((event?.target as Node) || null)) {
				return;
			}

			handler(event); // call the handler only if the click is outside of the element passed
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]); // Reload only if ref or handler changes
};
