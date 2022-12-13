import React from 'react'

const Footer = () => {
  let footerStyle={
    position:"absolute",
    top: "100vh",
    width:"100%"
  }
  return (
    <footer className="bg-dark text-light py-2 my-2" style={footerStyle}>
      <p className=" text-center">
          Copyright &copy; My TODOs.com
      </p>
    </footer>
  )
}

export default Footer
