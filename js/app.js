
const context = (function() {
  const teamDancingPenguins = {
    'Christopher Carnivale': 'https://github.com/cjcarnivale',
    'Zol Fallows': 'https://github.com/ZolFallows',
    'Michael Bonner': 'https://github.com/mdb1710',
    'Ethan Zimmerman': 'https://github.com/thebinarypenguin',
  };

  const generateMemberList = (obj) => {
    let html = Object.keys(obj).map(key => `<a target="_blank" href="${obj[key]}">${key}</a>`);

    return '<br><strong>The team:</strong> ' + html.join(', ');
  };

  const projects = [
    {
      id: 1,
      title: 'Destructor',
      img: 'img/proj-destructor.png',
      href_live: 'https://destructor.now.sh',
      href_repo: 'https://github.com/andre-kw/destructor',
      description: 'A simple playground application for experimenting with and learning about \
        data structures and their various functions.',
      stack: ['React'],
    },
    {
      id: 2,
      title: 'Battlesound',
      img: 'img/proj-battlesound.png',
      href_live: 'https://battlesound.now.sh',
      href_repo: 'https://github.com/andre-kw/battlesound-client',
      description: 'My first capstone project for Thinkful. Musicians can sign up and create music \
        contests (a.k.a beat battles), where other users can vote on submissions they like the most. \
        Features user authentication and responsive design.',
      stack: ['React', 'Nodejs', 'Express', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'Spendful',
      img: 'img/proj-spendful.png',
      href_live: 'https://spendful.now.sh',
      href_repo: 'https://github.com/thinkful-ei-armadillo/spendful-client',
      description: `A Thinkful group capstone for tracking your expenses and visualizing your money flow. \
        ${generateMemberList(teamDancingPenguins)}`,
      stack: ['React', 'Nodejs', 'Express', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'Star Wars Search',
      img: 'img/proj-sw.png',
      href_live: 'https://andre-kw-star-wars.now.sh',
      href_repo: 'https://github.com/andre-kw/thinkful-star-wars',
      description: 'A Thinkful assignment that uses the Star Wars API to search for information.',
      stack: ['React'],
    },
  ];

  // generate html from an individual project
  const generateProjectHtml = (proj) => {
    let stackHtml = '';
    let iconsOriginal = ['Express']; // apply a different classname to these

    proj.stack.forEach(i => {
      const iconType = (iconsOriginal.includes(i) ? 'original' : 'plain');

      stackHtml += `<i class="devicon-${i.toLowerCase()}-${iconType} colored" title="This project uses ${i}." aria-label="${i}"></i>`;
    });

    return `
      <figure>
        <div><a target="_blank" href="${proj.href_live}"><img src="${proj.img}" alt="A screenshot of ${proj.title}"></a></div>
        <figcaption>${proj.title}</figcaption>
        <p class="links">
          <span>
            <a target="_blank" href="${proj.href_live}">live site</a> | 
            <a target="_blank" href="${proj.href_repo}">repo</a>
          </span>
          <span class="links-stack">${stackHtml}</span>
        </p>
        <p>${proj.description}</p>
      </figure>
    `;
  };

  const generateAllProjectsHtml = () => {
    let html = '';

    projects.forEach(proj => {
      html += generateProjectHtml(proj);
    });

    return html;
  };

  const render = () => {
    document.getElementById('projects').innerHTML = generateAllProjectsHtml();
  };

  return {
    render
  };
}());


const main = () => {
  context.render();
};

main();