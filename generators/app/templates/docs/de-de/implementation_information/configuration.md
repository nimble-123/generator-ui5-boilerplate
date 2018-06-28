# Configuration

The following sections list app-specific data required to configure the app:

## SAPUI5 Application

The ICF nodes for the following SAPUI5 application must be activated on the front-end server:

| Component           | Technical Name | Path to ICF Node                   | SAP UI5 Component            |
|:--------------------|:---------------|:-----------------------------------|:-----------------------------|
| SAP UI5 Application | NW_APS_APJ     | /sap/bc/ui5_ui5/sap/nw_aps_apj     | nw.core.appjobs              |

## OData Service(s)

The following OData services must be activated on the front-end server. Users require PFCG authorization for the front-end and back-end systems.

| OData Service                  | Version | Back-End Authorization Role (PFCG) |
|:-------------------------------|:--------|:-----------------------------------|
| APJ_JOB_MANAGEMENT_SRV         | 0001    | SAP_BCR_SCM_MRPRUN                 |
| APJ_JOB_MANAGEMENT_SRV*        |         | SAP_BCR_CORE_APJ                   |
*Added automatically due to dependencies

## SAP Fiori Launchpad

You require the following data to give users access to the app in the SAP Fiori launchpad.

### Technical Configuration

| Key                        | Value                        |
|:---------------------------|:-----------------------------|
| **Technical Catalog**      | SAP_TC_COMMON                |
| **SAPUI5 Application**     | NW_APS_APJ                   |

### Target Mapping(s)

| Semantic Object            | Semantic Action              | Parameter Key | Parameter Value |
|:---------------------------|:-----------------------------|:--------------|:----------------|
| ApplicationJob             | show                         |               |                 |

### Business Catalog(s)

| Catalog Name                        | Catalog Description                  |
|:------------------------------------|:-------------------------------------|
| SAP_CMD_BC_SUPPLIER_BLK_PC          | Data Privacy - Supplier Master       |

### Business Group(s)

| Business Group                      | Group Description                    |
|:------------------------------------|:-------------------------------------|
| SAP_CMD_BCG_DP_PC                   | Data Privacy                         |

### Business Role(s)

| Role Name                           | Role Description                     |
|:------------------------------------|:-------------------------------------|
| SAP_BR_DATA_PRIVACY_SPECIALIST      | Data Privacy Specialist              |

### Search Connector

| Search Component (Software Component) | Application Component | Search Model | Role    |
|:--------------------------------------|:----------------------|:-------------|:--------|
|                                       |                       |              |         |