import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'mbasadi',
  authorAddress: 'asadi.mohammadbagher@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'jsiitestbagher',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mbasadi/jsiitestbagher.git',
  docgen: false,
  publishToPypi: { distName: 'jsiitestbagher', module: 'jsiitestbagher' },
  publishToGo: { moduleName: 'github.com/mbasadi', packageName: 'jsiitestbagher' },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();