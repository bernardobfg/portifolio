
import { useProvider } from '../../Provider';
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"
import { ToggleDiv} from './styles';

export const ToggleBtn = () => {
  const { themeName, setThemeName, icon, setIcon } = useProvider();
  const handleClick = async (e) => {
    e.preventDefault()
    localStorage.setItem("theme",themeName === "light" ? "dark" : "light")
    await setThemeName(themeName === "light" ? "dark" : "light")
    await setIcon(icon === Sun ? Moon : Sun)
}
  return (
    <ToggleDiv onClick={handleClick} themeName={themeName}>
      <span>
        <img src={icon} alt="icon" />
      </span>
    </ToggleDiv>
  )
};
