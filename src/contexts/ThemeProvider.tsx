import {
  createContext, FC, ReactNode, ReducerWithoutAction, useContext, useMemo,
  useReducer, useEffect,
} from 'react';


type Theme = 'light' | 'dark'

interface ThemeContext {
  theme: Theme,
  onToggleTheme: () => void
}

const Context = createContext({} as ThemeContext);

export const useThemeContext = () => {
  return useContext(Context);
};

const themeReducer: ReducerWithoutAction<Theme> = (state) => {
  if (state === 'light') {
    return 'dark';
  }
  return 'light';
};

const initialTheme = (): Theme => {
  const theme = localStorage.getItem('portfolio-theme');
  if (theme) {
    return theme as Theme;
  }
  return 'light';
};

/**
 *
 * @description ThemeProvider for light and dark mode.
 */
export const ThemeProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useReducer(themeReducer, initialTheme());

  const onToggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      localStorage.setItem('portfolio-theme', 'light');
    }
    setTheme();
  };

  const memoizedValues = useMemo(() => {
    return { theme, onToggleTheme };
  }, [theme]);

  useEffect(() => {
    (document.querySelector('body') as HTMLElement)
      .setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <Context.Provider value={memoizedValues}>
      {children}
    </Context.Provider>
  );
};
