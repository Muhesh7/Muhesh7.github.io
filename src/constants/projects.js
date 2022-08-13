export const projects = [
  {
    name: 'Delta Energy plus App & Web',
    timeline: 'May 2022 - present',
    description: [
      'Worked in a Team of 2 on an Energy Saving Consultation App.',
      'Built a cross-platform application which runs on Android, iOS and Web using React-Native Expo.',
      'Uses Redux as state-management library.',
      'Added Higher-Order-Components, which improved the code reusablity by 30%',
      'Added Strict Eslint rules with Husky (pre-commit lint checker) to ensure proper code linting and formatting.',
      'Wrote weather report generator API using Django Rest Framework.',
      'Added CORS Middleware for Cross-Origin-Referrers in the Backend.',
      'Hosted it On Azure Linux Virtual Machine.'
    ],
    link: {
      Website: 'https://dep.muhesh.studio',
      'Client-Code': 'https://github.com/deltaEplus/dep-client',
      'Server-Code': 'https://github.com/deltaEplus/dep-server'
    },
    stack: [
      'ReactNative',
      'Django',
      'MySQL'
    ],
    lang: [
      'Javascript',
      'Python'
    ]
  },
  {
    name: 'Thirumathikart Mobile App',
    timeline: 'Feb 2022 - present',
    description: [
      'Worked in a team of 5 on a Women Empowerment Mobile Application for Women\'s Self Help Group.',
      'The App Acts as Platform for Housewives of India to showcase and sell their works to the customers via the app.',
      'App as 3 build variants - Customer, Seller and Delivery.',
      'Seller App is for housewives to post their crafts, works or products.',
      'Customer App allows users to look up and buy the products posted by sellers.',
      'Delivery App allows delivery person to navigate between customer and seller.',
      'Server is written in Django which takes care of product transactions and delivery hub.',
      'Wrote cronjob which runs every 24 hours for Database backup.',
      'Dockerized the Django backend with a proper volume mount of Media files to avoid loss of media files.'
    ],
    link: {
      Website: 'https://thirumathikart.nitt.edu/'
    },
    stack: [
      'Android',
      'Django',
      'MySQL'
    ],
    lang: [
      'Java',
      'Python'
    ]
  },
  {
    name: 'Pyspark+SQLdb Docker Image',
    timeline: 'Jul 2022',
    description: [
      'Published a Docker Image to Dockerhub to run pyspark+SQL container instances.',
      'Build an Docker base Image which contains all the spark, hadoop, scala and python dependencies configured.',
      'The Image in Built on top of alphine OS, which makes the Image light weight and small in size.',
      'The Image can be used as base Image for spark\'s master, worker and driver nodes and run each in seprate containers of its own.',
      'The Connection between the master and worker containers are established with docker network bridge.',
      'Using this Image for a python server helps to connect with the running spark node containers and as well as with MySQL database.',
      'Establishing a relationship between these containers using docker-compose is mentioned in the Repository.',
      'To Increase the speed of big data analysis number of container instances of worker nodes can be increased. '
    ],
    link: {
      Dockerhub: 'https://hub.docker.com/r/muhesh7/pyspark-sqldb',
      Bitbucket: 'https://bitbucket.org/muhesh07/pyspark-sqldb/src/master/'
    },
    stack: [
      'Docker',
      'MySQL'
    ],
    lang: [
      'Python'
    ]
  },
  {
    name: 'Nittfest\'22 App & Web',
    timeline: 'Jan 2022 - Apr 2022',
    link: {
      App: 'https://play.google.com/store/apps/details?id=org.nittfest.app',
      'Client-Code': 'https://github.com/delta/nittfest-client',
      'Server-Code': 'https://github.com/delta/nittfest-server'
    },
    description: [
      'Managed the web-operations team of 10 members.',
      'Built a Highly Responsive and User Interactive UI inductions site using Flutter Web.',
      'Optimised the Web Build of Flutter and Reduced the initial loading time and Improved the performance',
      'Optimised the FastAPI python server\'s CPU-Intensive Algorithms using LRU cache.',
      'Configured Alembic to the python server for auto-migration and version controlling of database migrations.',
      'Pioneered a method to secure the Firebase secret files in a public repository using PGP encryption to make the CI/CD pipeline pass without exposing the secret files.',
      'Dockerized the applications and hosted using Nginx on the Kubernetes cluster, making the server scalable and scoreboard data 100% secure.'
    ],
    stack: [
      'React',
      'Flutter',
      'FastAPI',
      'MySQL',
      'Docker'
    ],
    lang: [
      'Javascript',
      'Dart',
      'Python'
    ]
  },
  {
    name: 'Pragyan Premier League\'22',
    timeline: 'Dec 2022 - May 2022',
    link: {
      App: 'https://play.google.com/store/apps/details?id=org.pragyan.ppl22'
    },
    description: [
      'It is a Cricket Management Event, in which participants have to participate in an auction of players, and decide their playing strategy in a virtual Cricket tournament.',
      'Frontend is built using React and Backed is built using Go lang.',
      'Optimized the server of the simulation-game with around 1200 users using Go-routines for CPU-intensive-algorithms.',
      'Updated the code-base from ES5 to ES6 format and converted all the Class based components to Functional based components.',
      'Built an Android App from ReactJS on top of Trusted Web Activity (TWA).',
      'Published the TWA in playstore and was installed and used by 2000+ users'
    ],
    stack: [
      'React',
      'MySQL',
      'Docker'
    ],
    lang: [
      'Javascript',
      'Go'
    ]
  },
  {
    name: 'flutter_dauth',
    timeline: 'Dec 2021',
    description: [
      'Published an OAuth2 based flutter package into pub.dev.',
      'A flutter package for authentication with DAuth(an OAuth2 based SSO (Single Sign On) for NITT students) authorisations service on behalf of the resource-owner/user. ',
      'DAuth lets the application developers securely get access to users’ data without users having to share their passwords.',
      'This package automatically Generates authorizationUrl using the provided authorizationRequest in the parameter.',
      'Then Opens up a webView with the generated authorizationUrl and Listens to the NavigationRequests',
      'Allows user to enable permissions to Client-App to access the resource of the user from Dauth-Resource-Provider.',
      'After Authentication server redirects to the registered redirect_uri and code is fetched by listening to the NavigationRequest.',
      'Using the code as body parameter a post-request is automated to retrive the token.',
      'Once the tokenResponse is fetched the user can send a post request using fetchResources(token) and get the protectedResources based on the Scope mentioned.'
    ],
    link: {
      'pub.dev': 'https://pub.dev/packages/flutter_dauth',
      Github: 'https://bitbucket.org/muhesh07/pyspark-sqldb/src/master/'
    },
    stack: [
      'Flutter'
    ],
    lang: [
      'Dart'
    ]
  },
  {
    name: 'Food-Track Mobile App',
    timeline: 'September 2021',
    description: [
      'Worked in a Team of 3 on an Flutter App for City Command with Maps and location Info hackathon.',
      'Hackathon was organised by NEC and Mitsubishi Corporation India.',
      'Out of 3000+ applied teams got shortlisted to top 20 teams for final round.',
      'The Problem Statement of the App is to suggest healthier food alternatives based on his location.',
      'User scans the Bar-Code of the App and it is sent to the Flask server along with user\'s location.',
      'If server bar-code exists in Database user receives the healtier alternatives of the food product he scanned with the details of the nutritional values.',
      'If the bar-code does not exist it asks the user to scan the Nutritional content and server uses OCR and extracts data and saves it into the database.',
      'Objective of the App is to make user aware and guide him towards a healthier life choices.'
    ],
    link: {
      Certificate: 'https://drive.google.com/file/d/10RxlC3-VJR7V9j00gWjhX7ouyJYFLgPn/view?usp=sharing'
    },
    stack: [
      'Flutter',
      'Flask',
      'Firebase'
    ],
    lang: [
      'Dart',
      'Python'
    ]
  },
  {
    name: 'Aaveg\'21 App & Web',
    timeline: 'Mar 2021 - Jul 2021',
    link: {
      App: 'https://play.google.com/store/apps/details?id=delta.nitt.aavegapp',
      Web: 'https://aaveg.in/21'
    },
    description: [
      'Worked as a Solo Mobile Application Developer for Aaveg\'21.',
      'Built and Published a Flutter app from scratch, which displays all the fest related details.',
      'Added different themes for 5 different teams in the Festival.',
      'Developed a 2D runner game using Flame engine with real-time leader-board which updates based on the users game score.',
      'Integrated Firebase push notification with the Flutter app to notify festival related details.',
      'Generated Signed Android App Bundle (.aab) and Published in play-store.',
      'App has been downloaded by 1000 plus users from playstore.'
    ],
    stack: [
      'React',
      'Flutter',
      'NodeJS',
      'MongoDB',
      'Docker'
    ],
    lang: [
      'Javascript',
      'Dart'
    ]
  },
  {
    name: 'DHunt App',
    timeline: 'Jan 2021',
    link: {
      App: 'https://play.google.com/store/apps/details?id=delta.nitt.inductionclues'
    },
    description: [
      'An Android Application built using MVVM Architecture in Kotlin, for NIT-T Fresher\'s Entertainment.',
      'Used Dagger Hilt library for Dependency Injection to avoid tight coupling of Objects.',
      'Used LiveData for Reactive UI updates and changes.',
      'Created 10 Levels of Cross-word Puzzles with Interactive Bot to give clues to the puzzle.',
      'Created a gyroscopic puzzle game in which users needs to shake their device and select the accurate Android Version of their phone when it appears on the screen.'
    ],
    stack: [
      'Android'
    ],
    lang: [
      'Kotlin',
      'Java'
    ]
  },
  {
    name: 'Kaval Arann App',
    timeline: 'Jan 2022 - Apr 2022',
    link: {
      App: 'https://play.google.com/store/apps/details?id=edu.kavalarran.publicapp.cop'
    },
    description: [
      'An Android Application built using MVVM Architecture in Kotlin, for the Department of Police – Tiruchirappalli ',
      'It is a complaint-management-system-based Android application internally used by 100 cops.',
      'The App as 2 build variants - Public and Cop.',
      'The objective of the application is to act as a virtual attendance manager, which marks attendance using the location of the police client device.',
      'The public version of the app includes reporting events, reporting locked houses, and filing a petition for FIR directly through the app.',
      'The whole app works fluently with the hierarchy authorization control of the organization.',
      'The remote server for the app was built using Spring Boot in Java which accessed secure data stored using MongoDB.',
      'Worked as a Team and Wrote most of the frontend Fragments.',
      'Used Dagger Hilt library for Dependency Injection to avoid tight coupling of Objects.',
      'Used LiveData for Reactive UI updates and changes.',
      'Used Datastore for storing users JWT in his App.',
      'Used Navigation components to ease the flow of Fragment Navigation.',
      'Migrated to Viewbinding to increase programming efficiency',
      'Enhanced the attendance feature, enabled only if the cop is within 500 meters the radius of the target using Geo-fencing, which increased the precision.'
    ],
    stack: [
      'Android',
      'SpringBoot',
      'MongoDB'
    ],
    lang: [
      'Kotlin',
      'Java'
    ]
  }
];
