import React from 'react';
import Helmet from 'react-helmet';
// import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

class IndexRoute extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Consulting</title>
          <meta name="description" content="subtitle" />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Consulting</h1>
            I offer independent software consulting services for web application development. Not only for server-side software engineering, architecture, and development operations, but project management and operations security as well.

For development I have often worked closely and collaboratively with customers as is outlined in the Agile methodology and the majority of projects that I’ve worked on have employed the Scrum framework to an extent.

I’ve substantial JVM programming experience, particularly JAVA and Groovy. And over the recent years, Python. I’ve not only designed and redesigned relational and non-relational database models using Oracle, MySQL & Cassandra, but have implemented inverted search solutions using ElasticSearch and Solr.

For inquiries please reach out through <a href="https://www.linkedin.com/in/mattclark-io" target="_blank">Linkedin</a>.
            </div>
          </div>
        </div>
      </div>
    );

  // TODO: pull the articles back in
  //   const items = [];
  //   const { title, subtitle } = this.props.data.site.siteMetadata;
  //   const posts = this.props.data.allMarkdownRemark.edges;
  //   posts.forEach((post) => {
  //     items.push(<Post data={post} key={post.node.fields.slug} />);
  //   });
  //   return (
  //     <div>
  //       <Helmet>
  //         <title>{title}</title>
  //         <meta name="description" content={subtitle} />
  //       </Helmet>
  //       <Sidebar {...this.props} />
  //       <div className="content">
  //         <div className="content__inner">
  //           {items}
  //         </div>
  //       </div>
  //     </div>
  //   );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        subtitle0
        subtitle1
        subtitle2
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          linkedin
          telegram
          twitter
          speakerrate
          github
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
