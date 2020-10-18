/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Get supported media formats (audio & video)
 */
export default ((): any => {
  const audio = new Audio();
  const video = document.createElement('video');

  function canPlay(
    type: HTMLAudioElement | HTMLVideoElement,
    mimeType: string
  ): boolean {
    const support = type.canPlayType(mimeType);

    return !!(support === 'probably' || support === 'maybe');
  }

  return {
    audio: {
      MP3: canPlay(audio, 'audio/mpeg'),
      Ogg: canPlay(audio, 'audio/ogg'),
      WAV: canPlay(audio, 'audio/wav'),
    },
    video: {
      HLS:
        canPlay(video, 'application/vnd.apple.mpegURL') ||
        canPlay(video, 'application/x-mpegurl'),
      MP4: canPlay(video, 'video/mp4'),
      Ogg: canPlay(video, 'video/ogg'),
      WebM: canPlay(video, 'video/webm'),
    },
  };
})();
