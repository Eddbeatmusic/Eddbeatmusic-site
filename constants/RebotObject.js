import Banner from 'assets/Portfolio/Rebot/RebotImageTiny.png';
import image from 'assets/Portfolio/Rebot/RebotIconTiny.png';
import Sample from 'assets/Portfolio/Rebot/RebotMuestra.mp3';
import Short from 'assets/Portfolio/Rebot/RebotTiny.mp4';

const RebotObject = {
  title: 'Rebot',
  quote:
    "Help “Fix” repair itself by collecting bolts as you progress in this infinite scroller game. Enjoy the 20's aesthetic while you play this vintage inspired video game.",
  banner: Banner,
  short: Short,
  firstSection: {
    left: [
      {
        title: 'Purpose',
        text: 'Global Game Jam (2020)',
      },
      {
        title: 'SERVICES',
        text: 'Music composition & sound design.',
      },
      {
        title: 'View live site',
        link: 'https://globalgamejam.org/2020/games/rebot-1-0',
      },
    ],
    right: [
      {
        title: 'The challenge:',
        text: 'Combine both 20’s big band jazz with electronic synth music in order to create an aesthetic that matches the theme and period of the game’s trope. Must be layered.',
      },
      {
        title: 'The concept:',
        text: 'Three layers, each of them will give more density to the music. The first shall be in 16-bit using synths. The second layer will depict more clearly the jazz genre with the adherence of a piano, finally adding the big band to fully encapsulate the aesthetic on the third layer.',
      },
    ],
  },
  playlist: {
    title: 'Rebot',
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [{ title: 'Rebot', audio: Sample }],
  },
  secondSection: {
    title: 'THE SOUNDTRACK',
    subtitle: 'The inspiration: ',
    text: 'Predominantly from big band jazz and electro swing, aside from the original soundtrack of Cup Head.',
  },
  credits: [
    {
      title: 'Character design by',
      by: 'Andrés F. Gallego',
    },
    {
      title: 'Programing by',
      by: 'Andrés Cano',
    },
    {
      title: 'Background by',
      by: 'Samuel Rodríguez',
    },
    {
      title: 'Programing by',
      by: 'Gabriel Cornejo',
    },
    {
      title: 'Animation by',
      by: 'Mariana Cano',
    },
    {
      title: 'Music and audio by',
      by: 'Eduardo Hincapié',
    },
  ],
};

export default RebotObject;
