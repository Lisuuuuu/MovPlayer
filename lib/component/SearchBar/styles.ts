import { sva } from "@/styled-system/css";

export const SearchBarStyles = sva({
    slots: ['bar', 'barstyle'],
    base: {

        bar: {
            width: '35rem',
            height: '2rem',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            backgroundColor: '#292929',
            borderRadius: '30px',
            border: '1px solid #444',
            padding: '0.25rem',
            _hover: {
                cursor: 'text',
            }

        },
        barstyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',

        }
    }
})