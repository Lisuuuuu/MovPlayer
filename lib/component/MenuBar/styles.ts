import { sva } from "@/styled-system/css";

export const MenuBarStyles = sva({
    slots: ['menu'],
    base: {
        menu: {
            height: '100vh',
            width: '15rem',
            backgroundColor: '#292929',
            display: 'flex',
            borderRightRadius: '15px',
            justifyContent: 'left',
            alignItems: 'center',
        }
    }
})