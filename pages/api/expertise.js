const expertise = [
    {
        id: 0,
        title: 'Java Enterprise & Microservices',
        desc: 'My core expertise lies in building robust, scalable backend systems using Java and the Spring Ecosystem. I specialize in designing RESTful APIs and Microservices architectures, ensuring high performance and security for enterprise-grade applications.',
    },
    {
        id: 1,
        title: 'DevOps & Cloud Native',
        desc: "I don't just write code; I ship it. I have hands-on experience with DevOps practices including Docker containerization, Kubernetes orchestration, and CI/CD pipelines. I focus on automating workflows to ensure reliable and fast deployments.",
    },
    {
        id: 2,
        title: 'Full Stack JavaScript (MERN)', // هنا جمعناهم كاملين
        desc: 'Versatility is my strength. Beyond Java, I master the JavaScript ecosystem. I build dynamic user interfaces with React.js and develop lightweight, non-blocking backends using Node.js and Express. This allows me to adapt to any technical stack required.',
    },
    {
        id: 3,
        title: 'AI Integration (Spring AI)',
        desc: "I am passionate about the future of tech. I integrate Artificial Intelligence into web solutions using Spring AI, bridging the gap between traditional software development and LLMs to create smart, data-driven applications.",
    },
    {
        id: 4,
        title: 'Agile & Collaborative Workflow',
        desc: "Trained in active pedagogy, I thrive in Agile/Scrum environments. I am proficient in using Jira for project management, participating in sprints, and collaborating effectively via Git/GitHub. I value clean code and continuous learning.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}