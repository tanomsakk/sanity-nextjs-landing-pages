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
                  buildHookId: '5fab7206c1839100dbe7b0d1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n6kefn12',
                  apiId: '89a31099-8b6c-4e74-8224-5dcc9c1a0ca1'
                },
                {
                  buildHookId: '5fab7207336b69011afd09aa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f95mki16',
                  apiId: '770febb2-3a21-4323-8975-aee89503bbcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tanomsakk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f95mki16.netlify.app', category: 'apps'}
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
