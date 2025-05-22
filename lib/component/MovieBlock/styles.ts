import { sva } from "@/styled-system/css";

export const MovieBlockStyles = sva({
    slots: ['block'],
    base: {
        block: {
            height: '80%',
            width: '80%',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            borderRadius: '12px',
            border: '1px solid #333',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            transition: 'all 1s ease-out'
        }

    }
})