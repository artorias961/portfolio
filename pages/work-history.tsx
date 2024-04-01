import React from 'react';

const WorkHistoryItem = ({ company, title, date, tasks, repo, location }) => {
  return (
    <div className="mb-8">
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
    {
      company: 'Company A',
      title: 'Software Engineer',
      date: 'June 2020 - Present',
      tasks: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Managed time-sensitive updates, including content changes and database upgrades',
        'Planned, wrote, and debugged web applications and software with complete accuracy'
      ],
      repo: 'https://github.com/example-repo',
      location: 'New York, NY'
    },

    // More work items here
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
