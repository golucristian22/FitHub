const icon = (iconName, iconWidth, iconHeight, iconColor) => {
  switch (iconName) {
    case "basket":
      return <svg width={iconWidth} height={iconHeight} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 12.5H26.25M3.75 12.5L6.25 25H23.75L26.25 12.5M3.75 12.5L11.25 5M26.25 12.5L18.75 5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> 
    case "user":
      return <svg width={iconWidth} height={iconHeight} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29823 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29823 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z" fill={iconColor}/><path d="M15.0002 18.125C8.7377 18.125 3.6377 22.325 3.6377 27.5C3.6377 27.85 3.9127 28.125 4.2627 28.125H25.7377C26.0877 28.125 26.3627 27.85 26.3627 27.5C26.3627 22.325 21.2627 18.125 15.0002 18.125Z" fill={iconColor}/></svg>;
    case "github":
      return <svg width={iconWidth} height={iconHeight} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29823 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29823 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z" fill={iconColor}/><path d="M15.0002 18.125C8.7377 18.125 3.6377 22.325 3.6377 27.5C3.6377 27.85 3.9127 28.125 4.2627 28.125H25.7377C26.0877 28.125 26.3627 27.85 26.3627 27.5C26.3627 22.325 21.2627 18.125 15.0002 18.125Z" fill={iconColor}/></svg>;
    case "linkedin":
      return <svg width={iconWidth} height={iconHeight} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_18_31)"><path d="M14 0C6.26719 0 0 6.26719 0 14C0 21.7328 6.26719 28 14 28C21.7328 28 28 21.7328 28 14C28 6.26719 21.7328 0 14 0ZM10.0844 19.857H7.35547V11.1234H10.0844V19.857ZM8.64609 10.0297H8.62422C7.63437 10.0297 6.99453 9.3625 6.99453 8.51484C6.99453 7.65078 7.65625 7 8.6625 7C9.66875 7 10.2867 7.65078 10.3086 8.51484C10.3141 9.35703 9.67422 10.0297 8.64609 10.0297ZM21 19.857H17.9047V15.3398C17.9047 14.1586 17.4234 13.3492 16.357 13.3492C15.5422 13.3492 15.0883 13.8961 14.8805 14.4211C14.8039 14.607 14.8148 14.8695 14.8148 15.1375V19.857H11.7469C11.7469 19.857 11.7852 11.8508 11.7469 11.1234H14.8148V12.4961C14.9953 11.8945 15.9742 11.0414 17.5383 11.0414C19.4797 11.0414 21 12.2992 21 15.0008V19.857Z" fill={iconColor}/></g><defs><clipPath id="clip0_18_31"><rect width={iconWidth} height={iconHeight} fill="white"/></clipPath></defs></svg>
    default:
      throw new Error(`Invalid name for icon: ${icon}`);
  }
};

function Icon(props) {
  return (
    <div className="icon">
      {icon(props.iconName, props.iconWidth, props.iconHeight, props.iconColor)}
    </div>
  );
}

export default Icon;
