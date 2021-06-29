// import React from 'react'
// import { graphql } from 'gatsby'
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import Layout from '../components/Layout'
// import { HeaderSpacer } from '../components/Layout/style'

// export default function ProductDetails({ data }) {
//     const { body } = data.mdx

//     return (
//         <Layout>
//             <HeaderSpacer />
//             <MDXRenderer>{body}</MDXRenderer>
//         </Layout>
//     )
// }

// export const query = graphql`
//     query MyQuery($slug: String) {
//         mdx(frontmatter: {slug: {eq: $slug}}) {
//             frontmatter {
//                 title
//             }
//             body
//         }
//     }
// `