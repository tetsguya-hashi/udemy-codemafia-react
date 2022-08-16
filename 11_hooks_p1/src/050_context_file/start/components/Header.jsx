import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme = (e) => setTheme(e.target.value);
  const THEMES = ['light', 'dark', 'red'];

  return (
    <header className={`content-${theme}`}>
      {THEMES.map(_themes => {
        return (
          <label key={_themes}>
            <input type="radio" value={_themes} checked={theme === _themes} onChange={changeTheme} />
            {_themes}
          </label>
        )
      })}
    </header>
  )
};

export default Header;
