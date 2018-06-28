# Key Features

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

## Create Business Partner Master Data

1. Use Create button to create new Business Partner master data. You can choose Person or Organization from the drop down menu. The Create Person/Organization dialog box that appears lets you to quickly add the basic fields. If you want to add more details, click OK and navigate to Details page.

2. Enter values in the relevant fields such as Basic Data, Roles, Address and so on.

3. Save the entries.

## Edit Business Partner Master Data

1. Open a Business Partner master data record from the List Report page.

2. Save the changes.

> **Note**  
> You can also use the Search field and click Go button to find the Business Partner master data to change.
> Click Edit button. This opens the Business Partner data in draft mode for you to change the values.

## Copy Business Partner Master Data

You can use this option to create a new Business Partner master record if a Business Partner master record already exists with similar data.

1. Choose a Business Partner master from the List Report page.

2. Click Copy button. By default, all data is selected to copy. The new Business Partner master data page is displayed with all the details of the Business Partner that you selected previously, except the business partner number, in draft mode.

3. Edit the values as per your requirement.

4. Save the entries. The Business Partner master data is saved with a new business partner number.

---

**In addition, the app supports the following technical features and options:**

## Role Based Navigation

When you create business partners with roles, you can navigate to the role specific apps to maintain master data.

For example, you can maintain Customer sales data using the Customer Master app. Similarly, if you choose Supplier role, you can maintain purchase data using the navigation.

1. Open business partner in the draft mode.

2. Choose a role for your business partner. For example, FLCU01 (Customer), or FLVN01 (Supplier)

3. Click the navigate icon ">" to navigate to the role specific app.

For example, if you have chosen a Customer role, then the Customer Master app opens up. You can maintain Customer specific sales data using the Customer Master app.

## Draft Persistence

This app automatically saves your changes as draft, no matter if the record is fully consistent or not. If you close the browser session intentionally or accidentally, the draft version is kept on the database. Later, if you want to continue to edit the Business Partner, you can retrieve it into a draft stage, where you can make the changes. If the data is finalized, you can save it directly into the master tables. When you save the data into the master tables, the system deletes the draft version.

The delete functionality allows you to delete the draft versions of a Business Partner if you wish to discard it, before saving to the master table. Note that, in this case, if you have previously saved a Business Partner in the master table, and wish to delete the draft version that you are editing, the system allows you to discard only the draft version and does not delete the record in the master table.

## Attachments

You can use the feature of attachments to provide related attachments for a master data record. The app supports the Generic Object Service (GOS) attachments.