// Time-of-day Professional Aesthetic Theme Manager
// Shifts background and accent colors according to the time of day or manual selection

export type TimeTheme = 'auto' | 'dawn' | 'day' | 'sunset' | 'night';

class ThemeManager {
  private currentTheme: TimeTheme = 'auto';

  constructor() {
    try {
      const saved = localStorage.getItem('espoch_time_theme') as TimeTheme;
      if (saved) {
        this.currentTheme = saved;
      }
    } catch {}
  }

  public getTheme(): TimeTheme {
    return this.currentTheme;
  }

  public setTheme(theme: TimeTheme) {
    this.currentTheme = theme;
    try {
      localStorage.setItem('espoch_time_theme', theme);
    } catch {}
    this.applyTheme();
  }

  public getResolvedTheme(): 'dawn' | 'day' | 'sunset' | 'night' {
    if (this.currentTheme !== 'auto') {
      return this.currentTheme;
    }
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 9) return 'dawn';     // 5am - 9am: Dawn amber
    if (hour >= 9 && hour < 17.5) return 'day';   // 9am - 5:30pm: Politécnico Blue (Day)
    if (hour >= 17.5 && hour < 20) return 'sunset'; // 5:30pm - 8pm: Sunset coral
    return 'night';                               // 8pm - 5am: Deep night obsidian
  }

  public applyTheme() {
    if (typeof document === 'undefined') return;
    const resolved = this.getResolvedTheme();
    document.documentElement.setAttribute('data-time-theme', resolved);
  }
}

export const themeManager = new ThemeManager();
