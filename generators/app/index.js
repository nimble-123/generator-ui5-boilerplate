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
    const questions = [
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
        type: 'input',
        name: 'projectAuthor',
        message: 'Who is the author of this project?',
        default: 'nlsltz'
      },
      {
        type: 'input',
        name: 'projectAuthorEmail',
        message: 'What is the e-mail of the author?',
        default: 'info@nilslutz.de'
      },
      {
        type: 'list',
        pageSize: 20,
        name: 'minimumUI5Version',
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
        message: 'Which UI5 CDN do you want to use?',
        choices: [
          {
            name: 'OpenUI5',
            value: 'https://openui5.hana.ondemand.com/'
          },
          {
            name: 'SAPUI5',
            value: 'https://sapui5.hana.ondemand.com/'
          }
        ],
        default: 0
      },
      {
        type: 'checkbox',
        pageSize: 25,
        name: 'libsUsed',
        message: 'Which UI5 libs do you want to use?',
        choices: [
          {
            type: 'separator',
            line: 'Default libraries'
          },
          {
            name: 'Mobile',
            value: 'sap.m',
            checked: true
          },
          {
            name: 'Core',
            value: 'sap.ui.core',
            checked: true
          },
          {
            name: 'Layout',
            value: 'sap.ui.layout',
            checked: true
          },
          {
            type: 'separator',
            line: 'Extra libraries'
          },
          {
            name: 'Fiori 2.0',
            value: 'sap.f',
            checked: false
          },
          {
            name: 'TNT',
            value: 'sap.tnt',
            checked: false
          },
          {
            name: 'CodeEditor',
            value: 'sap.ui.codeeditor',
            checked: false
          },
          {
            name: 'Commons',
            value: 'sap.ui.commons',
            checked: false
          },
          {
            name: 'DemoKit',
            value: 'sap.ui.demokit',
            checked: false
          },
          {
            name: 'Documentation',
            value: 'sap.ui.documentation',
            checked: false
          },
          {
            name: 'DT',
            value: 'sap.ui.dt',
            checked: false
          },
          {
            name: 'FL',
            value: 'sap.ui.fl',
            checked: false
          },
          {
            name: 'RTA',
            value: 'sap.ui.rta',
            checked: false
          },
          {
            name: 'Suite',
            value: 'sap.ui.suite',
            checked: false
          },
          {
            name: 'Support',
            value: 'sap.ui.support',
            checked: false
          },
          {
            name: 'Table',
            value: 'sap.ui.table',
            checked: false
          },
          {
            name: 'Unified',
            value: 'sap.ui.unified',
            checked: false
          },
          {
            name: 'UX3',
            value: 'sap.ui.ux3',
            checked: false
          },
          {
            name: 'UXAP',
            value: 'sap.ui.uxap',
            checked: false
          },
          {
            type: 'separator',
            line: 'Themes'
          },
          {
            name: 'Theme SAP Belize',
            value: 'themelib_sap_belize',
            checked: true
          },
          {
            name: 'Theme SAP Bluecrystal',
            value: 'themelib_sap_bluecrystal',
            checked: false
          }
        ]
      },
      {
        type: 'confirm',
        name: 'deploymentInformations',
        message: 'Do you want to add deployment informations?',
        default: false
      },
      {
        when: function(answers) {
          return answers.deploymentInformations === true;
        },
        type: 'input',
        name: 'devPackage',
        message: 'What is target development package?',
        default: 'ZIO_UI5LAB_NL'
      },
      {
        when: function(answers) {
          return answers.deploymentInformations === true;
        },
        type: 'input',
        name: 'bspContainer',
        message: 'What is target BSP container name?',
        default: 'ZIO_UI5LAB_NL_MYPROJECT'
      },
      {
        when: function(answers) {
          return answers.deploymentInformations === true;
        },
        type: 'input',
        name: 'bspContainerText',
        message: 'What is target BSP container description?',
        default: 'UI Application io.ui5lab.nl.myProject'
      },
      {
        when: function(answers) {
          return answers.deploymentInformations === true;
        },
        type: 'input',
        name: 'transportNo',
        message: 'What is the transport no. of BSP container?',
        default: 'NPL9000123'
      },
      {
        when: function(answers) {
          return answers.deploymentInformations === true;
        },
        type: 'input',
        name: 'nwSys',
        message: 'What is deployment system?',
        default: 'http://localhost:8000'
      },
      {
        when: function(answers) {
          return answers.deploymentInformations === true;
        },
        type: 'input',
        name: 'nwSysUser',
        message: 'What is deployment user for netweaver system?',
        default: 'developer'
      },
      {
        when: function(answers) {
          return answers.deploymentInformations === true;
        },
        type: 'input',
        name: 'nwSysPassword',
        message: 'What is the password for the deployment user?',
        default: 'Appl1ance'
      }
    ];

    return this.prompt(questions).then(answers => {
      // To access props later use this.answers.someAnswer;
      this.answers = answers;
      this.log(answers);
    });
  }

  writing() {
    const sProjectType = this.answers.projectType;
    const sProjectName = this.answers.projectName;
    const sProjectNamespace = this.answers.projectNamespace;
    const sProjectNamespaceAMD = sProjectNamespace.split('.').join('/');
    const sProjectDescription = this.answers.projectDescription;
    const sMinimumUI5Version = this.answers.minimumUI5Version;
    const sProjectRepository = this.answers.projectRepository;
    const sProjectOwner = this.answers.projectOwner;
    const sProjectAuthor = this.answers.projectAuthor;
    const sProjectAuthorEmail = this.answers.projectAuthorEmail;
    const sProjectPath = sProjectName.split('.').join('-');
    const sLibSource = this.answers.libSource;
    const aLibsUsed = this.answers.libsUsed;
    const sDevPackage = this.answers.devPackage;
    const sBspContainer = this.answers.bspContainer;
    const sBspContainerText = this.answers.bspContainerText;
    const sTransportNo = this.answers.transportNo;
    const sNwSys = this.answers.nwSys;
    const sNwSysUser = this.answers.nwSysUser;
    const sNwSysPassword = this.answers.nwSysPassword;
    const sBusinessRole = this.answers.businessRole;
    const sBusinessRoleText = this.answers.businessRoleText;
    const sBusinessGroup = this.answers.businessGroup;
    const sBusinessGroupText = this.answers.businessGroupText;
    const sBusinessCatalog = this.answers.businessCatalog;
    const sBusinessCatalogText = this.answers.businessCatalogText;
    const sSemanticObject = this.answers.semanticObject;
    const sSemanticObjectAction = this.answers.semanticObjectAction;
    const sODataService = this.answers.oDataService;
    const sPFCGRole = this.answers.pfcgRole;
    const sFrontendProductVersion = this.answers.frontendProductVersion;
    const sFrontendSPS = this.answers.frontendSPS;
    const sFrontendSCV = this.answers.frontendSCV;
    const sBackendProductVersion = this.answers.backendProductVersion;
    const sBackendSPS = this.answers.backendSPS;
    const sBackendSCV = this.answers.backendSCV;
    const sApplicationComponent = this.answers.applicationComponent;
    const sApplicationComponentText = this.answers.applicationComponentText;

    const oProps = {
      projectType: sProjectType,
      projectName: sProjectName,
      projectNamespace: sProjectNamespace,
      projectNamespaceAMD: sProjectNamespaceAMD,
      projectDescription: sProjectDescription,
      minimumUI5Version: sMinimumUI5Version,
      projectRepository: sProjectRepository,
      projectOwner: sProjectOwner,
      gitRepository: 'https://github.com/' + sProjectOwner + '/' + sProjectRepository,
      projectAuthor: sProjectAuthor,
      projectAuthorEmail: sProjectAuthorEmail,
      projectPath: sProjectPath,
      libSource: sLibSource,
      devPackage: sDevPackage,
      bspContainer: sBspContainer,
      bspContainerText: sBspContainerText,
      transportNo: sTransportNo,
      nwSys: sNwSys,
      nwSysUser: sNwSysUser,
      nwSysPassword: sNwSysPassword,
      businessRole: sBusinessRole,
      businessRoleText: sBusinessRoleText,
      businessGroup: sBusinessGroup,
      businessGroupText: sBusinessGroupText,
      businessCatalog: sBusinessCatalog,
      businessCatalogText: sBusinessCatalogText,
      semanticObject: sSemanticObject,
      semanticObjectAction: sSemanticObjectAction,
      oDataService: sODataService,
      pfcgRole: sPFCGRole,
      frontendProductVersion: sFrontendProductVersion,
      frontendSPS: sFrontendSPS,
      frontendSCV: sFrontendSCV,
      backendProductVersion: sBackendProductVersion,
      backendSPS: sBackendSPS,
      backendSCV: sBackendSCV,
      applicationComponent: sApplicationComponent,
      applicationComponentText: sApplicationComponentText
    };

    // Generate project boilerplate
    switch (oProps.projectType) {
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

    // Add dependencies
    const pkgJson = {
      devDependencies: {},
      dependencies: {}
    };
    aLibsUsed.forEach(lib => {
      pkgJson.dependencies['@openui5/' + lib] = sMinimumUI5Version;
    });
    this.log(pkgJson);
    this.fs.extendJSON(
      this.destinationPath(`${oProps.projectPath}/package.json`),
      pkgJson
    );

    // Save cwd for npm install task
    this.currentWorkingDir = oProps.projectPath;
  }

  /**
   * Copies relevant artifacts for simple app
   * @param  {Object} oProps properties used in template
   */
  _createTemplateSimpleApp(oProps) {
    this.fs.copyTpl(
      this.templatePath('simple-app/**/*'),
      this.destinationPath(`${oProps.projectPath}/`),
      oProps,
      {},
      { globOptions: { dot: true } }
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
      oProps,
      {},
      { globOptions: { dot: true } }
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
      oProps,
      {},
      { globOptions: { dot: true } }
    );
  }

  install() {
    this.npmInstall(null, {}, { cwd: this.currentWorkingDir });
  }

  end() {
    this.log(
      yosay(
        'Everything is set up!\n\n' +
          'Change directory to: ' +
          chalk.red(this.currentWorkingDir) +
          '.\n\n' +
          'Check all generated settings and commit the created files!'
      )
    );
    return this;
  }
};
