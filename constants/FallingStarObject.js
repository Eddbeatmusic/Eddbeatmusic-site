import image from 'assets/Portfolio/FallingStar/FallingStarImageTiny.png';
import Sample from 'assets/Portfolio/FallingStar/FallingStarMuestra.mp3';
import Short from 'assets/Portfolio/FallingStar/FallingStarTiny.mp4';

const FallingStarObject = {
  title: 'FallingStar',
  quote: 'Reach out and don’t let go',
  short: Short,
  firstSection: {
    left: [
      {
        title: 'COLLABORATION',
        text: 'Anya.Ilust',
      },
      {
        title: 'SERVICES',
        text: 'Music composition.',
      },
    ],
    right: [
      {
        title: 'The challenge:',
        text: 'Create orchestral music piece that depict the drama of the animation, maintaining the magical realism that is being presented.',
      },
      {
        title: 'The concept:',
        text: 'Through the use of piano an idea will be presented which will be later be exploited and developed by the rest of the orchestra. The strings will maintain the rhythm accompanied by percussion and having the winds as support, later to be enhanced by the brass section. All of this in order to create a sense of wonder and suspense/drama at the same time.',
      },
    ],
  },
  playlist: {
    title: 'Falling Star',
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [{ title: 'Falling Star', audio: Sample }],
  },
  secondSection: {
    title: 'THE MUSIC',
    subtitle: 'The inspiration: ',
    text: 'Inspired on Joe Hisaishi’s work for the Studio Ghibli’s movies, as well as the acclaimed game tLoZ: Breath of the Wild’s soundtrack.',
  },
  credits: [
    {
      title: 'Illustration by',
      by: 'Anya.Ilust',
    },
    {
      title: 'Music composed by',
      by: 'Eduardo Hincapié',
    },
    {
      title: 'Animation by',
      by: 'Wilson Palacio',
    },
  ],
};

export default FallingStarObject;
