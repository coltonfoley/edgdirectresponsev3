module.exports = function (plop) {
  plop.setGenerator('page', {
    description: 'Create a new Next.js page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page Name (e.g., "Naperville IL" or "About Us")',
      },
      {
        type: 'input',
        name: 'route',
        message:
          'Route path from src/app/ (e.g., "service-areas/naperville-il" or "about")',
      },
      {
        type: 'input',
        name: 'description',
        message: 'SEO Description',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{route}}/page.tsx',
        templateFile: 'templates/page.hbs',
      },
    ],
  });
};
