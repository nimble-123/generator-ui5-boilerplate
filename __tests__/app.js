'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ui5-boilerplate:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      deploymentInformations: true,
      projectDocs: true,
      docsProductGeneralData: true,
      docsProductKeyFeatures: true,
      docsImplementationInstallation: true,
      docsImplementationConfiguration: true,
      docsImplementationSupport: true,
      docsImplementationRelatedApps: true,
      projectType: 'app-simple',
      projectName: 'My Project',
      projectNamespace: 'io.ui5lab.nl.myProject',
      projectDescription: 'A simple ui5 application.',
      projectMinimumUI5Version: '1.56',
      projectRepository: 'io-nlsltz-ui5-myproject',
      projectOwner: 'nlsltz',
      projectAuthor: 'nlsltz',
      projectAuthorEmail: 'info@nilslutz.de',
      projectUI5LibSource: 'https://openui5.hana.ondemand.com/',
      projectUI5LibsUsed: ['sap.m', 'sap.ui.core', 'sap.ui.layout', 'themelib_sap_belize'],
      deploymentDevPackage: 'ZZ_UI_NL',
      deploymentBspContainer: 'ZZ_UI5_NL_APP',
      deploymentBspContainerText: 'UI Application My Project',
      deploymentTransportNo: 'DEVK900123',
      deploymentNwSys: 'http://localhost:50000',
      deploymentNwSysUser: 'developer',
      deploymentNwSysPassword: 'Appl1ance',
      docsProductGeneralDataRoles: '',
      docsProductGeneralDataProductSuite: '',
      docsProductGeneralDataProductVersion: '',
      docsProductGeneralDataLineOfBusiness: '',
      docsProductGeneralDataIndustry: '',
      docsProductGeneralDataSolutionCapabilityS4HanaCloud: '',
      docsProductGeneralDataSolutionCapabilityS4HanaOnPrem: '',
      docsProductGeneralDataSolutionCapabilityLumira: '',
      docsProductGeneralDataSolutionCapabilityMII: '',
      docsProductGeneralDataSolutionCapabilityAriba: '',
      docsProductGeneralDataSolutionCapabilityHybris: '',
      docsProductGeneralDataSolutionCapabilityERP: '',
      docsProductGeneralDataSolutionCapabilityEWM: '',
      docsProductGeneralDataSolutionCapabilityCRM: '',
      docsProductGeneralDataSolutionCapabilitySRM: '',
      docsProductGeneralDataSolutionCapabilityCARAB: '',
      docsProductGeneralDataSolutionCapabilityIBP: '',
      docsProductGeneralDataSolutionCapabilityCrystalReports: '',
      docsProductGeneralDataSolutionCapabilityC4C: '',
      docsProductGeneralDataSolutionCapabilityGTS: '',
      docsProductGeneralDataSolutionCapabilityPCM: '',
      docsProductGeneralDataSolutionCapabilitySBOP: '',
      docsProductGeneralDataSolutionCapabilityAnalyticsCloud: '',
      docsProductGeneralDataSolutionCapabilityUnrelated: '',
      docsProductGeneralDataRequiredBackEndProduct: '',
      docsProductGeneralDataApplicationType: '',
      docsProductGeneralDataUserInterfaceTechnology: '',
      docsProductGeneralDataDatabase: '',
      docsProductGeneralDataFormFactor: '',
      docsProductGeneralDataAppId: '',
      docsProductKeyFeaturesCRUDOperations: '',
      docsFrontendProductVersion: '',
      docsFrontendSPS: '',
      docsFrontendSCV: '',
      docsBackendProductVersion: '',
      docsBackendSPS: '',
      docsBackendSCV: '',
      docsBusinessRole: '',
      docsBusinessRoleText: '',
      docsBusinessGroup: '',
      docsBusinessGroupText: '',
      docsBusinessCatalog: '',
      docsBusinessCatalogText: '',
      docsSemanticObject: '',
      docsSemanticObjectAction: '',
      docsODataService: '',
      docsPfcgRole: '',
      docsApplicationComponent: '',
      docsApplicationComponentText: ''
    });
  });

  it('creates ui5 tooling descriptor', () => {
    assert.file(['io-ui5lab-nl-myProject/ui5.yaml']);
  });

  it('creates repository README', () => {
    assert.file(['io-ui5lab-nl-myProject/README.md']);
  });

  it('creates package.json', () => {
    assert.file(['io-ui5lab-nl-myProject/package.json']);
  });

  it('creates SCP UI5 resources destination file', () => {
    assert.file(['io-ui5lab-nl-myProject/neo-app.json']);
  });

  it('creates LICENSE file', () => {
    assert.file(['io-ui5lab-nl-myProject/LICENSE']);
  });

  it('creates Karma configuration files', () => {
    assert.file([
      'io-ui5lab-nl-myProject/karma.conf.js',
      'io-ui5lab-nl-myProject/karma-ci.conf.js'
    ]);
  });

  it('creates Travis CI configuration file', () => {
    assert.file(['io-ui5lab-nl-myProject/.travis.yml']);
  });

  it('creates npm destination for SAP packages', () => {
    assert.file(['io-ui5lab-nl-myProject/.npmrc']);
  });

  it('creates gitignore file', () => {
    assert.file(['io-ui5lab-nl-myProject/.gitignore']);
  });

  it('creates ESLint rules file', () => {
    assert.file(['io-ui5lab-nl-myProject/.eslintrc']);
  });

  it('creates ESLint ignore file', () => {
    assert.file(['io-ui5lab-nl-myProject/.eslintignore']);
  });

  it('creates editor configuration file', () => {
    assert.file(['io-ui5lab-nl-myProject/.editorconfig']);
  });

  it('creates ui5 app descriptor', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/manifest.json']);
  });

  it('creates entry point for standalone version', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/index.html']);
  });

  it('creates UI component', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/Component.js']);
  });

  it('creates BaseController.js', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/controller/BaseController.js']);
  });

  it('creates Home.controller.js', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/controller/Home.controller.js']);
  });

  it('creates style.css', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/css/style.css']);
  });

  it('creates i18n.properties', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/i18n/i18n.properties']);
  });

  it('creates formatter.js', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/model/formatter.js']);
  });

  it('creates models.js', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/model/models.js']);
  });

  it('creates Home.view.xml', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/view/Home.view.xml']);
  });

  it('creates git placeholder for dialogs folder', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/view/dialogs/.gitkeep']);
  });

  it('creates git placeholder for fragments folder', () => {
    assert.file(['io-ui5lab-nl-myProject/webapp/view/fragments/.gitkeep']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/sw.js']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/README.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/index.html']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/.nojekyll']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/_sidebar.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/_navbar.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/_coverpage.md']);
  });

  it('creates project docs', () => {
    assert.file([
      'io-ui5lab-nl-myProject/docs/_coverpage.md',
      'io-ui5lab-nl-myProject/docs/implementation_information/configuration.md'
    ]);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/implementation_information/extensibility.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/implementation_information/installation.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/implementation_information/related_apps.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/implementation_information/sap_notes.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/implementation_information/support.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/implementation_information/support.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/media/theme.css']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/media/ui5-logo.png']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/product_features/general_data.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/product_features/key_features.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/README.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/_sidebar.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/_navbar.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/_coverpage.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/implementation_information/configuration.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/implementation_information/extensibility.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/implementation_information/installation.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/implementation_information/related_apps.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/implementation_information/sap_notes.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/implementation_information/support.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/product_features/general_data.md']);
  });

  it('creates project docs', () => {
    assert.file(['io-ui5lab-nl-myProject/docs/de-de/product_features/key_features.md']);
  });
});
