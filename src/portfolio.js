import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/infosys.png";

export const greetings = {
	name: "Roni Paul",
	title: "Hi, I'm Roni",
	description:`A self taught,passionate Full Stack Web Developer having an experience of 
				building scalable Web applications with JavaScript / Reactjs / Angular / Nodejs / MongoDB  and some other 
				cool libraries and frameworks and Cross Platform Web applications`,
	resumeLink: "https://drive.google.com/file/d/1EQws-8MLVu-2W9PkptMHaA3h7Vhts49G/view?usp=sharing",
};

export const openSource = {
	githubUserName: "Ronipaul99",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/Roni9972/",
	instagram: "https://www.instagram.com/bird_of_passag_e/",
	twitter: "https://twitter.com",
	github: "https://github.com/Ronipaul99",
	linkedin: "https://www.linkedin.com/in/roni-paul-979810148/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Develop highly sclable robust microservice"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "html5",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "css3",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "typescript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "react",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "node",
		},
		{
			skillName: "angular",
			fontAwesomeClassname: "angular",
		},
		// {
		// 	skillName: "swift",
		// 	fontAwesomeClassname: "vscode-icons:file-type-swift",
		// },
		{
			skillName: "npm",
			fontAwesomeClassname: "npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "mongodb",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "aws",
		},
		{
			skillName: "webpack",
			fontAwesomeClassname: "webpack",
		},
		{
			skillName: "babel",
			fontAwesomeClassname: "babel",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "python",
		},
		{
			skillName: "java",
			fontAwesomeClassname: "java",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "git",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "docker",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "85", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "Programming",
		progressPercentage: "90",
	},
];

export const educationInfo = [
	{
		schoolName: "Narula Institute Of Technology",
		subHeader: "Bachalor Of Technology in Information Technology",
		duration: "August 2015 - July 2019",
		desc: "Participated in Tech challange Held in collage on Tech Fest",
		descBullets: [
			"Completed My B.Tech on Information Technology with Aggregate of 8.23 CGPA",
		],
	},
	// {
	// 	schoolName: "Nabapally Boys High School",
	// 	subHeader: "High School 12th Standerd",
	// 	duration: "January 2013 - january 2015",
	// 	desc: "Participated in the research of XXX and published 3 papers.",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// },
	// {
	// 	schoolName: "Stanford University",
	// 	subHeader: "Bachelor of Science in Computer Science",
	// 	duration: "September 2013 - April 2017",
	// 	desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
	// 	descBullets: [
	// 		"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	// 	],
	// },
];

export const experience = [
	{
		role: "Syatem Engineer Engineer",
		company: "Infosys",
		companylogo: googlelogo,
		date: "January 2020 – Present",
		desc: "Working as a MERN stack application developer",
		descBullets: [
			"Work in a cross-functional team to deliver a complete user experience",
			"Building reusable components to ensure efficiency consistency and field proven code",
			"Unit test the components to ensure code quality and cross functional integrity",
			"Developing and implementing highly responsive user interface components using react concepts",
			"Troubleshooting interface software and debugging application codes.",
			"Monitoring application to Ensure application performance and availability"
		],
	},
	// {
	// 	role: "Front-End Developer",
	// 	company: "Github",
	// 	companylogo: github,
	// 	date: "May 2017 – May 2018",
	// 	desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// },
	// {
	// 	role: "Software Engineer Intern",
	// 	company: "Airbnb",
	// 	companylogo: airbnb,
	// 	date: "Jan 2015 – Sep 2015",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// },
];

export const projects = [
	{
		name: "Telereview ",
		desc: " - AI featured health care analytics application",
		poients:[
			'Designed the UI with smart and user-friendly application functions',
			'designed database schema and database rules to optimized transactions ·',
			'Build REST full API with microservice architecture with a formal load balancer ·',
			'Integrate AWS service with AWS-SDK ',
			'Ensure code quality by unite testing every component and services' 
		],
		github:"https://github.com/Ronipaul99/Telereview-codeBase",
		video:'https://youtu.be/kUtI3kbDgTk'
	},
	{
		name: "Wander last ",
		desc: "A travel / vacation booking application",
		github: "https://github.com/Ronipaul99/project-2056",
		video:'https://youtu.be/FaXEIsiXQNA',
		poients:[
				'Dynamic and responsive component design With material Design' ,		
				'Build various microservice to facilitate different business modules',
				'Integrate Mongo DB with a robust flexible schema design',
				'Ensure code quality by unite testing every component and services '
		],
	},
	{
		name: "EcoProperty",
		desc: "An Online property Broker",
		poients:[
				'developing various user stories working closely with content management team',
				'Build robust UI solution with optimized data handeling',
				'Working on API integration and optimized the response',
				'Performance optimization ',
				'End to end application development ',
				'Design scalable Robust DB architecture with mongoDB '

		]
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
