import { GatsbyImage, getImage, getSrc, StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const ContactList = ({
  list
}) => {
  return list.map (({
    icon,
    text,
    href,
    alt
  }) => {
    const image = getImage(icon)
    return (
    <div className="inline-block w-[50%] mt-5" key={icon}>
      <div className="flex items-center">
        <GatsbyImage
          image={image}
          alt={alt}
          placeholder="blurred"
          width="50"
          className="h-full w-full overflow-hidden d-block w-20"
          />
          <a href={href} className="cursor-pointer">{text}</a>
        </div>
    </div>
  )
    });
};


export default ContactList;
