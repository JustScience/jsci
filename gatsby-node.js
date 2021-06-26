const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        query Products {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    data.allMdx.nodes.forEach(node => {
        actions.createPage({
            path: '/products/' + node.frontmatter.slug,
            component: path.resolve('src/templates/product-page-layout.js'),
            context: {slug: node.frontmatter.slug}
        })
    })
}