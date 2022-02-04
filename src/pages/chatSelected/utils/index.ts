const conversationData = [
  {
    own: false,
    content:
      'Hey! Look, an interesting piece of lunar space history surfaced here - NASA at some point asked Hasselblad to adapt the SWC model for flights to the moon. Now we all know that astronauts flew with the 500 EL model - and by the way, all the carcasses of these cameras are still on the surface of the Moon, since the astronauts took with them only cassettes with film. Hasselblad eventually adapted SWC for space, but something went wrong and they never hit the rocket. A total of 25 of them were produced, one of which was recently sold at an auction for 45,000 euros.',
    status: null,
    time: '16:20',
  },
  {
    own: false,
    content: `<img src='${require('../../../../../../static/images/cameraPhoto.png')}'>`,
    status: null,
    time: '16:20',
  },
  {
    own: true,
    content: 'Cool!',
    status: 'status: read',
    time: '16:20',
  },
];

export default conversationData;
