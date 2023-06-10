/* global $ */
/* nomen: false */
/* jshint onevar: false */
/* jslint onevar: false */

var DynamicResume = function ($el) {
    // The toplevel $el that is passed in is a section element.

    // Speed up rendering.
    _.templateSettings.variable = "rc";

    // Grab the HTML out of our template tag and pre-compile it.
    var template = _.template(
        $("script.template").html()
    );

    var resume = {
        "biographical": {
            "name": "Michael Ricks-Aherne",
            "email": "miketwo@gmail.com",
            "website": "miketwo.net",
            "phone": "+1 (240) 423-7355",
            "address": "St. Louis, MO, USA",
            "citizenship": "Dual US/Irish Citizen",
            "clearance": "Inactive Secret Clearance"
        },
        "experience": [
            {
                "name": "1904Labs",
                "title": "Senior Director, Practices & Solutions",
                "time": "2022-2023",
                "location": "Saint Louis, MO",
                "description": "1904labs helps leaders digitally transform their business by implementing modern software and data solutions. Responsibilities included oversight of all engineers and solutions. This position reported to the Owner. Selected accomplishments:",
                "bullets": [
                    {
                        "description": "Lead a ~70-person engineering team to deliver amazing service to multiple enterprise customers.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Owned the strategic roadmap, advised on GTM strategy, and coordinated sales and marketing efforts for our flagship solution: AI-Enabled Customer Service.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Proposed changes to Business Development and Sales to support expanded career tracks for engineers.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Mentored directors on leadership and gave career guidance to engineers.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Received high praise for alignment and delegation efforts.",
                        "tags": ["Leadership"]
                    }
                ]
            },
            {
                "name": "Ricks-Aherne, Inc.",
                "title": "Father",
                "time": "2022",
                "location": "St. Louis, MO",
                "description": "Took a break to support my new family. Selected Accomplishments:",
                "bullets": [
                    {
                        "description": "Managed the successful changing of an estimated 3,000 diapers.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Memorized several works of classic literature through an extensive spaced-repetition training program, including Goodnight Gorilla, Little Blue Truck, and The Gruffalo.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Lead multiple bottle prep and feeding operations in high-stress, time-critical situations.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Oversaw a comprehensive, on-the-spot healthcare program specializing in kisses and ice packs.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": 'Pioneered "seamless" transitions between day and night shifts.',
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Sustained high morale with captivating airplane noises.",
                        "tags": ["Leadership"]
                    },
                ]
            },

            {
                "name": "Kubos Corp.",
                "title": "Director, Mission Control",
                "time": "2021",
                "location": "Remote",
                "description": "Kubos makes a cloud-based satellite Mission Control Platform. As the 4th employee in the company, my responsibilities spanned software engineering, management and support. Selected accomplishments:",
                "bullets": [
                    {
                        "description": "Defined program vision and developed large portions of our 2021 feature set",
                        "skills": "[Ruby on Rails, React]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Improved API scope and performance",
                        "skills": "[GraphQL, Websockets, Python]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Owned execution schedules and customer engagement, coordinating several Independent Contractors.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Provided support to existing on-orbit customers, including 24/7 LEOPS support.",
                        "tags": ["Leadership", "Aerospace"]
                    },
                    {
                        "description": "Generated documentation, how-to videos, blogs, and podcasts for both internal and external stakeholders.",
                        "tags": ["Leadership", "Aerospace"]
                    }
                ]
            },
            {
                "name": "1904 Labs",
                "title": "Director, Modern Software Engineering",
                "time": "2017-2021",
                "location": "St. Louis, MO",
                "description": "1904labs helps leaders digitally transform their business by implementing modern software and data solutions. The Modern Software Engineering Practice contains all Full Stack, DevOps, and Mobile Engineers in the company. Selected accomplishments:",
                "bullets": [
                    {
                        "description": "Managed a personnel budget in excess of $5M and discretionary budget in excess of $40k",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Lead the creation of the Study Group Program, generating value through knowledge reuse and mentorship",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Standardized Contribution Reviews using a self-directed process to preserve autonomy and encourage growth.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Owned weekly Leadership Touchpoint meetings and coordinated strategic initiatives.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Conducted screenings, interviews, and made hiring decisions for the Practice.",
                        "tags": ["Leadership"]
                    },
                ]
            },
            {
                "name": "Sauce Labs",
                "title": "Senior Software Engineer",
                "time": "2015-2017",
                "location": "Berlin, Germany",
                "description": "Sauce provides a cloud-based platform for the automated testing of web and mobile applications. The scope of my responsibilities covered all aspects of the Continouos Integration pipeline. Selected accomplishments:",
                "bullets": [
                    {
                        "description": "Pioneered several large evolutions in the development process, saving countless hours of developer time. Examples include automated branch testing, custom integrations with Slack, a \"follow the sun\" PagerDuty setup and Gated Commits.",
                        "skills": "[Jenkins, Python, Coffeescript, Groovy]",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Shaved $120,000 from the annual AWS bill by re-architecting our data storage layer.",
                        "skills": "[AWS S3, CloudWatch]",
                        "tags": ["Leadership", "Software"]
                    },
                    {
                        "description": "Managed a small team and served as AGILE Scrum Master.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Designed and built several web components.",
                        "skills": "[Angular, Javascript]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Aced continuing education classes in machine learning.",
                        "skills": "[Tensorflow, Octave]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Mentored junior engineers and received accolades for my documentation.",
                        "tags": ["Leadership"]
                    },

                ]
            },
            {
                "name": "Planet Labs",
                "title": "Director, Mission Control",
                "time": "2012-2015",
                "location": "San Francisco, CA",
                "description": "Planet Labs is multi-billion dollar Earth imaging company. As the 7th employee, I wore many hats, moving from the Spacecraft team to Manufacturing to Mission Operations. All told, I had an active role in designing, building, testing and flying the first 113 satellites. Selected accomplishments:",
                "bullets": [
                    {
                        "description": "Designed and developed 2/3 of the microcontroller code for our first spacecraft and significant portions for our second. This code handled power, inter-processor communication, scheduling, sensor acquisition, telemetry and commands. ",
                        "skills": "[C on PIC, then C on ARM]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Implemented the camera software responsible for the first 10,000 photos. ",
                        "skills": "[C++ on SBC]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Started and maintained the company's continuous integration and deployment system. ",
                        "skills": "[first Vagrant/shell scripts, then Jenkins/Ansible on OpenStack, finally Jenkins/Ansible on AWS]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Co-started and maintained the company's code review system. ",
                        "skills": "[Redmine, then Phabricator]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Promoted to Lead the Mission Operations team through Flock 1a. ",
                        "tags": ["Aerospace", "Leadership"]
                    },
                    {
                        "description": "Architected/programmed large portions of Mission Control. ",
                        "skills": "[Python/Django on Postgres, with monitoring (Nagios, New Relic and ElasticSearch), satellite tasking (Celery and RabbitMQ), caching (Memcache and Redis), and user interfaces(Javascript/Jquery/D3/High Charts/Graphite/Bootstrap and Backbone)]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Drove long-term strategy of team composition. Gave performance reviews, interviews and managed employee lifecycle before we had an HR department.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Expanded remote worker infrastructure by evangelizing ChatOps. ",
                        "skills": "[HipChat/Coffeescript]",
                        "tags": ["Software", "Leadership"]
                    },
                    {
                        "description": "Co-lead software development for Manufacturing and Production. ",
                        "skills": "[REST API in Python/Flask, website in Python/Django, GSE in Arduino/RaspberryPi]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Added frontend unit testing to Manufacturing Team's CI process. ",
                        "skills": "[Backbone/Jasmine]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Mentored several interns and new hires across multiple teams.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Gave tours to distinguished guests and actively shaped company culture, advocating for the unique artist-in-residence program.",
                        "tags": ["Leadership"]
                    }
                ]
            },
            {
                "name" : "Information Sciences Institute",
                "location": "Marina Del Rey, CA",
                "time": "2009-2012",
                "title": "Research Satellite Engineer",
                "description": "Designed guidance, navigation and control systems and managed students on several microsatellite research programs. Selected accomplishments:",
                "bullets": [
                    {
                        "description": "Programmed, solely, the entire flight software system for USC’s first Cubesat, launched December 8, 2010 aboard SpaceX’s Falcon 9 rocket. (see Publications #1)",
                        "skills": "[C on PIC]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Implemented the attitude control system for the first-ever surface tracking Cubesat, launched in July 2012. (see Publications #2)",
                        "skills": "[C on PIC, MatrixX/Simulink on Windows]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Published research on rendezvous and proximity operations using a vision-based autonomous tracking system. (see Publications #3)",
                        "skills": "[OpenCV and HAAR classifiers]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Refactored Mission Control as a website",
                        "skills": "[PHP/MySQL]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Designed and programmed the control systems for thruster-based microsatellite prototypes, involving Kalman filtering, computer-assisted docking and PID and phase plane controllers.",
                        "skills": "[C on Rabbit]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Developed functional and environmental test requirements for the Aeneas Cubesat program and served as Integration and Test Director.",
                        "tags": ["Leadership", "Aerospace"]
                    },
                    {
                        "description": "Created an Application Programming Interface (API) for commanding microsatellites over a wireless TCP/IP network using a Rabbit 4000 microcontroller.",
                        "skills": "[C on Rabbit]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Managed both graduates and undergraduates.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Designed the SERC website and created/maintained most pictures and videos of the program.",
                        "skills": "[Photoshop/MS Movie Maker/Paint.net]",
                        "tags": ["Software"]
                    }
                ]
            },
            {
                "name": "Stinger Ghaffarian Technologies (SGT)",
                "location": "Upper Marlboro, MD",
                "time": "2006-2009",
                "title": "Systems Engineer",
                "description": "Managed NASA Goddard Space Flight Center’s Requirements Database and designed satellite propulsion subsystems. Selected accomplishments:",
                "bullets": [
                    {
                        "description": "Created automated tools to help with propulsion subsystem design, including tank sizing, plume impingement considerations, delta-v budgeting and cost/weight estimations. ",
                        "skills": "[Visual Basic]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Implemented significant cost savings through autonomous linking of requirements, and developed tools for parsing, characterization and trace development.",
                        "skills": "[Visual Basic]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Telecommuted for 2 years, receiving high praise on deliverables and performance evaluations.",
                        "tags": []
                    }
                ]
            },
            {
                "name": "FAA Office of Commercial Space Transportation",
                "location": "Washington, DC",
                "time": "2003-2006",
                "title": "Aerospace Engineer",
                "description": "Oversaw amateur rocket launches and regulation development. Conducted safety analyses for license and permit applications. Performed on-site safety inspections and compliance monitoring. Selected accomplishments:",
                "bullets": [
                    {
                        "description": "Maintained flawless safety record of the amateur rocket community.",
                        "tags": []
                    },
                    {
                        "description": "Drove final team concurrence on regulations that had been stalled for 12 years. (see Publications #4)",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Cut $100,000 in costs through prudent contract management.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Elected by colleagues as Employee of the Year, elected by management as Top Performer.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Experienced with all Range Safety analyses, including <br />- 6-degree-of-freedom trajectory simulation, dispersion and malfunction turn analyses<br />- Blast overpressure calculations, damage modeling, debris generation and fragmentation distance<br />- Probability-of-impact and cumulative risk assessment<br />- FMECA, Fault Tree Analyses, Hazard Analyses<br />- ",
                        "skills": "[Technologies used: POST, OrSAT, STK, Splash, TaOS, Maple, Visual Basic]",
                        "tags": ["Aerospace", "Software"]
                    }
                ]
            }
        ],
        "skills": {},
        "publications": [
            {
                "name": "Caerus – Concept through Flight in Eleven Months: A Story of Rapid Response and Lessons Learned.",
                "authors": "J. Tim Barrett, Michael Aherne, Will Bezouska, Jeff Sachs and Lucy Hoag",
                "serial": "AIAA-2011-713.",
                "description": "Presented at the 2011 AIAA Space Conference, Pasadena, CA.",
                "link": "downloads/caerus.pdf"
            },
            {
                "name": "Colony I Meets Three-Axis Pointing.",
                "authors": "M. Aherne, T. Barrett, L. Hoag, E. Teegarden, R. Ramadas",
                "serial": "SSC11-XII-7.",
                "description": "2011 Utah Small Satellite Conference.",
                "link": "downloads/3axis_pointing.pdf"
            },
            {
                "name": "Demonstration of Technologies for Autonomous Micro-Satellite Assembly.",
                "authors": "M. Aherne, T. Barrett, W. Bezouska and S. Schultz",
                "serial": "AIAA-2009-6504.",
                "description": "Presented at the 2009 AIAA Space Conference. Pasadena, CA.",
                "link": "downloads/usat_assembly.pdf"
            },
            {
                "name": "Requirements for Amateur Rocket Activities.",
                "authors": "Federal Aviation Administration.",
                "serial": "RIN 2120–2120–AI88.",
                "description": "Federal Register, Vol. 73, No. 234 / Dec 4, 2008.",
                "link": "http://www.gpo.gov/fdsys/pkg/FR-2008-12-04/pdf/E8-28703.pdf"
            }
        ],
        "education": [
            {
                "school": "Continuing Education",
                "location": "Online",
                "degree": "Coursera/Udacity",
                "bullets": [
                    {
                        "description": "iOS & Swift - Dr. Angela Yu - Udemy",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Machine Learning - Andrew Ng - Stanford University",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Conflict Management - Najla DeBow - UC Irvine",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Software Testing - John Regehr - Udacity",
                        "tags": ["Software"]
                    }
                ]
            },
            {
                "school": "USC",
                "location": "Los Angeles, CA",
                "degree": "M.S. Astronautical Engineering",
                "bullets": [
                    {
                        "description": "Interdisciplinary coursework in control systems, robotics, filtering, estimation, mobile robot architectures and artificial intelligence.",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Noteworthy academic projects:<br /> - Path planning program (using A* search) for course in Artificial Intelligence<br /> - Sound localization using 3 microphones and LabView for “Sensing and Planning in Robotics” course<br /> - GNC engineer for LEAPFROG project – a hovering jet-based lunar-lander. First flight in March 2009.",
                        "tags": ["Aerospace", "Software"]
                    }]
            },
            {
                "school": "ERAU",
                "location": "Daytona Beach, FL",
                "degree": "B.S. Engineering Physics, Minor Mathematics",
                "bullets": [
                    {
                        "description": "Senior Design team placed 1st and 3rd in two separate competitions for designing a reusable cargo shuttle between Earth and Mars.",
                        "tags": ["Aerospace"]
                    },
                    {
                        "description": "Junior design team competed in NASA’s 9th annual Great Moonbuggy Race.",
                        "tags": ["Aerospace"]
                    },
                    {
                        "description": "Recipient of the “Most Outstanding Student” Award.",
                        "tags": []
                    },
                    {
                        "description": "First engineering student to study abroad in Australia.",
                        "tags": []
                    }]
            }
        ],
        "languages": ["English (C2-Native)",
                      "German (A2-Waystage)"],
        "personal": ["Certified Rollerblading Instructor",
                     "SCUBA diver",
                     "Snowboarder",
                     "Drummer",
                     "Hiker",
                     "Amateur Photographer"]
    };

    $el.append(template(resume));

    // Highlighting parts of resume according to button click
    $('.btn').on('click', function (ev) {
        var text = $.trim($(ev.target).text());

        if (text === "Home") {
            window.location.href = "/";
            return;
        }

        if (text === "Download") {
            window.open(
                '/downloads/resume.pdf',
                '_blank'
            );
            return;
        }

        if (text === "Reset highlights") {
            $el.find('.subdued, .highlight').removeClass('subdued highlight', 1000);
            return;
        }
        // Within the section, we switch classes on bullets
        // that match "Aerospace", "Software" or "Leadership"
        $el.find("li:not(" + "." + text + "), span:not(" + "." + text + ")")
            .switchClass('highlight', 'subdued', 1000);
        $el.find("." + text)
            .switchClass('subdued', 'highlight', 1000);
    });

    // Making the topbar move with page scrolls
    $("#buttons").sticky({topSpacing: 0});

    return {
        template: template,
        resume: resume
    };

};


