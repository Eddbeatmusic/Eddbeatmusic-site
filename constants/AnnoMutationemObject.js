import image from 'assets/Portfolio/AnnoMutationem/AnnoMutationemImageTiny.png';
import Short from 'assets/Portfolio/AnnoMutationem/AnnoMutationemTiny.mp4';

import sample1 from 'assets/Portfolio/AnnoMutationem/SoundtrackPreview/SetThingsInMotion(Preview).mp3';
import sample2 from 'assets/Portfolio/AnnoMutationem/SoundtrackPreview/NeonMetropolis(Preview).mp3';
import sample3 from 'assets/Portfolio/AnnoMutationem/SoundtrackPreview/LateNightCity(Preview).mp3';
import sample4 from 'assets/Portfolio/AnnoMutationem/SoundtrackPreview/LateNightBar(Preview).mp3';

const AnnoMutationemObject = {
  title: 'Anno Mutationem (Reimagined)',
  quote:
    '…Become Ann: a highly-skilled combat-trained lone wolf on a personal mission in this action-adventure game with RPG elements set in a cyberpunk world.',
  short: Short,
  firstSection: {
    left: [
      {
        title: 'PURPOSE',
        text: 'Reimagine soundtrack//portfolio.',
      },
      {
        title: 'SERVICES',
        text: 'Music composition.',
      },
    ],
    right: [
      {
        title: 'The challenge:',
        text: 'Explore the genre through the creation of a different original soundtrack for 3 distinct instances of the game. It must match the aesthetic and needs of the scenes that are set in a cyberpunk world, as well as use the instruments required for it.',
      },
      {
        title: 'The concept:',
        text: 'The music shall be created using mainly synth and electronic instruments, creating an atmosphere proper for the visuals.\nThe introduction will give the idea of what’s to come to the player.\nThe combat music shall be engaging and heroic yet give a sense of distraught, making the player feel “cool” while in combat yet challenged.\nAs for the ambience in general, it should be layered as it will help transpose the player to the changing sceneries that the game brings them.',
      },
    ],
  },
  playlist: {
    title: 'Anno Mutationem (Reimagined)',
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [
      { title: 'Set Things In Motion (Preview)', audio: sample1 },
      { title: 'Neon Metropolis (Preview)', audio: sample2 },
      { title: 'Late Night City (Preview)', audio: sample3 },
      { title: 'Late Night Bar (Preview)', audio: sample4 },
    ],
  },
  secondSection: {
    title: 'THE SOUNDTRACK',
    subtitle: 'The inspiration: ',
    text: 'Mainly on the games Stray, Furi and Mirror’s edge soundtracks, aside from other games that use cyberpunk or dystopian futurism as their main theme for their aesthetics. As well as the music genres vaporwave and electro jazz.',
  },
  credits: [
    {
      title: 'Developed by',
      by: 'ThinkingStars',
    },
    {
      title: 'Reimagined soundtrack by',
      by: 'Eduardo Hincapié',
    },
  ],
};

export default AnnoMutationemObject;
