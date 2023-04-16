import Short from 'assets/Portfolio/Panacea/PanaceaTiny.mp4';
import image from 'assets/Portfolio/Panacea/PanaceaImageTiny.png';

import sample1 from 'assets/Portfolio/Panacea/SoundtrackPreview/PanaceaBeach(Preview).mp3';
import sample2 from 'assets/Portfolio/Panacea/SoundtrackPreview/PanaceaCombatTheme(Preview).mp3';
import sample3 from 'assets/Portfolio/Panacea/SoundtrackPreview/PanaceaForest(Preview).mp3';
import sample4 from 'assets/Portfolio/Panacea/SoundtrackPreview/PanaceaVolcano(Preview).mp3';
import sample5 from 'assets/Portfolio/Panacea/SoundtrackPreview/PanaceaTitleScreen(Preview).mp3';
import sample6 from "assets/Portfolio/Panacea/SoundtrackPreview/Rona'sRage(Preview).mp3";
import sample7 from "assets/Portfolio/Panacea/SoundtrackPreview/Rona'sTheme(Preview).mp3";

const PanaceaObject = {
  title: 'Panacea',
  quote:
    'A turn-based RPG following three professionals as they traverse the virus-ridden island in search of the source of malice.',
  short: Short,
  firstSection: {
    left: [
      {
        title: 'Purpose',
        text: 'TAMU LIVE Lab Covid Jam (2020)',
      },
      {
        title: 'SERVICES',
        text: 'Video game soundtrack',
      },
      {
        title: 'View live site',
        link: 'https://undeadknight11.itch.io/panacea',
      },
    ],
    right: [
      {
        title: 'The challenge:',
        text: 'Create music that matches the aesthetics of the game keeping in mind that it is set on an island as well as to be quirky and funny, yet gets more serious as the game progresses.',
      },
      {
        title: 'The concept:',
        text: 'Through the use of synths, create a 16-bit foundation for the soundtrack, that combined with the use of percussive instruments like a marimba and congas will create an RPG atmosphere in the island it takes place that it’s both adventurous and fun.',
      },
    ],
  },
  playlist: {
    title: 'Panacea',
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [
      { title: 'Panacea Beach (Preview)', audio: sample1 },
      { title: 'Panacea Combat Theme (Preview)', audio: sample2 },
      { title: 'Panacea Forest (Preview)', audio: sample3 },
      { title: 'Panacea Volcano (Preview)', audio: sample4 },
      { title: 'Panacea Title Screen (Preview)', audio: sample5 },
      { title: "Rona's Rage (Preview)", audio: sample6 },
      { title: "Rona's Theme(Preview)", audio: sample7 },
    ],
  },
  secondSection: {
    title: 'THE SOUNDTRACK',
    subtitle: 'The inspiration: ',
    text: 'Influenced on the “sillier” aspects of classic RPGs soundtracks, especially Super Mario’s, as well as tropipop and electronic music genres.',
  },
  credits: [
    {
      title: 'Programming (Combat Game-play) & Combat Designer',
      by: 'LLOYD DONELAN',
    },
    {
      title: 'Programming Overworld Mechanics, Pixel Art & Animation',
      by: 'CHRISTOPHER KORNOSKY',
    },
    {
      title: 'Character Design & Writing',
      by: 'CARA BAXTER',
    },
    {
      title: 'Original Soundtrack Composed by',
      by: 'Eduardo Hincapié',
    },
  ],
};

export default PanaceaObject;
