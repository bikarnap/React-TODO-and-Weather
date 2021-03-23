import React from 'react'; 

const Footer = ({appName, copyRightTo}) => {
  const footer_style = {
    width: '100%', 
    height: '100px', 
    backgroundColor: 'rgb(3, 57, 78)',
    color: 'yellow',
    position: 'fixed', 
    lineHeight:'90px',
    bottom: '0px',
  }
  return(
    <div className="footer">
      <div style={{clear: 'both', marginBottom: '10px'}}></div>
      <p style={footer_style}>{appName} &copy; {copyRightTo}</p>
    </div>
  )
}

export default Footer;