//import Banner from "assets/Portfolio/Serenidad/SerenidadImage.png";
import image from 'assets/Portfolio/Serenidad/SerenidadIconTiny.png';
import Sample from 'assets/Portfolio/Serenidad/SerenidadMuestra.mp3';
import Short from 'assets/Portfolio/Serenidad/SerenidadTiny.mp4';

const SerenidadObject = {
  title: 'Serenidad',
  quote: 'As the spring comes, her serenity frames itself…',
  banner: image,
  short: Short,
  firstSection: {
    left: [
      {
        title: 'Collaboration',
        text: 'Daniela S. Alzate (2021)',
      },
      {
        title: 'SERVICES',
        text: 'Music composition',
      },
    ],
    right: [
      {
        title: 'The challenge:',
        text: 'Properly portray the calm and serenity through an orchestral piece, this time limited to harps, winds and strings.',
      },
      {
        title: 'The concept:',
        text: 'The String section will create the foundation for the harmony as the harps create the path for the winds to follow, who will sometimes support the strings as well on the harmony.',
      },
    ],
  },
  playlist: {
    title: 'Serenidad',
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [{ title: 'Serenidad', audio: Sample }],
  },
  secondSection: {
    title: 'THE MUSIC',
    subtitle: 'The inspiration: ',
    text: 'Mainly from the orchestral classical ambient genre, as well as the work of Claude Debussy and Jhon Williams.',
  },
  credits: [
    {
      title: 'Illustratrion by',
      by: 'Daniela S. alzate',
    },
    {
      title: 'Trailer music Composed by',
      by: 'EDUARDO HINCAPIE ',
    },
    {
      title: 'Animation by',
      by: 'Juan Pablo Martínez',
    },
  ],
};

export default SerenidadObject;
