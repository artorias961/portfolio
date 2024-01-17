import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,

  // Frontend
  react,
  reactnative,

  // Backend
  graphql,
  node,
  django,

  // Cloud
  aws,
  gcp,

  // Messaging
  nats,
  kafka,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,

  // Tools
  docker,
  kubernetes,
  terraform,
}

export const WorkStack = [
  Stack.go,
  Stack.typescript,
  Stack.python,
  Stack.react,
  Stack.aws,
  Stack.gcp,
  Stack.kubernetes,
  Stack.docker,
  Stack.terraform,
  Stack.nats,
  Stack.kafka,
  Stack.graphql,
  Stack.postgres,
  Stack.redis,
  Stack.arangodb,
  // Stack.reactnative,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'C',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'C++',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Python',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'HTML',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'CSS',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'Raspberry Pi',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'Linux',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Docker',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Git',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Bash',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Arduino',
    color: Colors.django,
  },
  [Stack.nats]: {
    value: 'Matlab',
    color: Colors.nats,
  },
  [Stack.kafka]: {
    value: 'Django',
    color: Colors.kafka,
  },
  [Stack.arangodb]: {
    value: 'Redis',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'ZephyrRTOS',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'VIM',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'PyTorch',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'JavaScript',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Codered CMS',
    color: Colors.kubernetes,
  },
  [Stack.terraform]: {
    value: 'Google Cloud',
    color: Colors.terraform,
  },
};
