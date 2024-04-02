import React from 'react';

// const WorkHistoryItem = ({ company, title, date, tasks, repo, location }) => {
//   return (
//     <div className="mb-8">
//       <div className="flex justify-between items-center">
//         <h3 className="text-2xl font-semibold">{company}</h3>
//         <p className="text-gray-500">{date}</p>
//       </div>
//       <div className="flex justify-between items-center my-1">
//         <p className="italic">{title}</p>
//         <p className="text-gray-500">{location}</p>
//       </div>
//       <ul className="list-disc pl-5 my-2">
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//       {repo && (
//         <a href={repo} className="text-blue-500 hover:underline">GitHub Repository</a>
//       )}
//     </div>
//   );
// };

const WorkHistoryItem = ({ company, title, date, tasks, repo, location }) => {
  return (
    <div className="mb-8  shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{company}</h3>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="flex justify-between items-center my-1">
        <p className="italic">{title}</p>
        <p className="text-gray-500">{location}</p>
      </div>
      <ul className="list-disc pl-5 my-2">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      {repo && (
        <a href={repo} className="text-blue-500 hover:underline">GitHub Repository</a>
      )}
    </div>
  );
};



const WorkHistory = () => {
  const workItems = [
    // Sample History
    // {
    //   company: 'Company A',
    //   title: 'Software Engineer',
    //   date: 'June 2020 - Present',
    //   tasks: [
    //     'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
    //     'Managed time-sensitive updates, including content changes and database upgrades',
    //     'Planned, wrote, and debugged web applications and software with complete accuracy'
    //   ],
    //   repo: 'https://github.com/example-repo',
    //   location: 'New York, NY'
    // },

    





    // Job 9

    // Job 8 
    {
      company: 'NSF CREST Center for Advancement toward Sustainable Urban Systems',
      title: 'Research Fellow',
      date: 'Oct 2023 - Present',
      tasks: [
        'Developed advanced room occupancy detection and tracking techniques, enabling accurate monitoring and identification within confined spaces',
        'Designed and delivered engaging lectures, practical demonstrations, and hands-on lab experiments',
        'Led a project utilizing Bluetooth Low Energy (BLE) technology with the Nordic nRF53k board to detect room occupants and automatically adjust environmental settings, replacing manual thermostat and light adjustments',
        'Designed and implemented systems to analyze room conditions and occupant patterns, enabling the Nordic board to autonomously regulate temperature and lighting based on real-time data'
      ],
      repo: null,
      location: 'Los Angeles, CA'
    },

    // Job 7 
    {
      company: 'Dept. of Electrical and Computer Engineering, Cal State LA',
      title: 'Teaching Associate',
      date: 'Aug 2022 - Present',
      tasks: [
        'Developing and delivering engaging lectures over 40 students in EE 2450 Embedded Systems I and EE 4689 Controls Lab',
        'Guided students in theoretical and practical aspects of embedded systems, leading to enhanced project implementations',
        'Organizing and supervising lab sessions, ensuring a safe and productive environment for students to experiment and learn',
        'Developed and delivered engaging lectures for EE 2450 Embedded Systems I, focusing on hands-on learning with MicroPython on a Nucleo 64 board; guided over 35 students in creating circuits and executing projects, enhancing their practical skills in embedded system design and implementation'
      ],
      repo: null,
      location: 'Los Angeles, CA'
    },

    // Job 6 
    {
      company: 'Dept. of Electrical and Computer Engineering, Cal State LA',
      title: 'Makerspace Assistant',
      date: 'Aug 2021 - Present',
      tasks: [
        'Oversaw the establishment and operation of the Dry Lab Makerspace for approximately 40 students, creating an innovative environment for both STEM and non-STEM learners to develop and execute projects',
        'Provided hands-on assistance and instruction in Python programming, helping students develop coding skills applicable in various project contexts',
        'Taught practical skills such as using a multimeter, soldering, and light firmware coding (specifically Marlin), enhancing students technical abilities'
      ],
      repo: null,
      location: 'Los Angeles, CA'
    },
    
    // Job 5 
    {
      company: 'Dept. of Electrical and Computer Engineering, Cal State LA',
      title: 'Summer Making Academic prep and Research for Transfer students Mentor',
      date: 'June 2022 - Aug 2022',
      tasks: [
        'Oversaw the establishment and operation of the Dry Lab Makerspace for approximately 40 students, creating an innovative environment for both STEM and non-STEM learners to develop and execute projects',
        'Provided hands-on assistance and instruction in Python programming, helping students develop coding skills applicable in various project contexts',
        'Taught practical skills such as using a multimeter, soldering, and light firmware coding (specifically Marlin), enhancing students technical abilities'
      ],
      repo: null,
      location: 'Los Angeles, CA'
    },
    
    // Job 4 
    {
      company: 'Office of Special Service',
      title: 'Math Tutor',
      date: 'September 2020 - Aug 2022',
      tasks: [
        'Developed and implemented individualized educational strategies tailored to the unique needs of students with special needs, ensuring an inclusive and supportive learning environment',
        'Employed specialized methods of learning delivery and instruction to facilitate math education in the least restrictive and most accessible manner for students with various disabilities',
        'Specialized in tutoring students with visual impairments, adapting teaching methods and materials to support their unique learning needs, and employing braille and audio tools to facilitate their understanding and mastery of mathematical concepts'
      ],
      repo: null,
      location: 'Los Angeles, CA'
    },
    
    // Job 3 
    {
      company: 'NSF Southeastern Coalition for Engagement and Exchange in Nanotechnology Education',
      title: 'Undergraduate Research',
      date: 'July 2021',
      tasks: [
        'Participated in a summer research program focused on nanotechnology, gaining exposure to advanced topics such as vacuum technologies, lithography, semiconductors, and electrochemical impedance spectroscopy (EIS)',
        'Designed a diagnostic neural electrode using AutoCAD software, demonstrating proficiency in computer-aided design and attention to detail in technical drafting',
        'Conducted EIS laboratory experiments to investigate the effects of pH on impedance, applying scientific methods to gather and analyze data effectively'
      ],
      repo: null,
      location: 'Los Angeles, CA'
    },
    
    // Job 2 
    {
      company: 'CSU Fullerton Statistical and Data Science Research',
      title: 'Undergraduate Research',
      date: 'June 2019 - Aug 2019',
      tasks: [
        'Conducted comprehensive data collection on the average onset of puberty in males and females across various countries, ensuring high standards of data accuracy and reliability',
        'Utilized RStudio to program the analysis models, demonstrating advanced proficiency in statistical software for data manipulation and result interpretation',
        'Contributed to the development of a research paper by providing critical data insights and statistical analysis, aiding in the understanding of global puberty trends'
      ],
      repo: null,
      location: 'Fullerton, CA'
    },
    
    // Job 1 
    {
      company: 'NASA/CaSGC Microcomputer & and Robotics Internship',
      title: 'Robotics Engineer Intern',
      date: 'May 2019 - Aug 2019',
      tasks: [
        'Collaborated effectively in a multidisciplinary team to design and build a hot wire cutting machine, ensuring project goals were met within set timelines',
        'Implemented Arduino microcontroller programming for the development of a hot wire CNC machine, as part of a Distance Learning STEM Course enhancing STEM education in community colleges',
        'Demonstrated proficiency in using a variety of electrical and hand tools for construction and assembly tasks, with a specific focus on building a hot wire cutting machine'
      ],
      repo: null,
      location: 'Los Angeles, CA'
    },


  ];


  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Work History</h2>
      {workItems.map((item, index) => (
        <WorkHistoryItem key={index} {...item} />
      ))}
    </div>
  );
};

export default WorkHistory;
