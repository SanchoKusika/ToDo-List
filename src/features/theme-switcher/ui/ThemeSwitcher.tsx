import { useEffect } from 'react'

import type { ThemeMode } from '../model/themeStore'

interface ThemeSwitcherProps {
  label: string
  lightLabel: string
  darkLabel: string
  autoLabel: string
  value: ThemeMode
  onChange: (mode: ThemeMode) => void
  syncWithSystemTheme: () => void
}

export const ThemeSwitcher = ({
  label,
  lightLabel,
  darkLabel,
  autoLabel,
  value,
  onChange,
  syncWithSystemTheme,
}: ThemeSwitcherProps) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      syncWithSystemTheme()
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [syncWithSystemTheme])

  return (
    <label className="header-control">
      <span className="header-control__label">{label}</span>
      <select
        className="header-control__select"
        value={value}
        onChange={(event) => onChange(event.target.value as ThemeMode)}
      >
        <option value="light">{lightLabel}</option>
        <option value="dark">{darkLabel}</option>
        <option value="auto">{autoLabel}</option>
      </select>
    </label>
  )
}
