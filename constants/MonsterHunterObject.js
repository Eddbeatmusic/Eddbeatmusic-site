import image from 'assets/Portfolio/MonsterHunterWorld/MonsterHunterImageTiny.png';
import Short from 'assets/Portfolio/MonsterHunterWorld/MonsterHunterTiny.mp4';

import sample1 from 'assets/Portfolio/MonsterHunterWorld/SoundtrackPreview/ANewExpedition(Preview).mp3';
import sample2 from 'assets/Portfolio/MonsterHunterWorld/SoundtrackPreview/ChaseThyPrey(Preview).mp3';
import sample3 from 'assets/Portfolio/MonsterHunterWorld/SoundtrackPreview/SiezeYourTriumph(Preview).mp3';
import sample4 from 'assets/Portfolio/MonsterHunterWorld/SoundtrackPreview/TheHuntBegins(Preview).mp3';

const MonsterHunterObject = {
  title: 'Monster Hunter World (Reimagined)',
  quote:
    '…enjoy the ultimate hunting experience! Use everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.',
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
        text: 'Create an outstanding different soundtrack for 3 moments of the gameplay. I’ll make my own approach to the franchise yet try not stray too far from the original material. I’ll make use of an orchestra, folkloric and indigenous instruments for the composition of the material in order to enhance the world building.',
      },
      {
        title: 'The concept:',
        text: 'The introduction to the ambient music will announce the adventure and glory ahead with the leitmotiv.The ambient music nonetheless must be subtle and clam, accompany the narrative of a hunter looking for his prey.\nThe combat music will be layered, with a grand stinger supporting the danger in front of the player.One layer shall constantly remain the action and danger the player is facing, the other will let them know they are “winning” and encourage them to pursue their hunt.\nAs for the victory fanfare, it shall be joyful and rewarding.',
      },
    ],
  },
  playlist: {
    title: 'Monster Hunter World (Reimagined)',
    image,
    soundcloud: '',
    bandcamp: '',
    tracks: [
      { title: 'A New Expedition (Preview)', audio: sample1 },
      { title: 'Chase Thy Prey (Preview)', audio: sample2 },
      { title: 'Sieze Your Triumph (Preview)', audio: sample3 },
      { title: 'The Hunt Begins (Preview)', audio: sample4 },
    ],
  },
  secondSection: {
    title: 'THE SOUNDTRACK',
    subtitle: 'The inspiration: ',
    text: 'Mainly on the soundtrack of the franchise as well as other contemporary RPGs.',
  },
  credits: [
    {
      title: 'Developed by',
      by: 'CAPCOM Co., ltd.',
    },
    {
      title: 'Reimagined soundtrack by',
      by: 'Eduardo Hincapié',
    },
  ],
};

export default MonsterHunterObject;
