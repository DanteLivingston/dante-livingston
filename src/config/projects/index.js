import template from './template/config';
import digitalTextures from './digital-textures/config';

const projects = [
  template,
  digitalTextures,
  {
    slug: 'distributed',
    title: 'erat volutpat in',
    description: 'sem fusce consequat nulla nisl nunc nisl duis bibendum felis',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/214x140.png/5fa2dd/ffffff',
        title: 'adipiscing elit',
      },
      {
        url: 'http://dummyimage.com/101x155.jpg/5fa2dd/ffffff',
        title: 'felis sed interdum venenatis',
      },
      {
        url: 'http://dummyimage.com/157x111.bmp/5fa2dd/ffffff',
        title: 'suscipit a feugiat et',
      },
      {
        url: 'http://dummyimage.com/233x215.bmp/dddddd/000000',
        title: 'cubilia curae mauris viverra',
      },
      {
        url: 'http://dummyimage.com/149x182.bmp/dddddd/000000',
        title: 'vel lectus in quam fringilla',
      },
    ],
  },
  {
    slug: 'client-server',
    title: 'interdum venenatis turpis',
    description:
      'nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/104x141.bmp/ff4444/ffffff',
        title: 'aliquet maecenas leo odio condimentum',
      },
      {
        url: 'http://dummyimage.com/116x227.bmp/5fa2dd/ffffff',
        title: 'felis sed lacus morbi',
      },
    ],
  },
  {
    slug: 'toolset',
    title: 'nec nisi vulputate nonummy maecenas',
    description:
      'magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/142x135.bmp/5fa2dd/ffffff',
        title: 'est donec',
      },
      {
        url: 'http://dummyimage.com/231x183.jpg/dddddd/000000',
        title: 'convallis morbi odio',
      },
    ],
  },
  {
    slug: 'attitude',
    title: 'sit amet',
    description:
      'sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/220x192.bmp/cc0000/ffffff',
        title: 'sem sed sagittis',
      },
      {
        url: 'http://dummyimage.com/187x134.png/5fa2dd/ffffff',
        title: 'pretium iaculis diam',
      },
    ],
  },
  {
    slug: 'systematic',
    title: 'at nulla suspendisse potenti cras',
    description:
      'sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/192x220.png/ff4444/ffffff',
        title: 'justo aliquam quis',
      },
      {
        url: 'http://dummyimage.com/214x171.jpg/dddddd/000000',
        title: 'libero non',
      },
      {
        url: 'http://dummyimage.com/191x147.bmp/dddddd/000000',
        title: 'suspendisse potenti nullam',
      },
    ],
  },
  {
    slug: 'composite',
    title: 'habitasse platea dictumst morbi vestibulum',
    description:
      'pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/206x148.bmp/ff4444/ffffff',
        title: 'eget massa',
      },
    ],
  },
  {
    slug: 'business-focused',
    title: 'arcu libero rutrum ac',
    description:
      'morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/125x171.jpg/5fa2dd/ffffff',
        title: 'semper sapien a libero nam',
      },
    ],
  },
  {
    slug: 'context-sensitive',
    title: 'lorem vitae',
    description:
      'viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/218x240.bmp/ff4444/ffffff',
        title: 'ac consequat metus',
      },
      {
        url: 'http://dummyimage.com/214x152.jpg/cc0000/ffffff',
        title: 'neque duis bibendum morbi non',
      },
      {
        url: 'http://dummyimage.com/138x181.jpg/dddddd/000000',
        title: 'sed augue aliquam',
      },
    ],
  },
  {
    slug: 'front-line',
    title: 'neque sapien placerat ante nulla',
    description:
      'quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/233x239.jpg/dddddd/000000',
        title: 'luctus rutrum nulla tellus in',
      },
      {
        url: 'http://dummyimage.com/119x195.png/dddddd/000000',
        title: 'hac habitasse',
      },
      {
        url: 'http://dummyimage.com/206x157.png/cc0000/ffffff',
        title: 'dolor sit amet consectetuer',
      },
    ],
  },
  {
    slug: 'balanced',
    title: 'libero nam dui proin leo',
    description:
      'eu massa donec dapibus duis at velit eu est congue elementum in hac',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/148x198.jpg/5fa2dd/ffffff',
        title: 'quis orci nullam molestie nibh',
      },
    ],
  },
  {
    slug: 'profit-focused',
    title: 'suspendisse potenti nullam',
    description:
      'facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/164x194.png/dddddd/000000',
        title: 'adipiscing elit proin risus',
      },
      {
        url: 'http://dummyimage.com/160x127.bmp/dddddd/000000',
        title: 'donec vitae nisi nam',
      },
      {
        url: 'http://dummyimage.com/144x183.jpg/cc0000/ffffff',
        title: 'nibh in lectus pellentesque',
      },
      {
        url: 'http://dummyimage.com/230x127.bmp/5fa2dd/ffffff',
        title: 'augue quam sollicitudin',
      },
    ],
  },
  {
    slug: 'programmable',
    title: 'est et',
    description:
      'lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/156x171.bmp/dddddd/000000',
        title: 'faucibus accumsan odio curabitur',
      },
      {
        url: 'http://dummyimage.com/157x143.bmp/cc0000/ffffff',
        title: 'pede malesuada in imperdiet',
      },
      {
        url: 'http://dummyimage.com/141x226.bmp/cc0000/ffffff',
        title: 'platea dictumst maecenas ut',
      },
    ],
  },
  {
    slug: 'exclusive',
    title: 'integer tincidunt ante vel ipsum',
    description:
      'aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/243x219.png/cc0000/ffffff',
        title: 'vestibulum eget vulputate ut',
      },
      {
        url: 'http://dummyimage.com/168x135.jpg/ff4444/ffffff',
        title: 'ut suscipit',
      },
      {
        url: 'http://dummyimage.com/114x133.bmp/ff4444/ffffff',
        title: 'elementum eu interdum eu tincidunt',
      },
      {
        url: 'http://dummyimage.com/219x161.png/cc0000/ffffff',
        title: 'duis bibendum felis sed interdum',
      },
      {
        url: 'http://dummyimage.com/144x166.png/5fa2dd/ffffff',
        title: 'sociis natoque',
      },
    ],
  },
  {
    slug: 'circuit',
    title: 'quis libero',
    description:
      'sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/156x172.bmp/5fa2dd/ffffff',
        title: 'gravida nisi at',
      },
      {
        url: 'http://dummyimage.com/137x217.jpg/5fa2dd/ffffff',
        title: 'massa id lobortis convallis tortor',
      },
      {
        url: 'http://dummyimage.com/202x115.bmp/5fa2dd/ffffff',
        title: 'congue vivamus metus arcu adipiscing',
      },
      {
        url: 'http://dummyimage.com/105x120.png/cc0000/ffffff',
        title: 'lacinia eget tincidunt',
      },
    ],
  },
  {
    slug: 'motivating',
    title: 'a pede posuere',
    description: 'proin leo odio porttitor id consequat in consequat ut nulla',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/202x182.bmp/cc0000/ffffff',
        title: 'ultrices enim lorem',
      },
      {
        url: 'http://dummyimage.com/245x151.bmp/cc0000/ffffff',
        title: 'nulla nisl nunc',
      },
      {
        url: 'http://dummyimage.com/104x242.bmp/cc0000/ffffff',
        title: 'nisi volutpat',
      },
      {
        url: 'http://dummyimage.com/124x112.jpg/ff4444/ffffff',
        title: 'in felis',
      },
    ],
  },
  {
    slug: 'even-keeled',
    title: 'in faucibus',
    description:
      'vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/201x159.jpg/ff4444/ffffff',
        title: 'eleifend quam a',
      },
      {
        url: 'http://dummyimage.com/158x128.bmp/ff4444/ffffff',
        title: 'donec pharetra magna vestibulum aliquet',
      },
    ],
  },
  {
    slug: 'standardization',
    title: 'sed vel enim sit amet',
    description:
      'odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/199x221.png/ff4444/ffffff',
        title: 'fusce consequat',
      },
    ],
  },
  {
    slug: 'flexibility',
    title: 'id nulla ultrices aliquet',
    description:
      'sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/167x131.png/ff4444/ffffff',
        title: 'velit donec diam',
      },
    ],
  },
  {
    slug: 'secured line',
    title: 'morbi vel',
    description:
      'in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/195x172.bmp/cc0000/ffffff',
        title: 'convallis nulla',
      },
      {
        url: 'http://dummyimage.com/151x126.jpg/ff4444/ffffff',
        title: 'duis at velit eu est',
      },
      {
        url: 'http://dummyimage.com/179x100.jpg/ff4444/ffffff',
        title: 'maecenas leo odio condimentum id',
      },
    ],
  },
  {
    slug: 'multi-channelled',
    title: 'nam congue risus semper',
    description:
      'risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/183x211.jpg/ff4444/ffffff',
        title: 'interdum venenatis turpis',
      },
      {
        url: 'http://dummyimage.com/235x236.png/dddddd/000000',
        title: 'amet consectetuer adipiscing',
      },
      {
        url: 'http://dummyimage.com/236x232.bmp/cc0000/ffffff',
        title: 'ligula in lacus curabitur',
      },
      {
        url: 'http://dummyimage.com/149x175.png/dddddd/000000',
        title: 'eget eros elementum pellentesque quisque',
      },
    ],
  },
  {
    slug: 'local',
    title: 'sapien ut',
    description:
      'amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/130x130.png/cc0000/ffffff',
        title: 'phasellus id',
      },
      {
        url: 'http://dummyimage.com/223x171.bmp/ff4444/ffffff',
        title: 'lobortis vel dapibus at diam',
      },
      {
        url: 'http://dummyimage.com/247x123.bmp/cc0000/ffffff',
        title: 'orci pede venenatis',
      },
      {
        url: 'http://dummyimage.com/151x244.bmp/dddddd/000000',
        title: 'morbi a ipsum integer',
      },
      {
        url: 'http://dummyimage.com/111x196.jpg/cc0000/ffffff',
        title: 'praesent blandit lacinia erat vestibulum',
      },
    ],
  },
  {
    slug: 'architecture',
    title: 'cubilia curae donec',
    description:
      'hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/154x129.png/ff4444/ffffff',
        title: 'aliquam sit amet diam in',
      },
      {
        url: 'http://dummyimage.com/132x154.jpg/dddddd/000000',
        title: 'in libero',
      },
      {
        url: 'http://dummyimage.com/230x121.jpg/ff4444/ffffff',
        title: 'adipiscing lorem',
      },
      {
        url: 'http://dummyimage.com/137x191.png/dddddd/000000',
        title: 'parturient montes',
      },
    ],
  },
  {
    slug: 'virtual',
    title: 'in quis justo',
    description:
      'in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/232x113.png/cc0000/ffffff',
        title: 'praesent id massa id',
      },
      {
        url: 'http://dummyimage.com/137x112.png/ff4444/ffffff',
        title: 'metus aenean',
      },
    ],
  },
  {
    slug: 'digitized',
    title: 'libero ut massa volutpat convallis',
    description:
      'in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/122x167.png/5fa2dd/ffffff',
        title: 'a suscipit',
      },
      {
        url: 'http://dummyimage.com/138x198.bmp/5fa2dd/ffffff',
        title: 'fusce congue diam id',
      },
      {
        url: 'http://dummyimage.com/115x225.bmp/dddddd/000000',
        title: 'libero nam dui',
      },
      {
        url: 'http://dummyimage.com/198x165.png/cc0000/ffffff',
        title: 'volutpat in congue etiam',
      },
      {
        url: 'http://dummyimage.com/203x212.jpg/cc0000/ffffff',
        title: 'magna at nunc commodo',
      },
    ],
  },
  {
    slug: 'tangible',
    title: 'metus sapien ut',
    description:
      'sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/205x151.jpg/5fa2dd/ffffff',
        title: 'ut mauris eget massa tempor',
      },
      {
        url: 'http://dummyimage.com/165x168.bmp/ff4444/ffffff',
        title: 'vivamus metus',
      },
    ],
  },
  {
    slug: 'bi-directional',
    title: 'fringilla rhoncus',
    description:
      'amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/188x115.bmp/ff4444/ffffff',
        title: 'sed accumsan felis',
      },
      {
        url: 'http://dummyimage.com/172x151.jpg/ff4444/ffffff',
        title: 'in imperdiet',
      },
      {
        url: 'http://dummyimage.com/164x188.bmp/dddddd/000000',
        title: 'nulla eget',
      },
    ],
  },
  {
    slug: 'projection',
    title: 'ipsum integer a',
    description:
      'ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/229x144.bmp/5fa2dd/ffffff',
        title: 'lobortis convallis tortor risus dapibus',
      },
      {
        url: 'http://dummyimage.com/234x102.jpg/dddddd/000000',
        title: 'rutrum rutrum neque aenean auctor',
      },
      {
        url: 'http://dummyimage.com/249x220.bmp/dddddd/000000',
        title: 'ante ipsum primis in',
      },
      {
        url: 'http://dummyimage.com/156x114.png/dddddd/000000',
        title: 'duis at velit',
      },
      {
        url: 'http://dummyimage.com/217x249.bmp/5fa2dd/ffffff',
        title: 'ultrices erat',
      },
    ],
  },
  {
    slug: 'middleware',
    title: 'duis aliquam convallis',
    description:
      'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed',
    type: 'traditional',
    images: [
      {
        url: 'http://dummyimage.com/113x158.bmp/cc0000/ffffff',
        title: 'ligula suspendisse ornare consequat',
      },
      {
        url: 'http://dummyimage.com/226x213.jpg/dddddd/000000',
        title: 'sapien sapien non mi',
      },
    ],
  },
  {
    slug: 'info-mediaries',
    title: 'gravida sem praesent id',
    description:
      'curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus',
    type: 'digital',
    images: [
      {
        url: 'http://dummyimage.com/202x117.bmp/dddddd/000000',
        title: 'tellus nulla',
      },
    ],
  },
];

export default projects;
