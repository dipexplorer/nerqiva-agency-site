// Audio synthesis feature disabled per studio design direction.
// Clean silent interface with zero unwanted browser sound effects.

class SoundFX {
  public enabled: boolean = false;
  public click() {}
  public tick() {}
  public tapeClick() {}
  public shutter() {}
  public success() {}
}

export const sound = new SoundFX();
