'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor
    super(args, opts);

    // Saves user inputs
    this.answers = {};

    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the priceless ${chalk.red('UI5 Boilerplate Generator')}!`)
    );
  }

  prompting() {
    const prompts = [
      {
        type: 'list',
        name: 'projectType',
        message: 'Which type of UI5 application do you want to create?',
        choices: [
          {
            name: 'Simple App',
            value: 'simple-app'
          },
          {
            name: 'Master/Detail App',
            value: 'master-detail-app'
          }
        ]
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?(eg. reverse-DNS format)',
        default: 'io.ui5lab.nl.myProject'
      },
      {
        type: 'input',
        name: 'projectNamespace',
        message: 'What is the namespace of your project?',
        default: 'io.ui5lab.nl.myProject'
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'What is the description of your project?',
        default: 'A simple ui5 application.'
      },
      {
        type: 'input',
        name: 'projectRepository',
        message: 'What is the git repository name?',
        default: 'io-nlsltz-ui5-simple-app'
      },
      {
        type: 'input',
        name: 'projectOwner',
        message: 'Who owns the git repository?',
        default: 'nlsltz'
      },
      {
        type: 'list',
        name: 'minimumVersion',
        message: 'Select the minimum UI5 version.',
        choices: [
          { name: '1.32', value: '1.32' },
          { name: '1.34', value: '1.34' },
          { name: '1.36', value: '1.36' },
          { name: '1.38', value: '1.38' },
          { name: '1.40', value: '1.40' },
          { name: '1.42', value: '1.42' },
          { name: '1.44', value: '1.44' },
          { name: '1.46', value: '1.46' },
          { name: '1.48', value: '1.48' },
          { name: '1.50', value: '1.50' },
          { name: '1.52', value: '1.52' },
          { name: '1.54', value: '1.54' },
          { name: '1.56', value: '1.56' },
          { name: '1.58', value: '1.58' },
          { name: '1.60', value: '1.60' }
        ],
        default: 12
      },
      {
        type: 'list',
        name: 'libSource',
        message: 'Which UI5 CDN do you want to use? (SAPUI5 / OpenUI5)',
        choices: [
          {
            name: 'OpenUI5',
            value: 'https://openui5.hana.ondemand.com/'
          },
          {
            name: 'SAPUI5',
            value: 'https://sapui5.hana.ondemand.com/'
          }
        ]
      }
    ];

    return this.prompt(prompts).then(answers => {
      // To access props later use this.props.someAnswer;
      this.answers = answers;
    });
  }

  writing() {
    const sProjectType = this.answers.projectType;
    const sProjectName = this.answers.projectName;
    const sProjectNamespace = this.answers.projectNamespace;
    const sProjectNamespaceAMD = sProjectNamespace.split('.').join('/');
    const sProjectDescription = this.answers.projectDescription;
    const sMinimumUI5Version = this.answers.minimumVersion;
    const sProjectRepository = this.answers.projectRepository;
    const sProjectOwner = this.answers.projectOwner;
    const sProjectPath = sProjectName.split('.').join('-');
    const sLibSource = this.answers.libSource;

    const oProps = {
      projectName: sProjectName,
      projectNamespace: sProjectNamespace,
      projectNamespaceAMD: sProjectNamespaceAMD,
      projectDescription: sProjectDescription,
      projectRepository: sProjectRepository,
      projectOwner: sProjectOwner,
      gitRepository: 'https://github.com/' + sProjectOwner + '/' + sProjectRepository,
      minimumUI5Version: sMinimumUI5Version,
      libSource: sLibSource,
      projectPath: sProjectPath
    };

    this.currentWorkingDir = oProps.projectPath;

    switch (sProjectType) {
      case 'simple-app':
        // Create simple app template
        this._createTemplateSimpleApp(oProps);
        this._createTemplateDocs(oProps);
        break;
      case 'master-detail-app':
        // TODO: create master/detail app template
        this._createTemplateMasterDetailApp(oProps);
        this._createTemplateDocs(oProps);
        break;

      default:
        break;
    }
  }

  /**
   * Copies relevant artifacts for simple app
   * @param  {Object} oProps properties used in template
   */
  _createTemplateSimpleApp(oProps) {
    this.fs.copyTpl(
      this.templatePath('simple-app/**/*'),
      this.destinationPath(`${oProps.projectPath}/`),
      oProps
    );
  }

  /**
   * Copies relevant artifacts for master/detail app
   * @param  {Object} oProps properties used in template
   */
  _createTemplateMasterDetailApp(oProps) {
    this.fs.copyTpl(
      this.templatePath('master-detail-app/**/*'),
      this.destinationPath(`${oProps.projectPath}/`),
      oProps
    );
  }

  /**
   * Copies relevant artifacts for documentation
   * @param  {Object} oProps properties used in template
   */
  _createTemplateDocs(oProps) {
    this.fs.copyTpl(
      this.templatePath('docs/**/*'),
      this.destinationPath(`${oProps.projectPath}/docs/`),
      oProps
    );
  }

  install() {
    this.npmInstall(null, {}, { cwd: this.currentWorkingDir }).then(() =>
      console.log(yosay('Everything is set up!'))
    );
    // this.installDependencies({
    //   bower: false,
    //   npm: true,
    //   yarn: false
    // }).then(() => console.log(yosay('Everything is set up!')));
  }
};
