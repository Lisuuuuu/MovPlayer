import { sva } from "@/styled-system/css";

export const TopBarStyles = sva({
    slots: ['bar', 'bartext', 'MainSite', 'modalOverlay', 'modalContent'] as const,
    base: {
        bar: {
            '--nav-height': '1.75rem',
            height: 'var(--nav-height)',
            width: '100%',
            backgroundColor: '#292929',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            gap: '15rem',


        },
        bartext: {
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            gap: '15rem',

            height: 'var(--nav-height)',
        },
        MainSite: {
            _hover: {
                cursor: 'pointer',
                backgroundColor: '#777',
            }
        },
        modalOverlay: {
            position: 'fixed',
            inset: '0',
            zIndex: '50',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
        },
        modalContent: {
            width: '100%',
            maxWidth: '32rem',
            transform: 'scale(1)',
            transition: 'all 0.2s ease-out'
        }
    }
});