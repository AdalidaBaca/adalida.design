export interface InternshipItem {
  title: string
  description: string
  link?: string
}

interface InternshipSection {
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
        link: 'https://ff958adc430c094b8b4fcaa8d1a51ba7e28517921a0d65bceafb86e-apidata.googleusercontent.com/download/storage/v1/b/adalida_design_project_echo/o/Operational%20Documentation%2FSOP%20Overview.pdf?jk=AUzyfrik4tE8fucDqGVgp0XVGqUMqGpP-1lL6Kwyb23nrAjAIXuUA1hA51XbsqBlKOHiBZOQg1hgSNTIenteGPzbMBT7DNShpGMprHWjLDooTH3uiZApDCaHrRnMPIWkH92fo15I3EbcSxKPhDy1GexO3HZ7Bf1rmFoQ5sColZmYj_8M92zOn694j0H3GMk9uVrp2OQf5EU6SkiU12ol9jR6nD6YlI716FDgpEDMXRJLOcMojoGn1yjSAoRan_44rhaRQUCbtOr9kSxC8cV8e4r1ISUPB4rVltPZwxUkf7BdUIcu-lTNtnscNXX-HGx4OSocAsV-c4kmErMoMsKj23IS8wTOHpdoGcBijV-7N59yJf53f8P3Jc5bDTb2Uy_lrPC7XBjcKBZvwW8KeEun0MdhzyMtFzeMgg0OxIKVXPyI7hKsh5-Wdn-SuNxORquSPEdKknI2vVvkdlc4W22n1jah0p2m1G6esqaox_IrzfxmGrSuaeIQhgNHd_4VGtAU24ifJqtO-6XKkCdkSd18jwiIniWD_hs61y7O0jHbW0qKYT1_vxrM-9vU9JiwTFZaIsqfmsSZyNqoFk5RdrOpZwMqs7_dq3VxI_uP0GIAZFwQifXlbhqx8vRQc8sBjwSVQ36aSs9lcjbHThVyYTn1bHkJgYIWBs2-xdyDYgA3A1Wqb_l86Ecn3eubK0J23AfLjkUiA2nV16IEs8ZE-KOpggYd1Ev1vEqHIc7CXFd2UuEaqanYut12wcv6f2-fOmfKC4oyLUtEuPcoo9Ck18P3S2a_YzkqASYsyD_bWVnHjnZsO2gsFb5xoo67A5UFgqAUEDRNJVRzuVaSAbLuKqUWKWLP8H6wr5_MyFS2swIan0Kbqke8iv7AdNua60u_NFPOE5HIHOiscA4n8s6uerwtYZsstyyBR8XnIyDS4WC5Kx-wRmTOQQmixAjQ-lOU0iX0BYopKPHNFqcChqMPEp-IJXvowx6LTcdQ-5rktBH79GKbRa8oZeg8oMM452sSWH7fbUvz7VjtguOircuZYd-pqI2OZfSMPgrghu2yvOa3VGsXnDrWiYsa4r77zcFtIWt9St5h-ksI1EynvxTviD_NTdMNymgzy0scNfmoJyRT1t8KK_XJZhVwHQq1W6dJfux0B74OkdYm5Dm7VzhHfuxdsdToUY_LAjrY-QdrdzQXwwuSebLJXoDkrLv5gqiTahJkd-Ryt3Jl4YHVY7mjFEWgqPaoVGOqR66gWfhMIRTOhKs6wLq2Vxuwpc_21OASdO3Pqcv19s8sDcLG89MjvOZA35ZVvr5XU37t9nmg&isca=1'
      },
      {
        title: 'JIRA STORY POINT SCALE',
        description:
          "This document is an overview about the data team's Jira Story Point Scale. The ECHO data team uses Jira to track and manage tasks. This document provides a guide on how to decide story points for our tickets.",
        link: 'https://storage.googleapis.com/adalida_design_project_echo/Operational%20Documentation/JIRA%20Story%20Point%20Scale.pdf'
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
        link: 'https://storage.googleapis.com/adalida_design_project_echo/Procedural%20Documentation/SETTING%20UP%20A%20DEVELOPMENT%20ENVIRONMENT.pdf'
      },
      {
        title: 'NURSING HOME ECHO USER GUIDE (CAN)',
        description:
          'This is an informative training guide for the Nursing Home instance of iECHO. This training guide introduces and provides a full overview for IECHO for Nursing Homes and how to enter information.',
        link: 'https://storage.googleapis.com/adalida_design_project_echo/Procedural%20Documentation/NURSING%20HOME%20ECHO%20USER%20GUIDE%20(CAN).pdf'
      },
      {
        title: 'DATA ENTRY IECHO GUIDE',
        description:
          'This is an informative user guide for entering data into IECHO. IECHO is a website, which participants of Project ECHO enter information. This guide highlights ways to enter in data that is clean and consistent.',
        link: 'https://storage.googleapis.com/adalida_design_project_echo/Procedural%20Documentation/DATA%20ENTRY%20IECHO%20GUIDE.pdf'
      },
      {
        title: 'INSTALLING POWER BI INSTRUCTIONS',
        description:
          'This is an instructional guide for downloading Power BI onto a Project ECHO computer. Power BI is a data visualization software, which is used to clean, visualize, and transform data.',
        link: 'https://storage.googleapis.com/adalida_design_project_echo/Procedural%20Documentation/INSTALLING%20POWER%20BI%20INSTRUCTIONS.pdf'
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
        link: 'https://storage.googleapis.com/adalida_design_project_echo/Technical%20Documentation/ZOOM%20DATABASE%20REPOSITORY%20DIAGRAM.pdf'
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
        link: 'https://storage.googleapis.com/adalida_design_project_echo/Technical%20Documentation/SSH%20WORKFLOW%20DIAGRAM.pdf'
      },
      {
        title: 'FQHC DOCUMENTATION',
        description:
          'This link connects to a private GitHub Gist showcasing Ruby code. This Ruby code automates a manual process for looking up FQHCs. FQHCs are Federally Qualified Health Centers and ECHO receives a grant for working with these FQHCs.'
      }
    ]
  }
]
