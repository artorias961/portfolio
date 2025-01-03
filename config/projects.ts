import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  // Project 1 <-----------------------------------------------------
  {
    title: '3D Geometry Reconstruction of Medical Images',
    slug: '3D-Geometry-Reconstruction-Of-Medical-Images',
    banner: '/static/projects/3DGeometryReconstructionOfMedicalImages/medical_images.png',
    website: 'https://github.com/mbrieu/3D-Geometry-Recontruction-of-Medical-Images',
    description:
      'The project focused on using numerical tools to analyze medical images and construct a 3D model of the organs present in the image. The goal was to provide a detailed 3D model that could be easily manipulated for use in the medical field. The focus was on Magnetic Resonance Images (MRI) of the pelvic anatomy of women patients, with an emphasis on three main organs, the bladder, vagina, and rectum. To construct the 3D models from the MRI scans computer vision was utilized as the main tool for image analysis. An object detection tool was developed and trained to detect, differentiate, and label the bladder, vagina, and rectum. These same images were converted to a greyscale, which allowed the organs of interest to be isolated as well as identified by drawing contours around them. An ellipse was then fitted into each contour, and from these ellipses certain parameters could be obtained. Including the center point (x, y, z), the length (l), height (h) and orientation (n). This data can then be utilized to create a 3D CAD model of the patients’ pelvic organs.',
    shortDescription:
      'The project focused on using numerical tools to analyze medical images and construct a 3D model of the organs present in the image.',
    repository: null,
    stack: [
      Stack.computervision,
      Stack.python,
    ],
    dimensions: [360, 640],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fcharts.png?alt=media&token=62c42939-9371-4413-b85d-f2dd3b4534ca',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fdataframe.png?alt=media&token=f2e6523c-c9de-4fde-8fb3-434c74eb20d8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fportfolio.png?alt=media&token=8f4e3da1-2dc2-4382-9fc8-1fbc18a98146',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fconfig.png?alt=media&token=f619b1da-47d5-4c33-b4d0-368adaead1c8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fconfig-strategy.png?alt=media&token=68693230-4fce-420b-b419-d211a9568dc5',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Fcharts-indicators.png?alt=media&token=21c7875f-5abe-4ceb-8057-4d7a70b67d33',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fhypertrade%2Ftelegram.png?alt=media&token=110874dd-fb96-4dd2-b299-12a62b092a04',
    ],
    deployment: {
      web: 'https://github.com/mbrieu/3D-Geometry-Recontruction-of-Medical-Images',
    },
    subProjects: [],
  },

  // Project 2 <-----------------------------------------------------
  {
    title: 'Mechanical Keyboards Design',
    slug: 'Mechanical-Keyboard',
    banner: '/static/projects/mechanical_keyboard/mechanical_keyboard.jpg',
    website: 'https://github.com/artorias961/Mechanical-Keyboards',
    description: `The Mechanical-Keyboards repository by artorias961 serves as a comprehensive resource for enthusiasts and developers interested in mechanical keyboards. It focuses on firmware development, PCB design, key mapping, and custom builds, providing valuable tools for building and customizing mechanical keyboards. The repository features QMK firmware configurations that enable advanced keyboard behavior, including key remapping, layer management, and macro implementation. It also contains PCB schematics and design files, offering users the ability to build keyboards from scratch using tools like KiCad. In addition, custom case and plate designs, likely created with CAD tools such as Fusion360, allow for fully personalized hardware. The repository is ideal for DIY keyboard builders, firmware developers, and enthusiasts who want to explore mechanical keyboard hardware and software integration. By including example builds, keymap files, and detailed documentation, it guides users step-by-step through the process of creating or customizing their keyboards. Whether the goal is designing a new keyboard layout with QMK, constructing a PCB, or building a unique mechanical keyboard, this repository provides a one-stop hub for learning and implementation. With its blend of hardware design and software programming resources, it is a valuable asset for anyone passionate about mechanical keyboards.`,
    shortDescription:
      'The Mechanical-Keyboards repository offers resources for customizing and building mechanical keyboards. It includes QMK firmware configurations, PCB schematics, and CAD files for case designs, enabling users to create unique mechanical keyboards from scratch. Ideal for DIY builders and firmware developers, it serves as a guide to integrate hardware design with software customization.',
    repository: 'https://github.com/artorias961/Mechanical-Keyboards',
    stack: [
      Stack.KiCAD,
      Stack.c,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/mechanical_keyboard/screenshots/3d_model_keyboard_back.png',
      '/static/projects/mechanical_keyboard/screenshots/3d_model_keyboard.png',
      '/static/projects/mechanical_keyboard/screenshots/pcb_diagram_front.png',
      '/static/projects/mechanical_keyboard/screenshots/pcb_diagram_back.png',

    ],
    deployment: {
      web: 'https://github.com/artorias961/Mechanical-Keyboards',
    },
    subProjects: [],
  },

  // Project 3 <-----------------------------------------------------
  {
    title: 'Robotics Dog',
    slug: 'Robotics-Dog',
    website: 'https://github.com/artorias961/robotics-dog',
    banner: '/static/projects/Robotic_Dog/robotic_dog.jpg',
    description:
      'The purpose of this project is to create a tour bot that will guide Cal State LA guests to locations on campus. The tour bot will be given a dataset of the school building’s floor plans and a predetermined path to follow. The bot will be a mobile platform that will incorporate computer vision to identify obstacles and facilitate localization. The collection of sensors used to navigate the environment may also incorporate LiDAR, ultrasonics, cameras, IR proximity, and a GPS module that will focus on gathering data of the surrounding environment. While the internal sensors will consist of IMUs, position sensors, load sensors, and current sensors. The sensors will report to slaved microcontrollers that will feed into the microprocessor. Ubuntu is currently the planned operating system to control high level algorithms. The control software will dictate commands to the tour bot actuators consisting of servo, stepper, and brushless motors. Electronic subsystems will be used to power the motors and to regulate the power supply. The majority of the tour bot chassis will be a 3D printed, built around a load bearing internal frame.',
    repository: 'https://github.com/artorias961/robotics-dog',
    stack: [
      Stack.cplusplus,
      Stack.c,
      Stack.computervision,
      Stack.ROS,
      Stack.python,
      Stack.ZephyrRTOS,
      Stack.Linux,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=a9b5a094-8a16-4c84-af16-65bf2378d7d9',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fca4c07e-c922-445e-a259-a06c038e0974',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=31dafec8-fc20-4d6f-96e7-312a4c847ac5',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-4-.png?alt=media&token=4067a226-5b7b-4ffa-859e-401323a864c4',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=c349a959-ab54-4e2d-8f8e-2393466bb5c0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=f2c25e34-38e8-4886-b247-dc6f270c36d0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=2af284b0-4266-4072-a900-cc9ef8521f74',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=e041e4bd-50fc-49a7-8a22-f6e98d3e1bc6',
    ],
    deployment: {
      web: 'https://github.com/artorias961/robotics-dog',
      //android:
        //'https://play.google.com/store/apps/details?id=com.proximity.app',
      //ios: 'https://apps.apple.com/us/app/proximity-app/id1489041006',
    },
    subProjects: [],
  },

  // Project 4 <-----------------------------------------------------
  {
    title: 'IoT Edge Node of Home Assistant',
    slug: 'IoT-Edge-Node-of-Home-Assistant',
    banner: '/static/projects/IoT-Edge-Node-of-Home-Assistant/final_projects.jpg',
    website: 'https://github.com/artorias961/IoT-Edge-Node-of-Home-Assistant.git',
    description: `This project utilizes Nordic Semiconductor's nRF52DK and STM X-NUCLEO-IKS01A3 to create a sensor-based system. Employing ZephyrRTOS and Bluetooth Low Energy (BLE), the nRF52DK gathers data from sensors like LSM6DSO (MEMS 3D accelerometer + 3D gyroscope), LIS2MDL (MEMS 3D magnetometer), LIS2DW12 (MEMS 3D accelerometer), LPS22HH (MEMS pressure sensor), HTS221 (capacitive digital relative humidity and temperature), and STTS751 (temperature). The goal is to develop a simplified system akin to Raspberry Pi Home Assistant, leveraging the Django framework. Data transfer occurs via Bluetooth GATT, where the nRF52DK acts as a BLE server reading commands from Redis messages hosted on Docker. Responses are then relayed back to the Django server via Redis pub/sub channels. Utilizing Django Channels, WebSocket messages are transmitted to the Django site router and then to the internet for further processing.`,
    repository: null,
    stack: [
      Stack.ZephyrRTOS,
      Stack.c,
      Stack.docker,
      Stack.cplusplus,
      Stack.redis,
      Stack.django,
      Stack.python,
      Stack.HTML,
      Stack.CSS,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=b9b044ce-a3af-402f-a1db-1ae61621bb18',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=f551d87b-4f74-4d06-b81e-50ea8bf7feba',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=4f68239e-db81-43cc-b3a4-1a8642cfe4eb',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=5655d6e8-99d4-4c40-9782-ce12efeab256',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=32c12b1e-8e32-4d45-9001-9482d26bdaaf',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=609b7e74-8349-48ec-bcc0-4b0071dfb9b6',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=91880856-7288-420c-abb9-c1923f7ccd57',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=3dcdc3bd-cbb7-4d8e-9368-306158cce40d',
    ],
    deployment: {
      web: 'https://github.com/artorias961/IoT-Edge-Node-of-Home-Assistant.git',
      //android: 'https://play.google.com/store/apps/details?id=app.boom.mobile',
    },
    subProjects: [],
  },

  // Project 5 <-----------------------------------------------------
  {
    title: 'Dynamic WebSocket REST API: Empowering Real-Time Communication and Custom Requests',
    slug: 'Dynamic-WebSocket-REST-API:-Empowering-Real-Time-Communication-and-Custom-Requests',
    website: 'https://github.com/artorias961/Websocket-REST-API-using-Python',
    banner: '/static/projects/Dynamic-WebSocket-REST-API-Empowering-Real-Time-Communication-and-Custom-Requests/rest_api.jpg',
    description:
      'The project entails the creation of a WebSocket REST API using Python, aimed at enabling communication between clients and a local host computer, facilitated through the Insomnia REST API tool. By sending custom requests, users establish a handshake with the server, which provides access to various directories, each containing specific content. Notably, directory paths such as "/", "/intro", "/greet", and "/bluetooth" grant access to distinct sets of data, with subdirectories like "/scan_local", "/add_device", and "/list_devices" offering further granularity within the "/bluetooth" category. This setup allows users to retrieve content tailored to their needs dynamically. Leveraging WebSocket technology ensures real-time communication, fostering interactive exchanges between clients and the server, thus enhancing the overall user experience and utility of the API.',
    repository: null,
    stack: [Stack.python, Stack.HTML],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=93fffd15-08ca-4ffc-8fce-47bc269237ee',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fd597baf-3aaa-4ad8-abe9-1d42c628285f',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=779ea419-adb0-4f62-8ef7-dcfa8d9a4228',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=e77b8603-4885-4eed-b108-f9f4bb751796',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=94f43db6-c835-404d-ab35-85ddad624a06',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=7794ae58-7e3a-45c5-a47a-6c86b909e423',
    ],
    deployment: {
      web: 'https://github.com/artorias961/Websocket-REST-API-using-Python',
      // android:
        // 'https://play.google.com/store/apps/details?id=com.celebrify.app',
      // ios: 'https://apps.apple.com/us/app/celebrify-app/id1469588198',
    },
    subProjects: [],
  },

  // Project Example <-----------------------------------------------------
  // {
  //   title: 'Stewards',
  //   slug: 'stewards',
  //   website: 'https://stewards.app',
  //   repository: null,
  //   banner: '/static/projects/stewards/banner.png',
  //   description:
  //     'Mobile ordering solution with robot delivery. Stewards also provides variety of tools like staff application to manage orders, self checkout solution and admin dashboard.',
  //   stack: [
  //     Stack.javascript,
  //     Stack.c,
  //     Stack.cplusplus,
  //     Stack.python,
  //     Stack.git,
  //   ],
  //   screenshots: [
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=ba9d7163-8df6-43ae-b804-01cd221cc593',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=c8194dc7-08cf-4b8c-a3ad-f6c643291a95',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=37c14308-767c-41c7-a064-df8b63cd18e8',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=6ad6b4f6-ba09-423d-bd3f-b06ae093113a',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=cd2945c0-af97-4b3d-a503-d52174232a8e',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=6fcaeab6-d539-4f39-9985-e6ee85e28f0a',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=3c1fcd3e-4d93-4275-8d87-94a9b9236a9d',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=9733914a-61a9-41ed-b715-3334ca425588',
  //   ],
  //   deployment: {
  //     web: 'https://stewards.app',
  //     android:
  //       'https://play.google.com/store/apps/details?id=app.stewards.customer',
  //     ios: 'https://apps.apple.com/in/app/stewards-order-to-your-desk/id1479412118',
  //   },
  //   subProjects: [
  //     {
  //       title: 'Staff Management',
  //       repository: null,
  //       description:
  //         'Staff app for stewards restaurant staff, easily update menu, product availability and take live orders from customers.',
  //       deployment: {
  //         android:
  //           'https://play.google.com/store/apps/details?id=app.stewards.staff&hl=en',
  //       },
  //     },
  //     {
  //       title: 'Admin Dashboard',
  //       repository: null,
  //       description:
  //         'Staff administration app for stewards restaurant partners. This helps restaurant administrators to easily manage orders, receipts, tables, restaurant info etc.',
  //       deployment: {
  //         web: 'https://manage.stewards.app',
  //       },
  //     },
  //     {
  //       title: 'Self Checkout',
  //       repository: null,
  //       description:
  //         "Stewards self checkout solution for customers who don't like waiting. Available on demand for iPad and tablets.",
  //       deployment: {},
  //     },
  //   ],
  // },

  

  // Project Example <-----------------------------------------------------
  // {
  //   title: 'KCards',
  //   slug: 'kcards',
  //   banner: '/static/projects/kcards/banner.jpeg',
  //   description:
  //     'KCards is your one-stop replacement for paper cards. KCards help you to easily share your cards with other users and get real-time analytics on the shared cards.',
  //   repository: 'https://github.com/karanpratapsingh/KCards',
  //   stack: [Stack.c, Stack.cplusplus, Stack.computervision, Stack.CSS],
  //   dimensions: [450, 270],
  //   screenshots: [
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
  //     'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
  //   ],
  //   deployment: {
  //     web: 'https://kcards-server.herokuapp.com',
  //     android: 'https://play.google.com/store/apps/details?id=com.kcards',
  //     ios: 'https://itunes.apple.com/us/app/kcards/id1461733524',
  //   },
  //   website: 'https://kcards-server.herokuapp.com',
  //   subProjects: [],
  // },
];
