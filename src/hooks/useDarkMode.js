import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
 const [localStorage, setLocalStorage] = useLocalStorage('darkmode')

 return [localStorage, setLocalStorage]
}
export default useDarkMode