export default function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a new display component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of your component in PascalCase',
        validate: function (value) {
          const pattern = /^[A-Z][A-Za-z]*$/;
          return pattern.test(value) || 'Component name must be in PascalCase';
        },
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: `../src/components/{{name}}/{{name}}.tsx`,
        templateFile: './templates/component/react-component-template.hbs',
      },
      {
        type: 'add',
        path: `../src/components/{{name}}/styles.tsx`,
        templateFile: './templates/component/styles-template.hbs',
      },
      {
        type: 'add',
        path: `../src/components/{{name}}/index.tsx`,
        templateFile: './templates/component/barrel-file-template.hbs',
      },
    ], // array of actions
  });
}
