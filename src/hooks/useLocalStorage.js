import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStroage.getItem(key)
        return item ? JSON.parse(item) : (initialValue)
    })
    return [storedValue]
}