/*global QUnit*/

sap.ui.define([
	"<%= projectNamespaceAMD %>/model/GroupSortState",
	"sap/ui/model/json/JSONModel"
], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("UnitsInStock").length, 1, "The sorting by UnitsInStock returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("ProductName").length, 1, "The sorting by ProductName returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("UnitsInStock").length, 1, "The group by UnitsInStock returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to UnitsInStock if the user groupes by UnitsInStock", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("UnitsInStock");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "UnitsInStock", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by ProductName and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "UnitsInStock");

		this.oGroupSortState.sort("ProductName");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});