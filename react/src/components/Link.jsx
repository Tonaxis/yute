import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function LinkUrl({ to="/", children, className="", style={}, ...props }) {
  const location = useLocation()

  const { pathname } = location;

  return (
    <Link to={to} className={className + " " + (pathname === to ? "active" : "")} style={style} {...props}>{children}</Link>
  )
}
