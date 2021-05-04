export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60914f967fd53019cf90cecf',
                  title: 'Sanity Studio',
                  name: 'nextcms-studio',
                  apiId: '26ba8993-8cae-4abd-bafe-1b33d6865943'
                },
                {
                  buildHookId: '60914f972c71441dba6d5299',
                  title: 'ScaleSource Website',
                  name: 'nextcms-web',
                  apiId: '30505c0d-39ac-4f83-8eef-ae5d795f7356'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/antonholmes/nextcms',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nextcms-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
