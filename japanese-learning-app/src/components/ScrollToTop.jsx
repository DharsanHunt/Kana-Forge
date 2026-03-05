import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    // Disable browser's built-in scroll restoration on refresh
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Scroll to top on initial page load / refresh
        window.scrollTo(0, 0);

        return () => {
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, []);

    // Scroll to top on every route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
