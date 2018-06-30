'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ui5-boilerplate:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      projectType: 'simple-app',
      projectName: 'io.ui5lab.nl.myProject',
      projectNamespace: 'io.ui5lab.nl.myProject',
      projectDescription: 'A simple ui5 application.',
      projectRepository: 'io-nlsltz-ui5-myproject',
      projectOwner: 'nlsltz',
      projectAuthor: 'nlsltz',
      projectAuthorEmail: 'info@nilslutz.de',
      minimumUI5Version: '1.56',
      libSource: 'https://openui5.hana.ondemand.com/',
      libsUsed: ['sap.m', 'sap.ui.core', 'sap.ui.layout', 'themelib_sap_belize'],
      devPackage: 'ZIO_UI5LAB_NL',
      bspContainer: 'ZIO_UI5LAB_NL_MYPROJECT',
      bspContainerText: 'UI Application io.ui5lab.nl.myProject',
      transportNo: 'NPL9000123',
      nwSys: 'http://localhost:8000',
      nwSysUser: 'developer',
      nwSysPassword: 'Appl1ance',
      businessRole: '',
      businessRoleText: '',
      businessGroup: '',
      businessGroupText: '',
      businessCatalog: '',
      businessCatalogText: '',
      semanticObject: '',
      semanticObjectAction: '',
      oDataService: '',
      pfcgRole: '',
      frontendProductVersion: '',
      frontendSPS: '',
      frontendSCV: '',
      backendProductVersion: '',
      backendSPS: '',
      backendSCV: '',
      applicationComponent: '',
      applicationComponentText: ''
    });
  });

  it('creates project meta files', () => {
    assert.file([
      'io-ui5lab-nl-myProject/ui5.yaml',
      'io-ui5lab-nl-myProject/README.md',
      'io-ui5lab-nl-myProject/package.json',
      'io-ui5lab-nl-myProject/neo-app.json',
      'io-ui5lab-nl-myProject/LICENSE',
      'io-ui5lab-nl-myProject/Gruntfile.js',
      'io-ui5lab-nl-myProject/.travis.yml',
      'io-ui5lab-nl-myProject/.npmrc',
      'io-ui5lab-nl-myProject/.gitignore',
      'io-ui5lab-nl-myProject/.eslintrc',
      'io-ui5lab-nl-myProject/.eslintignore',
      'io-ui5lab-nl-myProject/.editorconfig',
      'io-ui5lab-nl-myProject/.che/project.json'
    ]);
  });

  it('creates project files', () => {
    assert.file([
      'io-ui5lab-nl-myProject/webapp/manifest.json',
      'io-ui5lab-nl-myProject/webapp/index.html',
      'io-ui5lab-nl-myProject/webapp/Component.js',
      'io-ui5lab-nl-myProject/webapp/controller/Base.controller.js',
      'io-ui5lab-nl-myProject/webapp/controller/Home.controller.js',
      'io-ui5lab-nl-myProject/webapp/css/style.css',
      'io-ui5lab-nl-myProject/webapp/i18n/i18n.properties',
      'io-ui5lab-nl-myProject/webapp/model/models.js',
      'io-ui5lab-nl-myProject/webapp/view/Home.view.xml',
      'io-ui5lab-nl-myProject/webapp/view/dialogs/.gitkeep',
      'io-ui5lab-nl-myProject/webapp/view/fragments/.gitkeep'
    ]);
  });

  it('creates project docs', () => {
    assert.file([
      'io-ui5lab-nl-myProject/docs/sw.js',
      'io-ui5lab-nl-myProject/docs/README.md',
      'io-ui5lab-nl-myProject/docs/index.html',
      'io-ui5lab-nl-myProject/docs/.nojekyll',
      'io-ui5lab-nl-myProject/docs/_sidebar.md',
      'io-ui5lab-nl-myProject/docs/_navbar.md',
      'io-ui5lab-nl-myProject/docs/_coverpage.md',
      'io-ui5lab-nl-myProject/docs/implementation_information/configuration.md',
      'io-ui5lab-nl-myProject/docs/implementation_information/extensibility.md',
      'io-ui5lab-nl-myProject/docs/implementation_information/installation.md',
      'io-ui5lab-nl-myProject/docs/implementation_information/related_apps.md',
      'io-ui5lab-nl-myProject/docs/implementation_information/sap_notes.md',
      'io-ui5lab-nl-myProject/docs/implementation_information/support.md',
      'io-ui5lab-nl-myProject/docs/media/theme.css',
      'io-ui5lab-nl-myProject/docs/media/ui5-logo.png',
      'io-ui5lab-nl-myProject/docs/product_features/general_data.md',
      'io-ui5lab-nl-myProject/docs/product_features/key_features.md',
      'io-ui5lab-nl-myProject/docs/de-de/README.md',
      'io-ui5lab-nl-myProject/docs/de-de/_sidebar.md',
      'io-ui5lab-nl-myProject/docs/de-de/_navbar.md',
      'io-ui5lab-nl-myProject/docs/de-de/_coverpage.md',
      'io-ui5lab-nl-myProject/docs/de-de/implementation_information/configuration.md',
      'io-ui5lab-nl-myProject/docs/de-de/implementation_information/extensibility.md',
      'io-ui5lab-nl-myProject/docs/de-de/implementation_information/installation.md',
      'io-ui5lab-nl-myProject/docs/de-de/implementation_information/related_apps.md',
      'io-ui5lab-nl-myProject/docs/de-de/implementation_information/sap_notes.md',
      'io-ui5lab-nl-myProject/docs/de-de/implementation_information/support.md',
      'io-ui5lab-nl-myProject/docs/de-de/product_features/general_data.md',
      'io-ui5lab-nl-myProject/docs/de-de/product_features/key_features.md'
    ]);
  });
});
