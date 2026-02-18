import type { Language } from '../../../shared/lib/i18n'

interface LanguageSwitcherProps {
  label: string
  value: Language
  onChange: (language: Language) => void
}

export const LanguageSwitcher = ({ label, value, onChange }: LanguageSwitcherProps) => {
  return (
    <label className="header-control">
      <span className="header-control__label">{label}</span>
      <select
        className="header-control__select"
        value={value}
        onChange={(event) => onChange(event.target.value as Language)}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </label>
  )
}
