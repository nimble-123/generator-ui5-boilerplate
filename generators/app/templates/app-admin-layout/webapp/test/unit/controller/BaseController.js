sap.ui.define(
    [
        'sap/ui/base/ManagedObject',
        'sap/ui/core/mvc/Controller',
        '<%= projectNamespaceAMD %>/controller/BaseController',
        'sap/ui/thirdparty/sinon',
        'sap/ui/thirdparty/sinon-qunit',
    ],
    function(ManagedObject, Controller, BaseController /*, sinon, sinonQunit*/) {
        'use strict';

        QUnit.module('Test model modification', {
            beforeEach: function() {
                this.oBaseController = new BaseController();
                this.oViewStub = new ManagedObject({});
                sinon.stub(Controller.prototype, 'getView').returns(this.oViewStub);
            },

            afterEach: function() {
                Controller.prototype.getView.restore();

                this.oViewStub.destroy();
            },
        });

        QUnit.test('the qunit setup', function(assert) {
            // Arrange
            // initial assumption: view model is set to view

            // Act

            // Assumption
            assert.equal(1, 1, '1 and 1 are equal');
        });
    }
);
