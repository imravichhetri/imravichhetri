import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import { UserCard, UserHeader } from '../components';
import ContactList from '../components/ContactList';

const Contact = ({
  data
}) => {
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
          <div className="inline-block w-[50%] mt-5">
            <div className="flex items-center">
              <StaticImage
                src="../images/icons/mail.svg"
                alt="Mail Icon"
                placeholder="blurred"
                width="50"
                className="h-full w-full overflow-hidden d-block w-20"
                />
                <span className="cursor-pointer">imravichhetri@gmail.com</span>
              </div>
          </div>
          <div className="inline-block w-[50%] mt-5">
            <div className="flex items-center">
              <StaticImage
                src="../images/icons/phone.svg"
                alt="Phone Icon"
                placeholder="blurred"
                width="50"
                className="h-full w-full overflow-hidden d-block w-20"
                />
                <span className="cursor-pointer">+91-7017872344</span>
              </div>
          </div>
          <div className="inline-block w-[50%] mt-5">
            <div className="flex items-center">
              <StaticImage
                src="../images/icons/linkedin.svg"
                alt="Linkedin Icon"
                placeholder="blurred"
                width="50"
                className="h-full w-full overflow-hidden d-block w-20"
                />
              <span className="cursor-pointer">https://www.linkedin.com/in/imravichhetri/</span>
            </div>
          </div>
          <div className="inline-block w-[50%] mt-5">
            <div className="flex items-center">
              <StaticImage
                src="../images/icons/instagram.svg"
                alt="Instagram Icon"
                placeholder="blurred"
                width="50"
                className="h-full w-full overflow-hidden d-block w-20"
                />
              <span className="cursor-pointer">@foodie.backpacker</span>
            </div>
          </div>
          <div className="inline-block w-[50%] mt-5">
            <div className="flex items-center">
              <StaticImage
                src="../images/icons/github.svg"
                alt="Github Icon"
                placeholder="blurred"
                width="50"
                className="h-full w-full overflow-hidden d-block w-20"
                />
              <span className="cursor-pointer">@imravichhetri</span>
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
