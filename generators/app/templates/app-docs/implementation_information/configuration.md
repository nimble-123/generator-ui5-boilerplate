# Configuration

The following sections list app-specific data required to configure the app:

## SAPUI5 Application

The ICF nodes for the following SAPUI5 application must be activated on the front-end server:

| Component           | Technical Name      | Path to ICF Node                        | SAP UI5 Component            |
|:--------------------|:--------------------|:----------------------------------------|:-----------------------------|
| SAP UI5 Application | <%= deploymentBspContainer %> | /sap/bc/ui5_ui5/sap/<%= deploymentBspContainer %> | <%= projectNamespace %>      |

## OData Service(s)

The following OData services must be activated on the front-end server. Users require PFCG authorization for the front-end and back-end systems.

| OData Service                  | Version | Back-End Authorization Role (PFCG) |
|:-------------------------------|:--------|:-----------------------------------|
| <%= docsODataService %>            | 0001    | <%= docsPfcgRole %>                    |

## SAP Fiori Launchpad

You require the following data to give users access to the app in the SAP Fiori launchpad.

### Technical Configuration

| Key                        | Value                         |
|:---------------------------|:------------------------------|
| **Technical Catalog**      | <%= docsBusinessCatalog %>    |
| **SAPUI5 Application**     | <%= deploymentBspContainer %> |

### Target Mapping(s)

| Semantic Object            | Semantic Action                  | Parameter Key | Parameter Value |
|:---------------------------|:---------------------------------|:--------------|:----------------|
| <%= docsSemanticObject %>  | <%= docsSemanticObjectAction %>  |               |                 |

### Business Catalog(s)

| Catalog Name                        | Catalog Description                  |
|:------------------------------------|:-------------------------------------|
| <%= docsBusinessCatalog %>          | <%= docsBusinessCatalogText %>       |

### Business Group(s)

| Business Group                      | Group Description                    |
|:------------------------------------|:-------------------------------------|
| <%= docsBusinessGroup %>            | <%= docsBusinessGroupText %>         |

### Business Role(s)

| Role Name                           | Role Description                     |
|:------------------------------------|:-------------------------------------|
| <%= docsBusinessRole %>             | <%= docsBusinessRoleText %>          |

### Search Connector

| Search Component (Software Component) | Application Component | Search Model | Role    |
|:--------------------------------------|:----------------------|:-------------|:--------|
|                                       |                       |              |         |
