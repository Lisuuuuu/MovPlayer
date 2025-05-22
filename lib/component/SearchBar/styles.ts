import { sva } from "@/styled-system/css";

export const SearchBarStyles = sva({
    slots: ['bar', 'barstyle', 'searchContainer', 'searchInputContainer', 'searchIcon', 'searchInput', 'closeIcon'] as const,
    base: {
        bar: {
            width: '100%',
            maxWidth: '600px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            border: '1px solid #333',
            padding: '0 20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            transition: 'all 1s ease-out',
            _hover: {
                border: '1px solid #555',
                transform: 'translateY(-1px)',
            },
            _focus: {
                border: '1px solid #007acc',
                boxShadow: '0 0 0 3px rgba(0, 122, 204, 0.1)',
            }
        },
        barstyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '2rem',
        },
        searchContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '12px'
        },
        searchInputContainer: {
            display: 'flex',
            alignItems: 'center',
            flex: '1',
            gap: '12px'
        },
        searchIcon: {
            color: '#888',
            flexShrink: '0',
            transition: 'color 0.2s ease',
        },
        searchInput: {
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: '18px',
            fontWeight: '400',
            flex: '1',
            color: '#ffffff',
            lineHeight: '1.5',
            minWidth: '0',
            _placeholder: {
                color: '#666',
                fontWeight: '300'
            },
            _focus: {
                color: '#ffffff'
            }
        },
        closeIcon: {
            cursor: 'pointer',
            color: '#666',
            flexShrink: '0',
            padding: '4px',
            borderRadius: '6px',
            transition: 'all 0.2s ease',
            _hover: {
                color: '#ffffff',
                backgroundColor: '#333',
                transform: 'scale(1.1)'
            },
            _active: {
                transform: 'scale(0.95)'
            }
        }
    }
});
