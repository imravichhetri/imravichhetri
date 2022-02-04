import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import ContactList from '../components/ContactList';
import { graphql } from 'gatsby';
import { ContactList, UserCard, UserHeader } from '../components';

const Contact = ({data}) => {
  console.log(data,'data---');
  return (
    <UserCard>
      <UserHeader>Contact</UserHeader>
      <div className="my-7 px-5">
        <div className="my-7 text-3xl">
          Feel <b>free</b> to contact me!
        </div>
        <div className="my-7 ">
          <ContactList
            list={data?.site?.siteMetadata?.contacts??[]}
          />
        </div>
      </div>
    </UserCard>
  )
}

export const query = graphql`
  query Contact {
    site {
      siteMetadata {
        contacts{
          icon
          href
          alt
          text
        }
      }
    }
  }
`;
export default Contact;
