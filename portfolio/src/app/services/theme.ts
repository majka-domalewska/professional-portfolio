import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private readonly storageKey = 'theme';
  private _isDark = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  get isDark(): boolean {
    return this._isDark;
  }

  toggleTheme(): void {
    this.setTheme(!this._isDark, true);
  }

  private initTheme(): void {
    const stored = localStorage.getItem(this.storageKey);

    if (stored === 'dark' || stored === 'light') {
      this.setTheme(stored === 'dark', false);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(prefersDark, false);

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        if (!localStorage.getItem(this.storageKey)) {
          this.setTheme(e.matches, false);
        }
      });
  }

  private setTheme(isDark: boolean, persist: boolean): void {
    this._isDark = isDark;
    const html = document.documentElement;

    if (isDark) {
      this.renderer.addClass(html, 'dark');
      if (persist) localStorage.setItem(this.storageKey, 'dark');
    } else {
      this.renderer.removeClass(html, 'dark');
      if (persist) localStorage.setItem(this.storageKey, 'light');
    }
  }
}
