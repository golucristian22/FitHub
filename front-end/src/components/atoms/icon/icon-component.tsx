import React from "react";

const icon = (iconName: string, iconWidth: string, iconHeight: string, iconColor: string) => {
  switch (iconName) {
    case "basket":
      return <svg width={iconWidth} height={iconHeight} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 12.5H26.25M3.75 12.5L6.25 25H23.75L26.25 12.5M3.75 12.5L11.25 5M26.25 12.5L18.75 5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> 
    case "user":
      return <svg width={iconWidth} height={iconHeight} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29823 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29823 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z" fill={iconColor}/><path d="M15.0002 18.125C8.7377 18.125 3.6377 22.325 3.6377 27.5C3.6377 27.85 3.9127 28.125 4.2627 28.125H25.7377C26.0877 28.125 26.3627 27.85 26.3627 27.5C26.3627 22.325 21.2627 18.125 15.0002 18.125Z" fill={iconColor}/></svg>;
    case "github":
      return <svg width={iconWidth} height={iconHeight} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_8_7)"><path fillRule="evenodd" clipRule="evenodd" d="M14 0C21.7322 0 28 6.4259 28 14.3541C28 20.6947 23.9932 26.0735 18.4338 27.9733C17.724 28.1147 17.472 27.6665 17.472 27.2843C17.472 26.8111 17.4888 25.2655 17.4888 23.3447C17.4888 22.0063 17.0408 21.1328 16.5382 20.6876C19.656 20.332 22.932 19.1181 22.932 13.6049C22.932 12.0369 22.3888 10.7574 21.49 9.75215C21.6356 9.38955 22.1158 7.92954 21.3528 5.95274C21.3528 5.95274 20.1796 5.56811 17.507 7.42451C16.3884 7.10671 15.19 6.94681 14 6.94121C12.81 6.94681 11.613 7.10671 10.4958 7.42451C7.8204 5.56811 6.6444 5.95274 6.6444 5.95274C5.8842 7.92954 6.3644 9.38955 6.5086 9.75215C5.614 10.7574 5.0666 12.0369 5.0666 13.6049C5.0666 19.1041 8.3356 20.3366 11.445 20.6992C11.0446 21.0576 10.682 21.6899 10.556 22.6181C9.758 22.9849 7.7308 23.6197 6.482 21.4259C6.482 21.4259 5.7414 20.0467 4.3358 19.9459C4.3358 19.9459 2.9708 19.9278 4.2406 20.8182C4.2406 20.8182 5.1576 21.2592 5.7946 22.9182C5.7946 22.9182 6.6164 25.4801 10.5112 24.6121C10.5182 25.8119 10.5308 26.9427 10.5308 27.2843C10.5308 27.6637 10.2732 28.1077 9.5746 27.9747C4.011 26.0777 0 20.6961 0 14.3541C0 6.4259 6.2692 0 14 0Z" fill={iconColor}/></g><defs><clipPath id="clip0_8_7"><rect width={iconWidth} height={iconHeight} fill="white"/></clipPath></defs></svg>
    case "linkedin":
      return <svg width={iconWidth} height={iconHeight} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_18_31)"><path d="M14 0C6.26719 0 0 6.26719 0 14C0 21.7328 6.26719 28 14 28C21.7328 28 28 21.7328 28 14C28 6.26719 21.7328 0 14 0ZM10.0844 19.857H7.35547V11.1234H10.0844V19.857ZM8.64609 10.0297H8.62422C7.63437 10.0297 6.99453 9.3625 6.99453 8.51484C6.99453 7.65078 7.65625 7 8.6625 7C9.66875 7 10.2867 7.65078 10.3086 8.51484C10.3141 9.35703 9.67422 10.0297 8.64609 10.0297ZM21 19.857H17.9047V15.3398C17.9047 14.1586 17.4234 13.3492 16.357 13.3492C15.5422 13.3492 15.0883 13.8961 14.8805 14.4211C14.8039 14.607 14.8148 14.8695 14.8148 15.1375V19.857H11.7469C11.7469 19.857 11.7852 11.8508 11.7469 11.1234H14.8148V12.4961C14.9953 11.8945 15.9742 11.0414 17.5383 11.0414C19.4797 11.0414 21 12.2992 21 15.0008V19.857Z" fill={iconColor}/></g><defs><clipPath id="clip0_18_31"><rect width={iconWidth} height={iconHeight} fill="white"/></clipPath></defs></svg>
    default:
      throw new Error(`Invalid name for icon: ${icon}`);
  }
};

interface IconPropertiesInterface {
  iconName: string;
  iconWidth: string;
  iconHeight: string;
  iconColor: string;
}

function Icon(props: IconPropertiesInterface) {
  return (
    <div className="icon">
      {icon(props.iconName, props.iconWidth, props.iconHeight, props.iconColor)}
    </div>
  );
}

export default Icon;
