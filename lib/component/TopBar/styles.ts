import { sva } from "@/styled-system/css";

export const TopBarStyles = sva({
    slots: ['bar', 'bartext', 'MainSite', 'SearchBar'],
    base: {
        bar: {
            '--nav-height': '2%',
            height: 'var(--nav-height)',

            position: 'fixed',
            width: '100%',
            backgroundColor: '#292929',

            justifyContent: 'top',
            alignItems: 'center',

        },

        bartext: {
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            gap: '15%',
        },
        MainSite: {
            _hover: {
                cursor: 'pointer',
                backgroundColor: '#ffffff',
                opacity: '10%',
            }
        }
    }
})

