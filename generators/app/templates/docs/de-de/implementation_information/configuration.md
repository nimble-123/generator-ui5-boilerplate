# Configuration

The following sections list app-specific data required to configure the app:

## SAPUI5 Application

The ICF nodes for the following SAPUI5 application must be activated on the front-end server:

| Component           | Technical Name      | Path to ICF Node                        | SAP UI5 Component            |
|:--------------------|:--------------------|:----------------------------------------|:-----------------------------|
| SAP UI5 Application | <%= bspContainer %> | /sap/bc/ui5_ui5/sap/<%= bspContainer %> | <%= projectNamespace %>      |

## OData Service(s)

The following OData services must be activated on the front-end server. Users require PFCG authorization for the front-end and back-end systems.

| OData Service                  | Version | Back-End Authorization Role (PFCG) |
|:-------------------------------|:--------|:-----------------------------------|
| <%= oDataService %>            | 0001    | <%= pfcgRole %>                    |

## SAP Fiori Launchpad

You require the following data to give users access to the app in the SAP Fiori launchpad.

### Technical Configuration

| Key                        | Value                        |
|:---------------------------|:-----------------------------|
| **Technical Catalog**      | <%= businessCatalog %>       |
| **SAPUI5 Application**     | <%= bspContainer %>          |

### Target Mapping(s)

| Semantic Object            | Semantic Action              | Parameter Key | Parameter Value |
|:---------------------------|:-----------------------------|:--------------|:----------------|
| <%= semanticObject %>      | <%= semanticObjectAction %>  |               |                 |

### Business Catalog(s)

| Catalog Name                        | Catalog Description                  |
|:------------------------------------|:-------------------------------------|
| <%= businessCatalog %>              | <%= businessCatalogText %>           |

### Business Group(s)

| Business Group                      | Group Description                    |
|:------------------------------------|:-------------------------------------|
| <%= businessGroup %>                | <%= businessGroupText %>             |

### Business Role(s)

| Role Name                           | Role Description                     |
|:------------------------------------|:-------------------------------------|
| <%= businessRole %>                 | <%= businessRoleText %>              |

### Search Connector

| Search Component (Software Component) | Application Component | Search Model | Role    |
|:--------------------------------------|:----------------------|:-------------|:--------|
|                                       |                       |              |         |
