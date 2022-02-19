import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { graphql } from 'gatsby';
import { ContactList, UserCard, UserHeader } from '../components';

const Contact = ({data}) => {
  return (
    <UserCard>
      <UserHeader>Contact</UserHeader>
      <div className="my-7 px-5">
        <div className="my-7 text-3xl">
          Feel <b>free</b> to contact me!
        </div>
        <div className="my-7 ">
          {/* <ContactList
            list={data?.site?.siteMetadata?.contacts??[]}
          /> */}
          <div className="inline-block w-[50%] mt-5">
            <div className="flex items-center">
              <StaticImage
                src={"../images/icons/mail.svg"}
                alt={"Email"}
                placeholder="blurred"
                width="50"
                className="h-full w-full overflow-hidden d-block w-20"
                />
                <a href={"mailto:imravichhetri@gmail.com"} className="cursor-pointer">{"imravichhetri@gmail.com"}</a>
              </div>
          </div>
          <div className="inline-block w-[50%] mt-5">
          <div className="flex items-center">
            <StaticImage
              src={"../images/icons/phone.svg"}
              alt={"Phone"}
              placeholder="blurred"
              width="50"
              className="h-full w-full overflow-hidden d-block w-20"
              />
              <a href={"tel:+917017872344"} className="cursor-pointer">{"+91-7017872344"}</a>
            </div>
          </div>
          <div className="inline-block w-[50%] mt-5">
          <div className="flex items-center">
            <StaticImage
              src={"../images/icons/linkedin.svg"}
              alt={"LinkedIn"}
              placeholder="blurred"
              width="50"
              className="h-full w-full overflow-hidden d-block w-20"
              />
              <a href={"https://www.linkedin.com/in/imravichhetri"} className="cursor-pointer">{"https://www.linkedin.com/in/imravichhetri"}</a>
            </div>
        </div>
        <div className="inline-block w-[50%] mt-5">
        <div className="flex items-center">
          <StaticImage
            src="../images/icons/instagram.svg"
            alt={"Instagram"}
            placeholder="blurred"
            width="50"
            className="h-full w-full overflow-hidden d-block w-20"
            />
            <a href={"https://instagram.com/foodie.backpacker"} className="cursor-pointer">{"@foodie.backpacker"}</a>
          </div>
        </div>
        <div className="inline-block w-[50%] mt-5">
        <div className="flex items-center">
          <StaticImage
            src={"../images/icons/github.svg"}
            alt={"Github"}
            placeholder="blurred"
            width="50"
            className="h-full w-full overflow-hidden d-block w-20"
            />
            <a href={"https://github.com/imravichhetri"} className="cursor-pointer">{"@imravichhetri"}</a>
          </div>
        </div>
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
