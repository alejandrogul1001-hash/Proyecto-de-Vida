// Ultra-lightweight, zero-dependency Web Audio API sound synthesizer
// Designed specifically for subtle, non-intrusive UI interactions (hover, click, modal, success)

class SoundManager {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;
  private lastHoverTime: number = 0;

  constructor() {
    // Check initial state from localStorage
    try {
      const stored = localStorage.getItem('ui_sounds_enabled');
      if (stored !== null) {
        this.enabled = stored === 'true';
      }
    } catch {
      this.enabled = true;
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public setEnabled(val: boolean) {
    this.enabled = val;
    try {
      localStorage.setItem('ui_sounds_enabled', String(val));
    } catch {}
    if (val) {
      this.playClick();
    }
  }

  public toggle(): boolean {
    this.setEnabled(!this.enabled);
    return this.enabled;
  }

  // Subtle airy glass tick for hover interactions (debounced to avoid clustering)
  public playHover() {
    if (!this.enabled) return;
    const now = Date.now();
    if (now - this.lastHoverTime < 55) return; // 55ms throttle
    this.lastHoverTime = now;

    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      // Quick descending micro-frequency from 1150Hz to 850Hz
      osc.frequency.setValueAtTime(1150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(850, this.ctx.currentTime + 0.03);

      // Low, subtle gain (volume) so it's whisper-soft
      gain.gain.setValueAtTime(0.012, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {}
  }

  // Crisp, tactile haptic click sound
  public playClick() {
    if (!this.enabled) return;

    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      // Crisp mechanical tap
      osc.frequency.setValueAtTime(480, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.032, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.055);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {}
  }

  // Pleasant dual-tone major chord for success (e.g. copying link, downloading, modal open)
  public playSuccess() {
    if (!this.enabled) return;

    try {
      this.initContext();
      if (!this.ctx) return;

      const t0 = this.ctx.currentTime;
      [587.33, 880].forEach((freq, i) => { // D5 and A5
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t0 + i * 0.06);

        gain.gain.setValueAtTime(0.025, t0 + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + i * 0.06 + 0.18);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t0 + i * 0.06);
        osc.stop(t0 + i * 0.06 + 0.2);
      });
    } catch {}
  }

  // Soft subtle whoosh for modal transition or slide change
  public playTransition() {
    if (!this.enabled) return;

    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.018, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch {}
  }
}

export const soundManager = new SoundManager();
