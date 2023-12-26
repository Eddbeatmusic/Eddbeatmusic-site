import image from 'assets/Portfolio/PolarityPuzzles/PolarityIconTiny.png';
import Sample from 'assets/Portfolio/PolarityPuzzles/PolarityMuestra.mp3';
import Short from 'assets/Portfolio/PolarityPuzzles/PolarityTiny.mp4';

const PolarityObject = {
  title: 'Polarity',
  quote:
    'Traverse a maze full of challenges with your retractable magnet gun in this first person puzzle solving game.',
  short: Short,
  firstSection: {
    left: [
      {
        title: 'Purpose',
        text: '18th ScoreSpace Jam (2022)',
      },
      {
        title: 'SERVICES',
        text: 'Music composition & sound design.',
      },
      {
        title: 'View live site',
        link: 'https://soulexx.itch.io/polarity-puzzles',
      },
    ],
    right: [
      {
        title: 'The challenge:',
        text: 'Create a track that matches the ambience of the game using mainly synths and drones. It should not distract but at the same time will properly accompany the player through the puzzle solving.',
      },
      {
        title: 'The concept:',
        text: 'An eeriness should be depicted by the different drones used through the piece, which will be introduced by a heavy bass. Synths with light passages will keep the monotony away and incite some calmness that the puzzle solving is meant to have.',
      },
    ],
  },
  playlist: {
    title: 'Polarity',
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [{ title: 'Polarity', audio: Sample }],
  },
  secondSection: {
    title: 'THE SOUNDTRACK',
    subtitle: 'The inspiration: ',
    text: 'Predominantly from Portal’s original soundtrack, as well as acousmatic music and minimalism, aside from other soundtracks of other puzzle solving games.',
  },
  credits: [
    {
      title: 'Developed by',
      by: 'Soulex',
    },
    {
      title: 'Music and audio by',
      by: 'Eduardo Hincapié',
    },
  ],
};

export default PolarityObject;
