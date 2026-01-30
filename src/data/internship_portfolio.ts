export interface InternshipItem {
  title: string
  description: string
  link?: string
}

export interface InternshipSection {
  sectionTitle: string
  items: InternshipItem[]
}

export const INTERNSHIP_PORTFOLIO_SECTIONS: InternshipSection[] = [
  {
    sectionTitle: 'Operational',
    items: [
      {
        title: 'SOP OVERVIEW',
        description:
          "This document is an overview of the data team's standard operational procedures (SOP). It includes a description of each procedure, when it's due, and who does it.",
        link: 'https://ff88ddb04dc2a7296968b8217d176ce343068d767da1e0662e3b329-apidata.googleusercontent.com/download/storage/v1/b/adalida_design_project_echo/o/Operational%20Documentation%2FSOP%20Overview.pdf?jk=AUzyfrh-5bGFKhejM7vtsrmpbsb0COYCMidCrdcASJFOKnO9eU4f9UroLlCU8htBpcB3hNRjL0oUjGLKb2_eg4fh-s7VakT1H6acIHHCUSljEQbFVMU0E2s3OXt8tqvqYcqgh9vJwrqX4I0HpUCFLGJOqe94ncQLomyCCQ5zpOZTJef7GMjQo4QaFaTDNIUkF-VaTt0xHn5FYqAcI2HBmYFuaUz-W22csG0RCOiCdUA3qOa2DSP3pqv_mCRJiqA8MmTlnEibE_n6Aj8F41ZQ_YMtz6CiQGhpMNDxvy65gDTF4BWuln_SMJn8nBwOXXPkTEt7dsam1Rr1m9hdRFsA2DD4O_r1bzJyQOyHyjZ498QMPD-SFyALSO0HeuCP19WOIOYnOWYPHQV8_aBU94Ut8DhoP6rW5GFJT6-UbNZLyYOGl1gL5vZD_OdP1xuiU7abr2hYYN4ylmC4j6EdvlPY37V3HJE3ebXWjSFeiK4GoKW--VBC2D7WAsec8rYPuYH4qGYONREjAe58M4q2UjvXw1ELmNtmz6NcZH-Ja1v8Oi9a5bEREj29pAo-xnq3MEIax_upilx11g57OdtaW5DMCnaz68gH-H16M1r907sv9MD4ky05GWii_v754Trs3X7Ue4rJLslbhrCH1MrkNlGKBoVc7aQ92Kv_t-TsZdLbX5PIce_WnqGhL5IFFVQr-DG-P5Ey6VHWngdbXanF9785kDh0RW09UpUT3F20ouFfZkIPnWAc6HeBl4epq0HASTG-3i7L-8exV0618DeIeNm-fQDO65KXlWbbMNVPFmdb6oi8XRHU1Z1Ty03qterdZXOBuqsIsYnYGYn8rbc4PrGF3XvOXf_i6oECyzs7ZtPQRrxdqLNGTld0xGN_wObkkcLBrv5dEmZkSYCsGfOwL_x-NUNnnSllwIlzcgIr0nriC5Z_sTAzR-xmLLOnr9HapCCzCPpHyMQdIF5y9_PWYvJV8DUqaLzy0_0nC-Z1IMnBl0-YjffJ5oO9nYytCFvEFqIWsYu0R9whCTmgPHPzrXWJalvM3qy1lYUloNSIVbQ7cQQwTEb7_gclspM2aLIFwpYq29gj_YlP3vV6q2wNXRaYU1W9FLWm_UcvqpqVHY3z8WQH0LwxLN-SaMyfGw-RZTy7jo3le2Ee16vEmVRHb5fz14QU1LevvhuGDBSW7SD-IAd_k9uFqZHBe7cPyAeiQTazy0gqpxLIF8fk9Z_y3pwkzuzKfXqc3B8u4KmK4NTx5Ctn5r6910EKZuRRTEjxRMdnSJHOrFoqGEt-CKjD5UP_-mOQ0R-HM7qJtFK1Bw&isca=1'
      },
      {
        title: 'JIRA STORY POINT SCALE',
        description:
          "This document is an overview about the data team's Jira Story Point Scale. The ECHO data team uses Jira to track and manage tasks. This document provides a guide on how to decide story points for our tickets.",
        link: 'https://storage.cloud.google.com/adalida_design_project_echo/Operational%20Documentation/JIRA%20Story%20Point%20Scale.pdf?authuser=1'
      }
    ]
  },
  {
    sectionTitle: 'Procedural',
    items: [
      {
        title: 'SETTING UP A DEVELOPMENT ENVIRONMENT',
        description:
          'This is an instructional guide for setting up a development environment. This development environment set up was used for making web edits to the Project ECHO website.',
        link: 'https://storage.cloud.google.com/adalida_design_project_echo/Procedural%20Documentation/SETTING%20UP%20A%20DEVELOPMENT%20ENVIRONMENT.pdf?authuser=1'
      },
      {
        title: 'NURSING HOME ECHO USER GUIDE (CAN)',
        description:
          'This is an informative training guide for the Nursing Home instance of iECHO. This training guide introduces and provides a full overview for IECHO for Nursing Homes and how to enter information.',
        link: 'https://storage.cloud.google.com/adalida_design_project_echo/Procedural%20Documentation/NURSING%20HOME%20ECHO%20USER%20GUIDE%20(CAN).pdf?authuser=1'
      },
      {
        title: 'DATA ENTRY IECHO GUIDE',
        description:
          'This is an informative user guide for entering data into IECHO. IECHO is a website, which participants of Project ECHO enter information. This guide highlights ways to enter in data that is clean and consistent.',
        link: 'https://storage.cloud.google.com/adalida_design_project_echo/Procedural%20Documentation/DATA%20ENTRY%20IECHO%20GUIDE.pdf?authuser=1'
      },
      {
        title: 'INSTALLING POWER BI INSTRUCTIONS',
        description:
          'This is an instructional guide for downloading Power BI onto a Project ECHO computer. Power BI is a data visualization software, which is used to clean, visualize, and transform data.',
        link: 'https://storage.cloud.google.com/adalida_design_project_echo/Procedural%20Documentation/INSTALLING%20POWER%20BI%20INSTRUCTIONS.pdf?authuser=1'
      }
    ]
  },
  {
    sectionTitle: 'Technical',
    items: [
      {
        title: 'ZOOM DATABASE REPOSITORY DIAGRAM',
        description:
          "This is a diagram showcasing the workflow of data from Zoom's database to Project ECHO's database. Once, the data is imported to ECHO's database, it is then transferred to Power BI for the user/client to use.",
        link: 'https://storage.cloud.google.com/adalida_design_project_echo/Technical%20Documentation/ZOOM%20DATABASE%20REPOSITORY%20DIAGRAM.pdf?authuser=1'
      },
      {
        title: 'JAVASCRIPT DOCUMENTATION',
        description:
          "This link connects to a private GitHub Gist showcasing JavaScript code. This JavaScript code is hosted on ECHO's web server and aides in updating their website.",
        link: 'https://gist.github.com/AdalidaBaca/4132027b9251a74bca82515cf1291345'
      },
      {
        title: 'SSH WORKFLOW DIAGRAM',
        description:
          'This diagram shows the technical workflow for updating the ECHO website. The developer can push changes to the code base and those changes are then automatically pulled and updated to the server.',
        link: 'https://storage.cloud.google.com/adalida_design_project_echo/Technical%20Documentation/SSH%20WORKFLOW%20DIAGRAM.pdf?authuser=1'
      },
      {
        title: 'FQHC DOCUMENTATION',
        description:
          'This link connects to a private GitHub Gist showcasing Ruby code. This Ruby code automates a manual process for looking up FQHCs. FQHCs are Federally Qualified Health Centers and ECHO receives a grant for working with these FQHCs.'
      }
    ]
  }
]
