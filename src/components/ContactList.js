import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const ContactList = ({
  list
}) => {
  return list.map (({
    icon,
    text,
    href,
    alt
  }) => (
    <div className="inline-block w-[50%] mt-5">
      <div className="flex items-center">
        <StaticImage
          src={icon}
          alt={alt}
          placeholder="blurred"
          width="50"
          className="h-full w-full overflow-hidden d-block w-20"
          />
          <a href={href} className="cursor-pointer">{text}</a>
        </div>
    </div>
  ));
};


export default ContactList;
