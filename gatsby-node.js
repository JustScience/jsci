const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        query Pages {
            allShopifyProduct {
                edges {
                    node {
                        shopifyId
                        handle
                    }
                }
            }
            allYoutubeVideo(filter: {channelId: {eq: "UCecJMZiU33IQMawV4kqujxA"}}) {
                edges {
                    node {
                        id
                        videoId
                    }
                }
            }
        }
    `)

    data.allShopifyProduct.edges.forEach(({node}) => {
        actions.createPage({
            path: '/shop/' + node.handle,
            component: path.resolve('src/templates/shopify-product-template.js'),
            context: {shopifyId: node.shopifyId,}
        })
    })

    data.allYoutubeVideo.edges.forEach(({node}) => {
        actions.createPage({
            path: '/video/' + node.videoId,
            component: path.resolve('src/templates/youtube-video-template.js'),
            context: {id: node.id,}
        })
    })
}