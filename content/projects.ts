import type { Project } from '../pages';

//! MAKE SURE TO ADD ICON URL DOMAIN TO NEXT.CONFIG.JS
//? See https://icongr.am for 'icon' and 'iconSource' information

const projects: Project[] = [
  {
    icon: 'gulp-plain',
    text: 'Old personal website',
    url: 'old.mjocc.dev',
    ghName: 'personal-website',
  },
  {
    icon: 'react-original',
    text: 'Personal website',
    url: 'mjocc.dev',
    ghName: 'personal-website-next',
  },
  {
    iconUrl: '/assets/hashnode-logo.png',
    text: 'Blog',
    url: 'blog.mjocc.dev',
  },
  {
    icon: 'vuejs-original',
    text: 'Flight plan manager',
    url: 'flightplans.mjocc.dev',
    ghName: 'gcse-programmming-project-vue',
  },
  {
    icon: 'vuejs-original',
    text: 'Quiz app',
    url: 'quiz-app.mjocc.dev',
    ghName: 'quiz-app',
  },
  {
    icon: 'ionic-original',
    text: 'Mobile quiz app',
    url: 'm.quiz-app.mjocc.dev',
    ghName: 'quiz-mobile-app',
  },
  {
    icon: 'react-original',
    text: 'Projects list',
    toast: 'You are already on this site!',
    ghName: 'project-list',
  },
  {
    icon: 'react-original',
    text: 'Spacetraders client',
    url: 'spacetraders-client.vercel.app',
    ghName: 'spacetraders-client',
  },
  {
    iconUrl:
      'https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg',
    text: 'Minesweeper',
    url: 'svelte-minesweeper-mjocc.vercel.app',
    ghName: 'svelte-minesweeper',
  },
];

export default projects;
