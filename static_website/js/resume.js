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
                        "description": "Lead and managed a dynamic team of approximately 70 engineers, ensuring the delivery of exceptional service to multiple enterprise customers.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Orchestrated the strategic roadmap, providing guidance on the go-to-market strategy, and effectively coordinated sales and marketing initiatives for our flagship solution: AI-Enabled Customer Service.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Spearheaded transformative changes to the Business Development and Sales departments, resulting in expanded career progression opportunities for engineers.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Mentored and coached directors on effective leadership practices, fostering their growth and development, while providing valuable career guidance to individual engineers.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Garnered extensive acclaim for exceptional alignment and delegation efforts, enhancing overall team efficiency and productivity.",
                        "tags": ["Leadership"]
                    }
                ]
            },
            {
                "name": "Ricks-Aherne, Inc.",
                "title": "Father",
                "time": "early 2022",
                "location": "St. Louis, MO",
                "description": "Took a short break to support my new family. Selected Accomplishments:",
                "bullets": [
                    {
                        "description": "Performed an estimated 3,000 successful diaper changes.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Memorized classic literature through an extensive spaced-repetition training program, including Goodnight Gorilla, Little Blue Truck, and The Gruffalo.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Lead bottle prep and feeding operations in high-stress, time-critical situations.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Oversaw a comprehensive, on-the-spot healthcare program specializing in kisses and ice packs.",
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
                        "description": "Spearheaded the establishment of the program vision and played a pivotal role in developing significant portions of the feature set.",
                        "skills": "[Ruby on Rails, React]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Significantly enhanced API scope and performance utilizing resulting in improved efficiency and user experience.",
                        "skills": "[GraphQL, Websockets, Python]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Assumed ownership of execution schedules and customer engagement, successfully coordinating the efforts of multiple Independent Contractors to ensure seamless project delivery.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Provided comprehensive support to existing on-orbit customers, including round-the-clock Launch and Early Orbit Phase Support (LEOPS), guaranteeing the smooth operation of satellite missions.",
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
                        "description": "Successfully managed a substantial personnel budget exceeding $5 million and a discretionary budget exceeding $40,000, ensuring optimal allocation of resources for the Modern Software Engineering Practice.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Pioneered the creation of the Study Group Program, a groundbreaking initiative that facilitated knowledge reuse and mentorship, resulting in significant value generation for the organization.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Implemented a standardized Contribution Reviews process, empowering individuals with a self-directed approach that preserved autonomy while fostering personal and professional growth.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Took ownership of weekly Leadership Touchpoint meetings, facilitating effective communication and coordination of strategic initiatives within the Modern Software Engineering Practice.",
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
                        "description": "Spearheaded multiple significant evolutions in the development process, introducing game-changing features such as automated branch testing, custom Slack integrations, a robust \"follow the sun\" PagerDuty setup, and Gated Commits. These advancements resulted in substantial time savings for developers.",
                        "skills": "[Jenkins, Python, Coffeescript, Groovy]",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Achieved a remarkable cost reduction of $120,000 per year by successfully re-architecting the data storage layer.",
                        "skills": "[AWS S3, CloudWatch]",
                        "tags": ["Leadership", "Software"]
                    },
                    {
                        "description": "Expertly managed a small team while also serving as an AGILE Scrum Master, facilitating efficient and productive project execution and ensuring seamless collaboration within the team.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Demonstrated exceptional skills in designing and building various web components to enhance the functionality and user experience of the Sauce platform.",
                        "skills": "[Angular, Javascript]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Demonstrated a commitment to continuous learning by excelling in continuing education classes focused on machine learning, gaining proficiency in popular frameworks.",
                        "skills": "[Tensorflow, Octave]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Mentored junior engineers, provided valuable guidance and support, and received recognition for outstanding documentation practices, contributing to knowledge sharing and team effectiveness.",
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
                        "description": "Designed and developed the majority of the microcontroller code for the first spacecraft, handling critical functions such as power management, inter-processor communication, scheduling, sensor acquisition, telemetry, and commands. Also contributed significantly to the codebase for the second spacecraft. ",
                        "skills": "[C on PIC, then C on ARM]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Implemented the camera software responsible for capturing the first 10,000 photos. ",
                        "skills": "[C++ on SBC]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Established and maintained the company's continuous integration and deployment system, starting with Vagrant and shell scripts, evolving to Jenkins and Ansible on OpenStack, and ultimately deploying Jenkins and Ansible on AWS. ",
                        "skills": "[Vagrant, Jenkins, Ansible, OpenStack, AWS]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Co-initiated and maintained the company's code review system. ",
                        "skills": "[Redmine, Phabricator]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Promoted to lead the Mission Operations team during the Flock 1a project, overseeing critical operations. ",
                        "tags": ["Aerospace", "Leadership"]
                    },
                    {
                        "description": "Architected and programmed substantial components of the Mission Control system. ",
                        "skills": "[Python/Django on Postgres, with monitoring (Nagios, New Relic and ElasticSearch), satellite tasking (Celery and RabbitMQ), caching (Memcache and Redis), and user interfaces(Javascript/Jquery/D3/High Charts/Graphite/Bootstrap and Backbone)]",
                        "tags": ["Software", "Aerospace"]
                    },
                    {
                        "description": "Played a pivotal role in driving the long-term strategy for team composition. Conducted performance reviews, interviews, and managed the employee lifecycle before the company established an HR department. ",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Led the expansion of remote worker infrastructure by advocating for the adoption of ChatOps. ",
                        "skills": "[HipChat/Coffeescript]",
                        "tags": ["Software", "Leadership"]
                    },
                    {
                        "description": "Co-lead software development efforts for the Manufacturing and Production teams. ",
                        "skills": "[REST API in Python/Flask, website in Python/Django, GSE in Arduino/RaspberryPi]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Introduced frontend unit testing to the Manufacturing Team's continuous integration process. ",
                        "skills": "[Backbone/Jasmine]",
                        "tags": ["Software"]
                    },
                    {
                        "description": "Mentored numerous interns and new hires across multiple teams, providing guidance and support to foster their professional growth. ",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Gave tours to distinguished guests and actively shaped company culture, advocating for the unique artist-in-residence program. ",
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
                        "description": "Refactored Mission Control as a website, enhancing functionality and user experience.",
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
                        "description": "Managed a team consisting of both graduate and undergraduate students, providing guidance and supervision throughout their involvement in various projects.",
                        "tags": ["Leadership"]
                    },
                    {
                        "description": "Designed the SERC website and took responsibility for creating and maintaining visual content, including pictures and videos. ",
                        "skills": "[Photoshop, MS Movie Maker, Paint.net]",
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
                "school": "Coursera | Udacity | Udemy",
                "location": "Online",
                "degree": "Continuing Education",
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
                "school": "University of Southern California (USC)",
                "location": "Los Angeles, CA",
                "time": "2009-2012",
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
                "school": "Embry-Riddle Aeronautical University (ERAU)",
                "location": "Daytona Beach, FL",
                "time": "1999-2003",
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
        "personal": ["Flying",
                     "Rollerblading",
                     "SCUBA",
                     "Snowboard",
                     "Drums",
                     "Hiking",
                     "Photography"]
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


