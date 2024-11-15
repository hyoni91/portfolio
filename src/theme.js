const size = {
    mobile: '600px',
    tablet: '1024px',
    desktop: '1440px',
 };
 
 export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
 };