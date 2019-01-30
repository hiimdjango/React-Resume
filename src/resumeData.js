
let resumeData = {
    location:'Montreal',
    name: 'Ahmed Bendaya',
    roles: {
        role1:'Front-End Developer',
        role2:'Webdesigner'
    },
    socialMedia: {
        facebook:'https://www.facebook.com/A.Ben.Daya',
        instagram:'https://www.instagram.com/abendaya/',
        gitHub:'https://github.com/hiimdjango',
        linkedIn:'https://www.linkedin.com/in/ahmed-bendaya-0a3374136/'      
    },
    address: {
        line1:'Boulevard Edouard-Monpetit',
        line2:'Montreal, Quebec, H3T 1J8'
    },
    phone:'(438)993-2818',
    email:'ahmedbendaya@outlook.com',
    profilePic:'images/profilepic.jpeg',
    resume:'files/Resume.pdf',
    educationBackground: [
        {universityName:'Université de Montréal',degreesName:'IT Associate\'s Degree',date:'January 2017 - January 2019',
        description:'Various technologies and programming languages, Object Oriented Programming, Web Development, mobile Android development, Algorithm, Data structures, database and Web security and also some softwares like Blender, Unity 3D and Adobe Premire Pro.'},
        {universityName:'Carthage Byrsa',degreesName:'Baccalaureate of Science',date:'2011 - 2015',
        description:'IT, Mathematics, Biology and Physics are the main courses, also language courses as Arabic, French, English and Italian, more general courses as Philosophy, History and Geography.'}
    ],
    workBackground: [
        {company:'Freelance',role:'Front-end Developer',date:'2018 - Present',
        description:'Developing user Interfaces mostly with React.js, working with CSS3/HTML5/JavaScript, jQuery sometimes. I used some technologies like REST, Firebase, mySQL, Webpack, Redux, Bootstrap, Reactstreap..'},
        {company:'Cordonnerie du Village',role:'IT Project',date:'2017 - 2018',
        description:'Developing a Web Application in a small team for business in Montreal, mostly Html/CSS/JavScript/Java Spring MVC, also creating a relational database. Unfortunately the app has never been completed due to trust and money issues with business owner.'},
        
    ],
    skills: [
        {name:'Front-End Development',percentage:'80%'},
        {name:'Motivation',percentage:'100%'},
        {name:'Agile Development',percentage:'80%'},
        {name:'Teamwork',percentage:'100%'},
        {name:'Object Oriented Programming',percentage:"65%"},
        {name:'Fast Learning',percentage:"100%"},
    ],
    portfolio: [
        {title:'Medical Tourism App',img:'images/portfolio/treatyourself.jpg',details:'https://github.com/hiimdjango/React-treat-yourself',modalImg:'images/portfolio/modals/m-treatyourself.png',tags:'React.js, Web Design',
        description:'A Medical Tourism home page with a dynamic slide created with React and Reactstrap.'},
        {title:'Cordonnerie',img:'images/portfolio/cordonnerie.jpg',details:'https://github.com/hiimdjango/Cordonnerie-du-village',modalImg:'images/portfolio/modals/m-cordonnerie.png',tags:'HTML/CSS, Web Design',
        description:'Shoemaker business simple home page with HTML/CSS only.'},
        {title:'Login',img:'images/portfolio/login.png',details:'https://github.com/hiimdjango/React-Login',modalImg:'images/portfolio/modals/m-login.jpg',tags:'React.js, Firebase',
        description:'A Perfectly working login component set up with Firebase and ready to be used.'},
        {title:'Blog',img:'images/portfolio/blog.jpg',details:'https://github.com/hiimdjango/React-3Projects/tree/master/blog',modalImg:'images/portfolio/modals/m-blog.jpg',tags:'React.js, Bootstrap',
        description:'A Blog template with Bootstrap turned into React Components. One of my first projects learning React.'},
        {title:'Video Making',img:'images/portfolio/retrocam.jpg',details:'https://www.youtube.com/watch?v=wG7Z868UNdI',modalImg:'images/portfolio/modals/m-jackjones.png',tags:'Video Making, Jack & Jones',
        description:'A video made for Jack & Jones (Saint Bruno) at the Denim Tour event with Adobe Premiere Pro and a DSLR camera, click on details for the video-link.'},
        {title:'Burger Builder',img:'images/portfolio/burger.jpg',details:'https://github.com/hiimdjango/React-BurgerBuilder',modalImg:'images/portfolio/modals/m-burger.jpg',tags:'React.JS',
        description:'A Cool burger builder single web application made with React.js, check the source code in GutHub, work stil in progress.'},
        {title:'Furniture Web App',img:'images/portfolio/furniture.jpg',details:'https://github.com/hiimdjango/Furniture-Website',modalImg:'images/portfolio/modals/m-furniture.jpg',tags:'JavaScript Vanilla, CSS, HTML, JSON',
        description:'A fully working furniture business Web App, no framework was used, only pure JavaScript, HTML and CSS, check the source code by clicking on details.'}
        
    ]
};

export default resumeData;