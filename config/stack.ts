import { Colors } from './colors';

export enum Stack {
  // Languages
  c,
  cplusplus,
  python,
  javascript,

  // Frontend
  HTML,
  CSS,
  // react,
  // reactnative,

  // Backend
  // graphql,
  // node,
  django,

  // Cloud
  inteldevcloud,
  googlecolab,
  // aws,
  // gcp,

  // Messaging
  // nats,
  // kafka,

  // Databases
  // arangodb,
  redis,
  CoderedCMS,
  // postgres,
  // mongo,

  // Tools
  // docker,
  // kubernetes,
  // terraform,

  // Dev Ops
  git,
  docker,
  Bash,
  Linux,

  // Other programs/software
  arduino,
  matlab,
  raspberrypi,
  ZephyrRTOS,
  VIM,
  computervision,
  jupyternotebook,
  MachineLearning,
  KiCAD,
  ROS,

  // More stuff
  SCSS,
  NodeJs,
  reactnative,
  NextJs,
  TypeScript,
  KaTeX,
  LaTeX,
  MDX,
  PyTorch,


}

export const WorkStack = [
  Stack.c,
  Stack.cplusplus,
  Stack.python,
  Stack.javascript,
  Stack.django,
  Stack.HTML,
  Stack.CSS,
  Stack.inteldevcloud,
  Stack.googlecolab,
  Stack.redis,
  Stack.CoderedCMS,
  Stack.docker,
  Stack.git,
  Stack.jupyternotebook,
  Stack.MachineLearning,
  Stack.KiCAD,
  Stack.ROS,
  Stack.SCSS,
  Stack.NodeJs,
  Stack.reactnative,
  Stack.NextJs,
  Stack.TypeScript,
  Stack.KaTeX,
  Stack.LaTeX,
  Stack.MDX,
  Stack.PyTorch,
  // Stack.reactnative,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.c]: {
    value: 'C',
    color: Colors.c,
  },
  [Stack.cplusplus]: {
    value: 'C++',
    color: Colors.cplusplus,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.javascript]: {
    value: 'Javascript',
    color: Colors.javascript,
  },
  [Stack.HTML]: {
    value: 'HTML',
    color: Colors.HTML,
  },
  [Stack.CSS]: {
    value: 'CSS',
    color: Colors.CSS,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.inteldevcloud]: {
    value: 'Intel Dev Cloud',
    color: Colors.inteldevcloud,
  },
  [Stack.googlecolab]: {
    value: 'Google Colab',
    color: Colors.googlecolab,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.CoderedCMS]: {
    value: 'Codered CMS',
    color: Colors.CoderedCMS,
  },
  [Stack.git]: {
    value: 'Git',
    color: Colors.git,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.Bash]: {
    value: 'Bash',
    color: Colors.Bash,
  },
  [Stack.Linux]: {
    value: 'Linux',
    color: Colors.Linux,
  },
  [Stack.arduino]: {
    value: 'Arduino',
    color: Colors.arduino,
  },
  [Stack.matlab]: {
    value: 'Matlab',
    color: Colors.matlab,
  },
  [Stack.raspberrypi]: {
    value: 'Raspberry Pi',
    color: Colors.raspberrypi,
  },
  [Stack.ZephyrRTOS]: {
    value: 'ZephyrRTOS',
    color: Colors.ZephyrRTOS,
  },
  [Stack.VIM]: {
    value: 'VIM',
    color: Colors.VIM,
  },
  [Stack.computervision]: {
    value: 'Computer Vision',
    color: Colors.computervision,
  },
  [Stack.jupyternotebook]: {
    value: 'Jupyter Notebook',
    color: Colors.jupyternotebook,
  },
  [Stack.MachineLearning]: {
    value: 'Machine Learning',
    color: Colors.MachineLearning,
  },
  [Stack.KiCAD]: {
    value: 'KiCAD',
    color: Colors.KiCAD,
  },
  [Stack.ROS]: {
    value: 'ROS',
    color: Colors.ROS,
  },
  




  [Stack.SCSS]: {
    value: 'SCSS',
    color: Colors.SCSS,
  },
  [Stack.NodeJs]: {
    value: 'NodeJs',
    color: Colors.NodeJs,
  },
  [Stack.reactnative]: {
    value: 'ReactNative',
    color: Colors.ReactNative,
  },
  [Stack.NextJs]: {
    value: 'NextJs',
    color: Colors.NextJs,
  },
  [Stack.TypeScript]: {
    value: 'TypeScript',
    color: Colors.TypeScript,
  },
  [Stack.KaTeX]: {
    value: 'KaTeX',
    color: Colors.KaTeX,
  },
  [Stack.LaTeX]: {
    value: 'LaTeX',
    color: Colors.LaTeX,
  },
  [Stack.MDX]: {
    value: 'MDX',
    color: Colors.MDX,
  },
  [Stack.PyTorch]: {
    value: 'PyTorch',
    color: Colors.PyTorch,
  },

};
