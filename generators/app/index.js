'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const pkg = require('../../package.json');

module.exports = class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor
        super(args, opts);

        // Saves user inputs
        this.answers = {};

        // Have Yeoman greet the user.
        this.log(yosay(`Welcome to the priceless ${chalk.red('UI5 Boilerplate Generator ' + pkg.version)}!`));
        this.log(
            yosay(
                'I will ask you a bunch of questions (default values in brackets). After answering them i will try to generate a comprehensive project boilerplate for you Sir!'
            )
        );
    }

    prompting() {
        const aProjectQuestions = [
            {
                type: 'confirm',
                name: 'deploymentInformations',
                message: 'Do you want to add deployment informations?\n',
                default: false,
            },
            {
                type: 'confirm',
                name: 'projectDocs',
                message: 'Do you want to add documentation?\n',
                default: false,
            },
            {
                when: function(answers) {
                    return answers.projectDocs === true;
                },
                type: 'confirm',
                name: 'docsProductGeneralData',
                message: 'Do you want to add general data information?\n',
                default: false,
            },
            {
                when: function(answers) {
                    return answers.projectDocs === true;
                },
                type: 'confirm',
                name: 'docsProductKeyFeatures',
                message: 'Do you want to add key features information?\n',
                default: false,
            },
            {
                when: function(answers) {
                    return answers.projectDocs === true;
                },
                type: 'confirm',
                name: 'docsImplementationInstallation',
                message: 'Do you want to add installation information?\n',
                default: false,
            },
            {
                when: function(answers) {
                    return answers.projectDocs === true;
                },
                type: 'confirm',
                name: 'docsImplementationConfiguration',
                message: 'Do you want to add configuration information?\n',
                default: false,
            },
            {
                when: function(answers) {
                    return answers.projectDocs === true;
                },
                type: 'confirm',
                name: 'docsImplementationSupport',
                message: 'Do you want to add support information?\n',
                default: false,
            },
            {
                when: function(answers) {
                    return answers.projectDocs === true;
                },
                type: 'confirm',
                name: 'docsImplementationRelatedApps',
                message: 'Do you want to add related apps information?\n',
                default: false,
            },
            {
                type: 'list',
                name: 'projectType',
                message: 'Which type of UI5 application do you want to create?\n',
                choices: [
                    {
                        name: '🖥 App: Simple',
                        value: 'app-simple',
                    },
                    {
                        name: '🖥 App: Master/Detail Layout',
                        value: 'app-master-detail-layout',
                    },
                    {
                        name: '🖥 App: Flexible Column Layout',
                        value: 'app-flexible-column-layout',
                    },
                    {
                        name: '👨‍💻 App: Admin Layout',
                        value: 'app-admin-layout',
                    },
                    {
                        name: '📘 Lib: Control',
                        value: 'lib-control',
                    },
                ],
            },
            {
                type: 'input',
                name: 'projectName',
                message: 'What is the name of your project?\n',
                default: 'My Project',
            },
            {
                type: 'input',
                name: 'projectNamespace',
                message: 'What is the namespace of your project? (eg. reverse-DNS format)\n',
                default: 'io.ui5lab.nl.myProject',
            },
            {
                type: 'input',
                name: 'projectDescription',
                message: 'What is the description of your project?\n',
                default: 'A simple ui5 application.',
            },
            {
                type: 'input',
                name: 'projectRepository',
                message: 'What is the git repository name?\n',
                default: 'io.ui5lab.nl.myProject',
            },
            {
                type: 'input',
                name: 'projectOwner',
                message: 'Who owns the git repository?\n',
                default: 'nlsltz',
            },
            {
                type: 'input',
                name: 'projectAuthor',
                message: 'Who is the author of this project?\n',
                default: 'nlsltz',
            },
            {
                type: 'input',
                name: 'projectAuthorEmail',
                message: 'What is the e-mail of the author?\n',
                default: 'info@nilslutz.de',
            },
            {
                type: 'list',
                pageSize: 20,
                name: 'projectMinimumUI5Version',
                message: 'Select the minimum UI5 version.\n',
                choices: [
                    {name: '1.32', value: '1.32'},
                    {name: '1.34', value: '1.34'},
                    {name: '1.36', value: '1.36'},
                    {name: '1.38', value: '1.38'},
                    {name: '1.40', value: '1.40'},
                    {name: '1.42', value: '1.42'},
                    {name: '1.44', value: '1.44'},
                    {name: '1.46', value: '1.46'},
                    {name: '1.48', value: '1.48'},
                    {name: '1.50', value: '1.50'},
                    {name: '1.52', value: '1.52'},
                    {name: '1.54', value: '1.54'},
                    {name: '1.56', value: '1.56'},
                    {name: '1.58', value: '1.58'},
                    {name: '1.60', value: '1.60'},
                ],
                default: 12,
            },
            {
                type: 'list',
                name: 'projectUI5LibSource',
                message: 'Which UI5 CDN do you want to use?\n',
                choices: [
                    {
                        name: 'OpenUI5',
                        value: 'https://openui5.hana.ondemand.com',
                    },
                    {
                        name: 'SAPUI5',
                        value: 'https://sapui5.hana.ondemand.com',
                    },
                ],
                default: 0,
            },
            {
                type: 'checkbox',
                pageSize: 25,
                name: 'projectUI5LibsUsed',
                message: 'Which UI5 libs do you want to use?\n',
                choices: [
                    {
                        type: 'separator',
                        line: 'Default libraries',
                    },
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                    {
                        name: 'Core',
                        value: 'sap.ui.core',
                        checked: true,
                    },
                    {
                        name: 'Layout',
                        value: 'sap.ui.layout',
                        checked: true,
                    },
                    {
                        type: 'separator',
                        line: 'Extra libraries',
                    },
                    {
                        name: 'Fiori 2.0',
                        value: 'sap.f',
                        checked: false,
                    },
                    {
                        name: 'TNT',
                        value: 'sap.tnt',
                        checked: false,
                    },
                    {
                        name: 'CodeEditor',
                        value: 'sap.ui.codeeditor',
                        checked: false,
                    },
                    {
                        name: 'Commons',
                        value: 'sap.ui.commons',
                        checked: false,
                    },
                    {
                        name: 'DemoKit',
                        value: 'sap.ui.demokit',
                        checked: false,
                    },
                    {
                        name: 'Documentation',
                        value: 'sap.ui.documentation',
                        checked: false,
                    },
                    {
                        name: 'DT',
                        value: 'sap.ui.dt',
                        checked: false,
                    },
                    {
                        name: 'FL',
                        value: 'sap.ui.fl',
                        checked: false,
                    },
                    {
                        name: 'RTA',
                        value: 'sap.ui.rta',
                        checked: false,
                    },
                    {
                        name: 'Suite',
                        value: 'sap.ui.suite',
                        checked: false,
                    },
                    {
                        name: 'Support',
                        value: 'sap.ui.support',
                        checked: false,
                    },
                    {
                        name: 'Table',
                        value: 'sap.ui.table',
                        checked: false,
                    },
                    {
                        name: 'Unified',
                        value: 'sap.ui.unified',
                        checked: false,
                    },
                    {
                        name: 'UX3',
                        value: 'sap.ui.ux3',
                        checked: false,
                    },
                    {
                        name: 'UXAP',
                        value: 'sap.ui.uxap',
                        checked: false,
                    },
                    {
                        type: 'separator',
                        line: 'Themes',
                    },
                    {
                        name: 'Theme SAP Belize',
                        value: 'themelib_sap_belize',
                        checked: true,
                    },
                    {
                        name: 'Theme SAP Bluecrystal',
                        value: 'themelib_sap_bluecrystal',
                        checked: false,
                    },
                ],
            },
        ];
        const aDeploymentQuestions = [
            {
                when: function(answers) {
                    return answers.deploymentInformations === true;
                },
                type: 'input',
                name: 'deploymentDevPackage',
                message: 'What is target development package?\n',
                default: '(/NAMESPACE/)ZZ_UI5_NL',
            },
            {
                when: function(answers) {
                    return answers.deploymentInformations === true;
                },
                type: 'input',
                name: 'deploymentBspContainer',
                message: 'What is target BSP container name?\n',
                default: '(/NAMESPACE/)ZZ_UI5_NL_MYPROJECT',
            },
            {
                when: function(answers) {
                    return answers.deploymentInformations === true;
                },
                type: 'input',
                name: 'deploymentBspContainerText',
                message: 'What is target BSP container description?\n',
                default: 'UI Application (ProjectName)',
            },
            {
                when: function(answers) {
                    return answers.deploymentInformations === true;
                },
                type: 'input',
                name: 'deploymentTransportNo',
                message: 'What is the transport no. of BSP container?\n',
                default: 'DEVK900123',
            },
            {
                when: function(answers) {
                    return answers.deploymentInformations === true;
                },
                type: 'input',
                name: 'deploymentNwSys',
                message: 'What is deployment system?\n',
                default: 'http://localhost:50000',
            },
            {
                when: function(answers) {
                    return answers.deploymentInformations === true;
                },
                type: 'input',
                name: 'deploymentNwSysUser',
                message: 'What is deployment user for netweaver system?\n',
                default: 'developer',
            },
            {
                when: function(answers) {
                    return answers.deploymentInformations === true;
                },
                type: 'input',
                name: 'deploymentNwSysPassword',
                message: 'What is the password for the deployment user?\n',
                default: 'Appl1ance',
            },
        ];
        const aProductFeaturesGeneralData = [
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataRoles',
                message: 'Which roles will use this app?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataProductSuite',
                message: 'Product Suite?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataProductVersion',
                message: 'Product Version?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataLineOfBusiness',
                message: 'Line of Business?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataIndustry',
                message: 'Industry?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityS4HanaCloud',
                message: 'Solution Capability - S/4 HANA (Cloud)?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityS4HanaOnPrem',
                message: 'Solution Capability - S/4 HANA (On-Premise)?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityLumira',
                message: 'Solution Capability - Lumira?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityMII',
                message: 'Solution Capability - MII?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityAriba',
                message: 'Solution Capability - Ariba?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityHybris',
                message: 'Solution Capability - Hybris?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityERP',
                message: 'Solution Capability - ERP?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityEWM',
                message: 'Solution Capability - EWM?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityCRM',
                message: 'Solution Capability - CRM?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilitySRM',
                message: 'Solution Capability - SRM?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityCARAB',
                message: 'Solution Capability - CARAB?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityIBP',
                message: 'Solution Capability - IBP?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityCrystalReports',
                message: 'Solution Capability - Crystal Reports?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityC4C',
                message: 'Solution Capability - Cloud for Customer?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityGTS',
                message: 'Solution Capability - GTS?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityPCM',
                message: 'Solution Capability - PCM?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilitySBOP',
                message: 'Solution Capability - SBOP?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityAnalyticsCloud',
                message: 'Solution Capability - Analytics Cloud?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataSolutionCapabilityUnrelated',
                message: 'Solution Capability - Unrelated?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataRequiredBackEndProduct',
                message: 'Required Back-End Product?\n',
                choices: [
                    {
                        name: 'Mobile',
                        value: 'sap.m',
                        checked: true,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataApplicationType',
                message: 'Application Type?\n',
                choices: [
                    {
                        name: 'Fiori Transactional (SAP Fiori: Generic Job Scheduling Framework)',
                        value: 'fiori-transactional',
                        checked: true,
                    },
                    {
                        name: 'Fiori Object page / Fact sheet',
                        value: 'fiori-object-page',
                        checked: false,
                    },
                    {
                        name: 'Fiori - Analytical',
                        value: 'fiori-analytical',
                        checked: false,
                    },
                    {
                        name: 'Fiori - Reuse Component',
                        value: 'fiori-reuse-component',
                        checked: false,
                    },
                    {
                        name: 'Design Studio',
                        value: 'design-studio',
                        checked: false,
                    },
                    {
                        name: 'Web Dynpro',
                        value: 'web-dynpro',
                        checked: false,
                    },
                    {
                        name: 'SAP GUI',
                        value: 'sap-gui',
                        checked: false,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataUserInterfaceTechnology',
                message: 'User Interface Technology?\n',
                choices: [
                    {
                        name: 'Design Studio (Planning)',
                        value: 'design-studio-planning',
                        checked: false,
                    },
                    {
                        name: 'Design Studio (Reporting)',
                        value: 'design-studio-reporting',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori (SAPUI5)',
                        value: 'sap-fiori',
                        checked: true,
                    },
                    {
                        name: 'SAP Fiori Elements',
                        value: 'sap-fiori-elements',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori Elements for CoPilot',
                        value: 'sap-fiori-elements-copilot',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori: Analysis Path Framework (APF)',
                        value: 'sap-fiori-analysis-path-framework',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori: Design Studio',
                        value: 'sap-fiori-design-studio',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori: Generic Application Log Framework',
                        value: 'sap-fiori-generic-application-log-framework',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori: Generic Configuration Framework',
                        value: 'sap-fiori-generic-configuration-framework',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori: Generic Job Scheduling Framework',
                        value: 'sap-fiori-generic-job-scheduling-framework',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori: Manage Workflow',
                        value: 'sap-fiori-manage-workflow',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori: My Inbox',
                        value: 'sap-fiori-my-inbox',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori: SAP Smart Business generic drill down app',
                        value: 'sap-fiori-smart-business-generic',
                        checked: false,
                    },
                    {
                        name: 'SAP Fiori: SAP Smart Business tile & custom drill down app',
                        value: 'sap-fiori-smart-business-custom',
                        checked: false,
                    },
                    {
                        name: 'SAP GUI',
                        value: 'sap-gui',
                        checked: false,
                    },
                    {
                        name: 'SAPUI5',
                        value: 'sapui5',
                        checked: false,
                    },
                    {
                        name: 'Web Dynpro',
                        value: 'web-dynpro',
                        checked: false,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataDatabase',
                message: 'Database?\n',
                choices: [
                    {
                        name: 'Any DB',
                        value: 'any',
                        checked: true,
                    },
                    {
                        name: 'HANA DB',
                        value: 'hana',
                        checked: true,
                    },
                    {
                        name: 'HANA DB exclusive',
                        value: 'hana-excl',
                        checked: false,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductGeneralDataFormFactor',
                message: 'Form Factor?\n',
                choices: [
                    {
                        name: 'Desktop',
                        value: 'desktop',
                        checked: true,
                    },
                    {
                        name: 'Tablet',
                        value: 'tablet',
                        checked: false,
                    },
                    {
                        name: 'Phone',
                        value: 'phone',
                        checked: false,
                    },
                ],
            },
            {
                when: function(answers) {
                    return answers.docsProductGeneralData === true;
                },
                type: 'input',
                name: 'docsProductGeneralDataAppId',
                message: 'App ID?\n',
                default: '0001',
            },
        ];
        const aProductFeaturesKeyFeatures = [
            {
                when: function(answers) {
                    return answers.docsProductKeyFeatures === true;
                },
                type: 'checkbox',
                pageSize: 25,
                name: 'docsProductKeyFeaturesCRUDOperations',
                message: 'Which transactional operations are supported?\n',
                choices: [
                    {
                        name: 'Create',
                        value: 'create',
                        checked: false,
                    },
                    {
                        name: 'Read',
                        value: 'read',
                        checked: true,
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        checked: false,
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        checked: false,
                    },
                    {
                        name: 'Query',
                        value: 'query',
                        checked: true,
                    },
                    {
                        name: 'Additional',
                        value: 'additional',
                        checked: false,
                    },
                ],
            },
        ];
        const aImplementationInformationInstallation = [
            {
                when: function(answers) {
                    return answers.docsImplementationInstallation === true;
                },
                type: 'input',
                name: 'docsFrontendProductVersion',
                message: 'Which frontend product version is required?\n',
                default: '(io.name.space.)apps.bundle',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationInstallation === true;
                },
                type: 'input',
                name: 'docsFrontendSPS',
                message: 'Which frontend support package stack is required?\n',
                default: '00',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationInstallation === true;
                },
                type: 'input',
                name: 'docsFrontendSCV',
                message: 'Which frontend software component version is required?\n',
                default: '00',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationInstallation === true;
                },
                type: 'input',
                name: 'docsBackendProductVersion',
                message: 'Which backend product version is required?\n',
                default: '(io.name.space.)apps.bundle',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationInstallation === true;
                },
                type: 'input',
                name: 'docsBackendSPS',
                message: 'Which backend support package stack is required?\n',
                default: '00',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationInstallation === true;
                },
                type: 'input',
                name: 'docsBackendSCV',
                message: 'Which backend software component version is required?\n',
                default: '00',
            },
        ];
        const aImplementationInformationConfiguration = [
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsBusinessRole',
                message: 'Which business role will be using this application? (Technical name)\n',
                default: '(/NAMESPACE/)BUS_ROLE',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsBusinessRoleText',
                message: 'What is the description of this business role?\n',
                default: 'Business Role Description',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsBusinessGroup',
                message: 'Which business group will this application belong to? (Technical name)\n',
                default: '(/NAMESPACE/)BUS_GRP',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsBusinessGroupText',
                message: 'What is the description of this business group?\n',
                default: 'Business Group Descripton',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsBusinessCatalog',
                message: 'Which business catalog will this application belong to? (Technical name)\n',
                default: '(/NAMESPACE/)BUS_CAT',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsBusinessCatalogText',
                message: 'What is the description of this business catalog?\n',
                default: 'Business Catalog Description',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsSemanticObject',
                message: 'Which semantic object is used for intent navigation? (Technical name)\n',
                default: '(/NAMESPACE/)SEM_OBJ',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsSemanticObjectAction',
                message: 'Which action of the semantic object is used?\n',
                default: 'display',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsODataService',
                message: 'Which OData service is used by this application? (Technical name)\n',
                default: '(/NAMESPACE/)ODATA_SRV',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationConfiguration === true;
                },
                type: 'input',
                name: 'docsPfcgRole',
                message: 'Which PFCG role is needed to access the OData service? (Technical name)\n',
                default: '(/NAMESPACE/)ODATA_ROLE',
            },
        ];
        const aImplementationInformationSupport = [
            {
                when: function(answers) {
                    return answers.docsImplementationSupport === true;
                },
                type: 'input',
                name: 'docsApplicationComponent',
                message: 'Which application component is used by this application? (Technical name)\n',
                default: 'BA-FIO-',
            },
            {
                when: function(answers) {
                    return answers.docsImplementationSupport === true;
                },
                type: 'input',
                name: 'docsApplicationComponentText',
                message: 'What is the description of this application component?\n',
                default: 'Basic Apps Fiori',
            },
        ];
        const aImplementationInformationRelatedApps = [];
        const aQuestions = aProjectQuestions
            .concat(aDeploymentQuestions)
            .concat(aProductFeaturesGeneralData)
            .concat(aProductFeaturesKeyFeatures)
            .concat(aImplementationInformationInstallation)
            .concat(aImplementationInformationConfiguration)
            .concat(aImplementationInformationSupport)
            .concat(aImplementationInformationRelatedApps);
        return this.prompt(aQuestions).then(answers => {
            // To access props later use this.answers.someAnswer;
            this.answers = answers;
        });
    }

    writing() {
        const sProjectType = this.answers.projectType;
        const sProjectDocs = this.answers.projectDocs;
        const sProjectName = this.answers.projectName;
        const sProjectNamespace = this.answers.projectNamespace;
        const sProjectNamespaceAMD = sProjectNamespace.split('.').join('/');
        const sProjectDescription = this.answers.projectDescription;
        const sProjectMinimumUI5Version = this.answers.projectMinimumUI5Version;
        const sProjectRepository = this.answers.projectRepository;
        const sProjectOwner = this.answers.projectOwner;
        const sGitRepository = 'https://github.com/' + sProjectOwner + '/' + sProjectRepository;
        const sProjectAuthor = this.answers.projectAuthor;
        const sProjectAuthorEmail = this.answers.projectAuthorEmail;
        const sProjectPath = sProjectNamespace.split('.').join('-');
        const sLibSource = this.answers.projectUI5LibSource;
        const aLibsUsed = this.answers.projectUI5LibsUsed;
        const sDevPackage = this.answers.deploymentDevPackage;
        const sBspContainer = this.answers.deploymentBspContainer;
        const sBspContainerText = this.answers.deploymentBspContainerText;
        const sTransportNo = this.answers.deploymentTransportNo;
        const sNwSys = this.answers.deploymentNwSys;
        const sNwSysUser = this.answers.deploymentNwSysUser;
        const sNwSysPassword = this.answers.deploymentNwSysPassword;
        const aDocsProductGeneralDataRoles = this.answers.docsProductGeneralDataRoles;
        const aDocsProductGeneralDataProductSuite = this.answers.docsProductGeneralDataProductSuite;
        const aDocsProductGeneralDataProductVersion = this.answers.docsProductGeneralDataProductVersion;
        const aDocsProductGeneralDataLineOfBusiness = this.answers.docsProductGeneralDataLineOfBusiness;
        const aDocsProductGeneralDataIndustry = this.answers.docsProductGeneralDataIndustry;
        const aDocsProductGeneralDataSolutionCapabilityS4HanaCloud = this.answers
            .docsProductGeneralDataSolutionCapabilityS4HanaCloud;
        const aDocsProductGeneralDataSolutionCapabilityS4HanaOnPrem = this.answers
            .docsProductGeneralDataSolutionCapabilityS4HanaOnPrem;
        const aDocsProductGeneralDataSolutionCapabilityLumira = this.answers
            .docsProductGeneralDataSolutionCapabilityLumira;
        const aDocsProductGeneralDataSolutionCapabilityMII = this.answers.docsProductGeneralDataSolutionCapabilityMII;
        const aDocsProductGeneralDataSolutionCapabilityAriba = this.answers
            .docsProductGeneralDataSolutionCapabilityAriba;
        const aDocsProductGeneralDataSolutionCapabilityHybris = this.answers
            .docsProductGeneralDataSolutionCapabilityHybris;
        const aDocsProductGeneralDataSolutionCapabilityERP = this.answers.docsProductGeneralDataSolutionCapabilityERP;
        const aDocsProductGeneralDataSolutionCapabilityEWM = this.answers.docsProductGeneralDataSolutionCapabilityEWM;
        const aDocsProductGeneralDataSolutionCapabilityCRM = this.answers.docsProductGeneralDataSolutionCapabilityCRM;
        const aDocsProductGeneralDataSolutionCapabilitySRM = this.answers.docsProductGeneralDataSolutionCapabilitySRM;
        const aDocsProductGeneralDataSolutionCapabilityCARAB = this.answers
            .docsProductGeneralDataSolutionCapabilityCARAB;
        const aDocsProductGeneralDataSolutionCapabilityIBP = this.answers.docsProductGeneralDataSolutionCapabilityIBP;
        const aDocsProductGeneralDataSolutionCapabilityCrystalReports = this.answers
            .docsProductGeneralDataSolutionCapabilityCrystalReports;
        const aDocsProductGeneralDataSolutionCapabilityC4C = this.answers.docsProductGeneralDataSolutionCapabilityC4C;
        const aDocsProductGeneralDataSolutionCapabilityGTS = this.answers.docsProductGeneralDataSolutionCapabilityGTS;
        const aDocsProductGeneralDataSolutionCapabilityPCM = this.answers.docsProductGeneralDataSolutionCapabilityPCM;
        const aDocsProductGeneralDataSolutionCapabilitySBOP = this.answers.docsProductGeneralDataSolutionCapabilitySBOP;
        const aDocsProductGeneralDataSolutionCapabilityAnalyticsCloud = this.answers
            .docsProductGeneralDataSolutionCapabilityAnalyticsCloud;
        const aDocsProductGeneralDataSolutionCapabilityUnrelated = this.answers
            .docsProductGeneralDataSolutionCapabilityUnrelated;
        const aDocsProductGeneralDataRequiredBackEndProduct = this.answers.docsProductGeneralDataRequiredBackEndProduct;
        const sDocsProductGeneralDataApplicationType = this.answers.docsProductGeneralDataApplicationType;
        const sDocsProductGeneralDataUserInterfaceTechnology = this.answers
            .docsProductGeneralDataUserInterfaceTechnology;
        const aDocsProductGeneralDataDatabase = this.answers.docsProductGeneralDataDatabase;
        const aDocsProductGeneralDataFormFactor = this.answers.docsProductGeneralDataFormFactor;
        const sDocsProductGeneralDataAppId = this.answers.docsProductGeneralDataAppId;
        const aDocsProductKeyFeaturesCRUDOperations = this.answers.docsProductKeyFeaturesCRUDOperations;
        const sDocsFrontendProductVersion = this.answers.docsFrontendProductVersion;
        const sDocsFrontendSPS = this.answers.docsFrontendSPS;
        const sDocsFrontendSCV = this.answers.docsFrontendSCV;
        const sDocsBackendProductVersion = this.answers.docsBackendProductVersion;
        const sDocsBackendSPS = this.answers.docsBackendSPS;
        const sDocsBackendSCV = this.answers.docsBackendSCV;
        const aDocsBusinessRole = this.answers.docsBusinessRole;
        const aDocsBusinessRoleText = this.answers.docsBusinessRoleText;
        const aDocsBusinessGroup = this.answers.docsBusinessGroup;
        const aDocsBusinessGroupText = this.answers.docsBusinessGroupText;
        const aDocsBusinessCatalog = this.answers.docsBusinessCatalog;
        const aDocsBusinessCatalogText = this.answers.docsBusinessCatalogText;
        const sDocsSemanticObject = this.answers.docsSemanticObject;
        const sDocsSemanticObjectAction = this.answers.docsSemanticObjectAction;
        const sDocsODataService = this.answers.docsODataService;
        const sDocsPfcgRole = this.answers.docsPfcgRole;
        const sDocsApplicationComponent = this.answers.docsApplicationComponent;
        const sDocsApplicationComponentText = this.answers.docsApplicationComponentText;

        const oProps = {
            projectType: sProjectType,
            projectDocs: sProjectDocs,
            projectName: sProjectName,
            projectNamespace: sProjectNamespace,
            projectNamespaceAMD: sProjectNamespaceAMD,
            projectDescription: sProjectDescription,
            projectMinimumUI5Version: sProjectMinimumUI5Version,
            projectRepository: sProjectRepository,
            projectOwner: sProjectOwner,
            gitRepository: sGitRepository,
            projectAuthor: sProjectAuthor,
            projectAuthorEmail: sProjectAuthorEmail,
            projectPath: sProjectPath,
            projectUI5LibSource: sLibSource,
            projectUI5LibsUsed: aLibsUsed,
            deploymentDevPackage: sDevPackage,
            deploymentBspContainer: sBspContainer,
            deploymentBspContainerText: sBspContainerText,
            deploymentTransportNo: sTransportNo,
            deploymentNwSys: sNwSys,
            deploymentNwSysUser: sNwSysUser,
            deploymentNwSysPassword: sNwSysPassword,
            docsProductGeneralDataRoles: aDocsProductGeneralDataRoles,
            docsProductGeneralDataProductSuite: aDocsProductGeneralDataProductSuite,
            docsProductGeneralDataProductVersion: aDocsProductGeneralDataProductVersion,
            docsProductGeneralDataLineOfBusiness: aDocsProductGeneralDataLineOfBusiness,
            docsProductGeneralDataIndustry: aDocsProductGeneralDataIndustry,
            docsProductGeneralDataSolutionCapabilityS4HanaCloud: aDocsProductGeneralDataSolutionCapabilityS4HanaCloud,
            docsProductGeneralDataSolutionCapabilityS4HanaOnPrem: aDocsProductGeneralDataSolutionCapabilityS4HanaOnPrem,
            docsProductGeneralDataSolutionCapabilityLumira: aDocsProductGeneralDataSolutionCapabilityLumira,
            docsProductGeneralDataSolutionCapabilityMII: aDocsProductGeneralDataSolutionCapabilityMII,
            docsProductGeneralDataSolutionCapabilityAriba: aDocsProductGeneralDataSolutionCapabilityAriba,
            docsProductGeneralDataSolutionCapabilityHybris: aDocsProductGeneralDataSolutionCapabilityHybris,
            docsProductGeneralDataSolutionCapabilityERP: aDocsProductGeneralDataSolutionCapabilityERP,
            docsProductGeneralDataSolutionCapabilityEWM: aDocsProductGeneralDataSolutionCapabilityEWM,
            docsProductGeneralDataSolutionCapabilityCRM: aDocsProductGeneralDataSolutionCapabilityCRM,
            docsProductGeneralDataSolutionCapabilitySRM: aDocsProductGeneralDataSolutionCapabilitySRM,
            docsProductGeneralDataSolutionCapabilityCARAB: aDocsProductGeneralDataSolutionCapabilityCARAB,
            docsProductGeneralDataSolutionCapabilityIBP: aDocsProductGeneralDataSolutionCapabilityIBP,
            docsProductGeneralDataSolutionCapabilityCrystalReports: aDocsProductGeneralDataSolutionCapabilityCrystalReports,
            docsProductGeneralDataSolutionCapabilityC4C: aDocsProductGeneralDataSolutionCapabilityC4C,
            docsProductGeneralDataSolutionCapabilityGTS: aDocsProductGeneralDataSolutionCapabilityGTS,
            docsProductGeneralDataSolutionCapabilityPCM: aDocsProductGeneralDataSolutionCapabilityPCM,
            docsProductGeneralDataSolutionCapabilitySBOP: aDocsProductGeneralDataSolutionCapabilitySBOP,
            docsProductGeneralDataSolutionCapabilityAnalyticsCloud: aDocsProductGeneralDataSolutionCapabilityAnalyticsCloud,
            docsProductGeneralDataSolutionCapabilityUnrelated: aDocsProductGeneralDataSolutionCapabilityUnrelated,
            docsProductGeneralDataRequiredBackEndProduct: aDocsProductGeneralDataRequiredBackEndProduct,
            docsProductGeneralDataApplicationType: sDocsProductGeneralDataApplicationType,
            docsProductGeneralDataUserInterfaceTechnology: sDocsProductGeneralDataUserInterfaceTechnology,
            docsProductGeneralDataDatabase: aDocsProductGeneralDataDatabase,
            docsProductGeneralDataFormFactor: aDocsProductGeneralDataFormFactor,
            docsProductGeneralDataAppId: sDocsProductGeneralDataAppId,
            docsProductKeyFeaturesCRUDOperations: aDocsProductKeyFeaturesCRUDOperations,
            docsFrontendProductVersion: sDocsFrontendProductVersion,
            docsFrontendSPS: sDocsFrontendSPS,
            docsFrontendSCV: sDocsFrontendSCV,
            docsBackendProductVersion: sDocsBackendProductVersion,
            docsBackendSPS: sDocsBackendSPS,
            docsBackendSCV: sDocsBackendSCV,
            docsBusinessRole: aDocsBusinessRole,
            docsBusinessRoleText: aDocsBusinessRoleText,
            docsBusinessGroup: aDocsBusinessGroup,
            docsBusinessGroupText: aDocsBusinessGroupText,
            docsBusinessCatalog: aDocsBusinessCatalog,
            docsBusinessCatalogText: aDocsBusinessCatalogText,
            docsSemanticObject: sDocsSemanticObject,
            docsSemanticObjectAction: sDocsSemanticObjectAction,
            docsODataService: sDocsODataService,
            docsPfcgRole: sDocsPfcgRole,
            docsApplicationComponent: sDocsApplicationComponent,
            docsApplicationComponentText: sDocsApplicationComponentText,
        };

        // Generate project boilerplate
        if (
            oProps.projectType === 'app-simple' ||
            oProps.projectType === 'app-master-detail-layout' ||
            oProps.projectType === 'app-flexible-column-layout'
        ) {
            this._createTemplateApp(oProps);
        } else {
            this._createTemplateControlLib(oProps);
        }

        // Save cwd for npm install task
        this.currentWorkingDir = oProps.projectPath;
    }

    /**
     * Copies relevant artifacts for simple app
     * @param  {Object} oProps properties used in template
     */
    _createTemplateApp(oProps) {
        this.fs.copyTpl(
            this.templatePath(`${oProps.projectType}/**/*`),
            this.destinationPath(`${oProps.projectPath}/`),
            oProps,
            {},
            {globOptions: {dot: true}}
        );
        this._createTemplateAppSettings(oProps);
        this._createTemplateDependencies(oProps);
        if (oProps.projectDocs === true) {
            this._createTemplateAppDocs(oProps);
        }
    }

    /**
     * Copies relevant artifacts for master/detail app
     * @param  {Object} oProps properties used in template
     */
    _createTemplateControlLib(oProps) {
        this.fs.copyTpl(
            this.templatePath(`${oProps.projectType}/**/*`),
            this.destinationPath(`${oProps.projectPath}/`),
            oProps,
            {},
            {globOptions: {dot: true}}
        );
        this._createTemplateLibSettings(oProps);
        this._createTemplateDependencies(oProps);
        if (oProps.projectDocs === true) {
            this._createTemplateLibDocs(oProps);
        }
    }

    /**
     * Copies relevant artifacts for documentation
     * @param  {Object} oProps properties used in template
     */
    _createTemplateAppDocs(oProps) {
        this.fs.copyTpl(
            this.templatePath('app-docs/**/*'),
            this.destinationPath(`${oProps.projectPath}/docs/`),
            oProps,
            {},
            {globOptions: {dot: true}}
        );
    }

    /**
     * Copies relevant artifacts for documentation
     * @param  {Object} oProps properties used in template
     */
    _createTemplateLibDocs(oProps) {
        this.fs.copyTpl(
            this.templatePath('lib-docs/**/*'),
            this.destinationPath(`${oProps.projectPath}/docs/`),
            oProps,
            {},
            {globOptions: {dot: true}}
        );
    }

    /**
     * Create relevant dependencies for boilerplate settings
     * @param  {Object} oProps properties used in template
     */
    _createTemplateAppSettings(oProps) {
        this.fs.copyTpl(
            this.templatePath('app-settings/**/*'),
            this.destinationPath(`${oProps.projectPath}/`),
            oProps,
            {},
            {globOptions: {dot: true}}
        );
    }

    /**
     * Create relevant dependencies for boilerplate settings
     * @param  {Object} oProps properties used in template
     */
    _createTemplateLibSettings(oProps) {
        this.fs.copyTpl(
            this.templatePath('lib-settings/**/*'),
            this.destinationPath(`${oProps.projectPath}/`),
            oProps,
            {},
            {globOptions: {dot: true}}
        );
    }

    /**
     * Create relevant dependencies for boilerplate project
     * @param  {Object} oProps properties used in template
     */
    _createTemplateDependencies(oProps) {
        const pkgJson = {
            devDependencies: {},
            dependencies: {},
        };
        oProps.projectUI5LibsUsed.forEach(lib => {
            pkgJson.dependencies['@openui5/' + lib] = oProps.projectMinimumUI5Version;
        });
        this.fs.extendJSON(this.destinationPath(`${oProps.projectPath}/package.json`), pkgJson);
    }

    /**
     * Install relevant dependencies
     * @param  {Object} oProps properties used in template
     */
    install() {
        this.npmInstall(null, {}, {cwd: this.currentWorkingDir});
    }

    /**
     * Success message
     * @param  {Object} oProps properties used in template
     * @returns {Object} this generator instance
     */
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
